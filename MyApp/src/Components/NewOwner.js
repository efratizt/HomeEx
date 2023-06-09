import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Button,
    Grid,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material';

const NewOwner = ({ handleAccountHoldersSubmit }) => {


    const [accountHolders, setAccountHolders] = useState([{}]);

    const handleAccountHolderChange = (index, accountHolder) => {
        const updatedAccountHolders = [...accountHolders];
        updatedAccountHolders[index] = accountHolder;
        setAccountHolders(updatedAccountHolders);
    };


    const addAccountHolder = () => {
        if (accountHolders.length < 3) {
            setAccountHolders([...accountHolders, {}]);
        }
    };


    //לבדוק!!!!

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     props.handleAccountHoldersSubmit(accountHolders);
    // };

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <form>
                {accountHolders.map((accountHolder, index) => (
                    <Grid container spacing={2} key={index}>
                        <Grid item xs={12} style={{ textAlign: 'right' }}>
                            <Typography variant="h6" gutterBottom>
                                פרטי בעל החשבון {index + 1}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="שם פרטי"
                                value={accountHolder.firstName || ''}
                                onChange={(e) =>
                                    handleAccountHolderChange(index, {
                                        ...accountHolder,
                                        firstName: e.target.value,
                                    })
                                }
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="שם משפחה"
                                value={accountHolder.lastName || ''}
                                onChange={(e) =>
                                    handleAccountHolderChange(index, {
                                        ...accountHolder,
                                        lastName: e.target.value,
                                    })
                                }
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="מספר ת.ז."
                                value={accountHolder.idNumber || ''}
                                onChange={(e) =>
                                    handleAccountHolderChange(index, {
                                        ...accountHolder,
                                        idNumber: e.target.value,
                                    })
                                }
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>מין</InputLabel>
                                <Select
                                    value={accountHolder.gender || ''}
                                    onChange={(e) =>
                                        handleAccountHolderChange(index, {
                                            ...accountHolder,
                                            gender: e.target.value,
                                        })
                                    }
                                >
                                    <MenuItem value="זכר">זכר</MenuItem>
                                    <MenuItem value="נקבה">נקבה</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="תאריך לידה"
                                value={accountHolder.dateOfBirth || ''}
                                onChange={(e) =>
                                    handleAccountHolderChange(index, {
                                        ...accountHolder,
                                        dateOfBirth: e.target.value,
                                    })
                                }
                                fullWidth
                                type="date"
                            />
                        </Grid>
                    </Grid>
                ))}
                {accountHolders.length < 3 && (
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        onClick={addAccountHolder}
                    >
                        הוסף בעל חשבון נוסף
                    </Button>
                )}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(accountHolders)
                        handleAccountHoldersSubmit(accountHolders);
                    }}
                >
                    שמור בעלים
                </Button>

            </form>
        </div>
    );
}


export default NewOwner;
