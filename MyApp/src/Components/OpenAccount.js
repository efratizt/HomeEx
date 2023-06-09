import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Grid,
} from '@mui/material';

const OpenAccount = ({ accountHolders, handleFormSubmit }) => {
    const [accountName, setAccountName] = useState('');
    const [currency, setCurrency] = useState('');
    const [accountType, setAccountType] = useState('');
    const [transferAmount, setTransferAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
            const formData = {
                accountName,
                currency,
                accountType,
                transferAmount,
                accountHolders,
            };
        handleFormSubmit(formData);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <form onSubmit={handleSubmit}>
                <Typography style={{ textAlign: 'right' }} variant="h5" gutterBottom>
                    פרטי החשבון
                </Typography>
                <br />
                <Grid container spacing={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="שם כללי של החשבון"
                                value={accountName}
                                onChange={(e) => setAccountName(e.target.value)}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>סוג מטבע</InputLabel>
                                <Select
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                >
                                    <MenuItem value="דולר">דולר</MenuItem>
                                    <MenuItem value="שקל">שקל</MenuItem>
                                    <MenuItem value="אירו">אירו</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>סוג החשבון</InputLabel>
                                <Select
                                    value={accountType}
                                    onChange={(e) => setAccountType(e.target.value)}
                                >
                                    <MenuItem value="עוש">עוש</MenuItem>
                                    <MenuItem value="השקעות">השקעות</MenuItem>
                                    <MenuItem value="פיקדון">פיקדון</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="סכום צפוי"
                                value={transferAmount}
                                onChange={(e) => setTransferAmount(e.target.value)}
                                fullWidth
                                type="number"
                                step="0.01"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary">
                    צור חשבון
                </Button>
            </form>
        </div>
    );
};

export default OpenAccount;