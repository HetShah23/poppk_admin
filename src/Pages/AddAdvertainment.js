import React, { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { Link } from 'react-router-dom';
import ArrowBrad from "../Components/Images/bradcumb-ico.svg";
import CloudImage from "../Components/Images/cloude-ico.svg";

export default function AddAdvertainment() {

    return (
        <Layout>
            <div className="nav-top-section">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-12">
                            <div className="bradcumb-text">
                                <Link to="/">Advertainment</Link>
                                <img src={ArrowBrad} loading="lazy" alt="" />
                                <span>Add Advertainment</span>
                            </div>
                            <div className="bx-white-main">
                                <h2>Add Advertainment</h2>
                                <form>
                                    <div className="row me-0">
                                        <div className="col-12 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">
                                                First Name*
                                            </label>
                                            <input type="text" className="form-control form-style-input" placeholder="Enter advertainment name" name="" />
                                        </div>
                                        <div className="col-12 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">
                                                URL*
                                            </label>
                                            <input type="text" className="form-control form-style-input" placeholder="https://www.example.com" name="" />
                                        </div>
                                        <div className="col-12 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">City</label>
                                            <select className="form-select form-style-input">
                                                <option selected>Select city</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-12 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">Banner Image</label>
                                            <div className='file-upload-section position-relative text-center'>
                                                <input type="file" />
                                                <img src={CloudImage} loading="lazy" alt="" />
                                                <span className="d-block">Upload image</span>
                                                <bdi className="d-block">Image must be 1200 x 800</bdi>
                                                <p className='m-auto'>Choose File</p>
                                            </div>
                                        </div>
                                        <div className="col-12 pe-0 mb-2 pb-1">
                                            <div className="d-inline-block align-middle me-4">
                                                <label className="lbl-info-common">Status</label>
                                                <div className="d-inline-flex align-items-center radio-cust-button">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="Status" id="Active" defaultChecked />
                                                        <label className="form-check-label" for="Active">
                                                            Active
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="Status" id="Disable" />
                                                        <label className="form-check-label" for="Disable">
                                                            Disable
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <label className="lbl-info-common">Local/Brand</label>
                                                <div className="d-inline-flex align-items-center radio-cust-button">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="LocalBrand" id="Locale" defaultChecked />
                                                        <label className="form-check-label" for="Locale">
                                                            Locale
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="LocalBrand" id="Brand" />
                                                        <label className="form-check-label" for="Brand">
                                                            Brand
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-2 text-md-end text-center frm-btn-btm">
                                        <button className="btn-all-cancel" type="button">
                                            Cancel
                                        </button>
                                        <button className="btn-all-comn" type="submit">
                                            Add Advertainment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}