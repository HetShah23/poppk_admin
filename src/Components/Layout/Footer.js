import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="d-flex align-items-center ftrs-section mt-auto">
            <p className='mb-0'>2024 © All Rights Reserved POPPK</p>
            <div className='ms-auto'>
                <Link to="/">About us</Link>
                <Link to="/">Help</Link>
                <Link to="/">Contact us</Link>
            </div>
        </div>
    );
}