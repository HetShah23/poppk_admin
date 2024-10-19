import React, { useContext, useEffect, useState } from "react";
// import Profile from "../../Components/Images/profile-image.png";
// import NotificationIco from "../../Components/Images/notificationIco-icon.svg";
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
            <div className="ms-auto">
                {/* <div className="d-inline-block align-middle">
                    <img src={NotificationIco} loading="lazy" alt="notification" />
                </div> */}
                <div className="profile-cust-hdr d-inline-block align-middle">
                    {/* <img src={Profile} loading="lazy" alt="profile" /> */}
                </div>
            </div>
        </header>
    );
}
