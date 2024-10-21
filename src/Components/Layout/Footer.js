import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="mt-auto ftrs-top-divs">
            <div className="d-md-flex align-items-center ftrs-section">
                <p className="mb-0 text-md-center text-center">2024 © All Rights Reserved POPPK</p>
                <div className="ms-auto text-md-end text-center">
                    <Link to="/">About us</Link>
                    <Link to="/">Help</Link>
                    <Link to="/">Contact us</Link>
                </div>
            </div>
        </div>
    );
}