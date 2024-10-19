import React from "react";
import MainRoutes from "./MainRoutes";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { ToastContainer } from "react-toastify";

export default function App() {
    return (
        <>
            <ToastContainer autoClose={1500} theme="dark" position="bottom-right" />
            <MainRoutes />
        </>
    );
}

