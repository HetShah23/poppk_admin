import React from 'react';
import Layout from '../Components/Layout/Layout';
import AddIco from "../Components/Images/plus-add-ico.svg";
import Datatable from '../Components/Datatable/Datatable';
import { Link } from 'react-router-dom';

export default function RecycleBin() {
    return (
        <Layout>
            <div className="nav-top-section">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-12 mt-3">
                            <div className="bx-white-main">
                                <div className="d-flex align-items-center">
                                    <h2 className="mb-0">RecycleBin</h2>
                                    <div className="ms-auto">
                                        <Link to="/" className="btn-all-comn">
                                            <img src={AddIco} className="me-2" loading="lazy" alt="" />
                                            Add RecycleBin
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