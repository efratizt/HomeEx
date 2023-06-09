import React, { useState } from 'react';
import NewOwner from './NewOwner';
import OpenAccount from './OpenAccount';
import axios from 'axios';
import {
    Alert
} from '@mui/material';

const MainComponent = () => {
    const [accountHolders, setAccountHolders] = useState([]);
    const url = "https://localhost:44332/";
    const [accountCounter, setAccountCount] = useState(0);//מספר החשבונות שנפתחו

    const handleAccountHoldersSubmit = (submittedAccountHolders) => {
        if (submittedAccountHolders.length > 0) {
            setAccountHolders(submittedAccountHolders);
        }
    };

    const buildFormData = (accountDetails, accountHolders) => {//יצירת האובייקט
        const formData = {
            ...accountDetails,
            accountHolders: [...accountHolders],
        };

        return formData;
    };

    const handleFormSubmit = (formData1) => {
        let formdata = buildFormData(formData1, accountHolders)//העצם המלא אותו יש לשלוח לדטהבייס
        console.log(formdata, "here the full object")

        axios.post(url + "Bank/Create", formdata)
            .then((response) => {
                // Handle the API response
                console.log('API Response:', response.data);
            })
            .catch((error) => {
                // Handle errors
                console.error('API Error:', error);


            });
        setAccountCount(prevCount => prevCount + 1);//עדכון מספר החשבונות


    };

    return (
        <>
            <NewOwner accountHolders={accountHolders} handleAccountHoldersSubmit={handleAccountHoldersSubmit} />
            {accountCounter < 3 ? (
                <OpenAccount handleFormSubmit={handleFormSubmit} />
            ) : (
                <Alert variant="filled" severity="error">
                    מצטערים, יצרת יותר משלושה חשבונות
                </Alert>
            )}
        </>
    );
};
export default MainComponent;