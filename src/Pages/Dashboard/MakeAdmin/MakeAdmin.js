import React, { useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://nameless-depths-17324.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedcount > 0) {
                    console.log(data);

                    setSuccess(true);
                }
                console.log(data);
            })
        e.preventDefault();
    }
    const HandleOnBlur = e => {
        setEmail(e.target.value);
    }
    return (
        <div>

            <h2 style={{ fontFamily: 'cursive' }}>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    id="standard-basic"
                    type="email"
                    onBlur={HandleOnBlur}
                    label="Email"
                    variant="standard" />
                <Button type="submit" variant="contained" >Make Admin</Button>
            </form>
            {success && <Alert severity="success">Added Admin SuccessFully!!</Alert>}
        </div>
    );
};

export default MakeAdmin; <h3>Make An Admin</h3>