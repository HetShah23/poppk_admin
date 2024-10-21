import React, { useContext, useEffect, useState } from "react";
import SeacrhIco from "../../Components/Images/search-ico.svg";
import { Dropdown } from "react-bootstrap";
import ProfileIco from "../../Components/Images/profile-image.png";
// import ToggleOpenIco from "../../Components/Images/toggle-icon.svg";

export default function Header(props) {

    const addactiveclass = () => {
        document.getElementById("root").classList.toggle("root-add-class");
    };

    return (
        <header className="header-div-tops">
            <div className="d-lg-none" onClick={addactiveclass}>
                {/* <img src={ToggleOpenIco} loading="lazy" alt="toggle" /> */}
            </div>
            <div className="d-inline-flex align-items-center header-titles-cust">
                <span></span>
                <h1>Blogs</h1>
            </div>
            <div className="ms-auto d-flex align-items-center justify-content-end">
                <div className="position-relative src-hdr-tops">
                    <img src={SeacrhIco} loading="lazy" alt="" />
                    <input type="search" className="form-control form-style-input" placeholder="Search..." />
                </div>
                <div className="header-profile-cust ms-md-4 ms-3">
                    <Dropdown>
                        <Dropdown.Toggle variant="success">
                            <img src={ProfileIco} className="me-md-2 pe-md-1" loading="lazy" alt="" />
                            <div>John Doe</div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </header>
    );
}
