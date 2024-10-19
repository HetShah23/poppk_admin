import React from 'react';
import Layout from '../Components/Layout/Layout';
import DashIco1 from "../Components/Images/dash-top-1.svg";
import DashIco2 from "../Components/Images/dash-top-2.svg";
import DashIco3 from "../Components/Images/dash-top-3.svg";
import DashIco4 from "../Components/Images/dash-top-4.svg";
import DashIco5 from "../Components/Images/dash-top-5.svg";
import DashIco6 from "../Components/Images/dash-top-6.svg";
import AddIco from "../Components/Images/plus-add-ico.svg";
import Datatable from '../Components/Datatable/Datatable';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <Layout>
            <div className="nav-top-section">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-12">
                            <div className="bx-white-main pb-0">
                                <div className="row me-0">
                                    <div className="col-md-4 pe-0 mb-2 pb-1">
                                        <div className="d-flex align-items-center bdr-dash-box">
                                            <div>
                                                <img src={DashIco1} loading="lazy" alt="" />
                                            </div>
                                            <div>
                                                <span className="d-block">Total Customer</span>
                                                <bdi className="d-block">19</bdi>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pe-0 mb-2 pb-1">
                                        <div className="d-flex align-items-center bdr-dash-box">
                                            <div>
                                                <img src={DashIco2} loading="lazy" alt="" />
                                            </div>
                                            <div>
                                                <span className="d-block">Pending Deposit</span>
                                                <bdi className="d-block">Rs.5,850</bdi>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pe-0 mb-2 pb-1">
                                        <div className="d-flex align-items-center bdr-dash-box">
                                            <div>
                                                <img src={DashIco3} loading="lazy" alt="" />
                                            </div>
                                            <div>
                                                <span className="d-block">Total Income</span>
                                                <bdi className="d-block">Rs.5,850</bdi>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pe-0 mb-2 pb-1">
                                        <div className="d-flex align-items-center bdr-dash-box">
                                            <div>
                                                <img src={DashIco4} loading="lazy" alt="" />
                                            </div>
                                            <div>
                                                <span className="d-block">Total Founders</span>
                                                <bdi className="d-block">3</bdi>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pe-0 mb-2 pb-1">
                                        <div className="d-flex align-items-center bdr-dash-box">
                                            <div>
                                                <img src={DashIco5} loading="lazy" alt="" />
                                            </div>
                                            <div>
                                                <span className="d-block">Founder Income</span>
                                                <bdi className="d-block">Rs.5,850</bdi>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pe-0 mb-2 pb-1">
                                        <div className="d-flex align-items-center bdr-dash-box">
                                            <div>
                                                <img src={DashIco6} loading="lazy" alt="" />
                                            </div>
                                            <div>
                                                <span className="d-block">Total Income</span>
                                                <bdi className="d-block">Rs.7,850</bdi>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="bx-white-main">
                                <div className="d-flex align-items-center">
                                    <h2 className="mb-0">Users</h2>
                                    <div className="ms-auto">
                                        <Link to="/" className="btn-all-comn">
                                            <img src={AddIco} className="me-2" loading="lazy" alt="" />
                                            Add User
                                        </Link>
                                    </div>
                                </div>
                                <div className="pt-2 mt-1">
                                    <Datatable />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}