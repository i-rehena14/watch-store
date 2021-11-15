import React from 'react';
import { red } from '@mui/material/colors';

const Footer = () => {
    return (
        <div style={{ backgroundColor: red[200], color: 'white' }}>
            <div className="">
                <div className="">
                    <h2>Our Services</h2>
                    <p>Selling best Product</p>
                    <p>Guiding</p>
                </div>
                <div>
                    {/* -------Follow----- */}
                    <h2>Follow Us On</h2>

                    <li>Facebook</li>
                    <li>Instagram</li>

                </div>
            </div>
            <p className="p-2">Copyright&copy;2021 watchTime. All Rights Reserved.</p>

        </div>
    );
};

export default Footer;