import React, { useContext, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout(props) {

    const removeLayer = () => {
        document.getElementById("root").classList.remove("root-add-class");
    };

    return (
        <>
            <Header />
            <Sidebar />
            {props.children}
            <Footer />
            <div className="overlay-dark" onClick={removeLayer}></div>
        </>
    );
}
