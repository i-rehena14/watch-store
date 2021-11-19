import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h3>404-NOT FOUND</h3>
            <Button><Link to="/">Go To Home</Link></Button>
        </div>
    );
};

export default NotFound;