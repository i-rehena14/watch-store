import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        e.preventDefault();
    }
    const HandleOnBlur = e => {
        setEmail(e.target.value);
    }
    return (
        <div>
            <h3>Make An Admin</h3>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    id="standard-basic"
                    type="email"
                    onBlur={HandleOnBlur}
                    label="Email"
                    variant="standard" />
                <Button type="submit" variant="contained" >Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin; <h3>Make An Admin</h3>