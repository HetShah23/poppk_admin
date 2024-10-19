import React, { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { Link } from 'react-router-dom';
import ArrowBrad from "../Components/Images/bradcumb-ico.svg";
import CloudImage from "../Components/Images/cloude-ico.svg";

export default function AddReviews() {
    return (
        <Layout>
            <div className="nav-top-section">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-12">
                            <div className="bradcumb-text">
                                <Link to="/">Reviews</Link>
                                <img src={ArrowBrad} loading="lazy" alt="" />
                                <span>Edit Review</span>
                            </div>
                            <div className="bx-white-main">
                                <h2>Edit Review</h2>
                                <form>
                                    <div className="row me-0">
                                        <div className="col-12 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">User Name</label>
                                            <input type="text" className="form-control form-style-input" placeholder="Enter city name" name="" />
                                        </div>
                                        <div className="col-12 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">Review</label>
                                            <input type="text" className="form-control form-style-input" placeholder="Good job provider company and self organization" name="" />
                                        </div>
                                        <div className="col-12 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">Rating</label>
                                            <input type="text" className="form-control form-style-input" placeholder="" name="" />
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
                                        </div>
                                    </div>
                                    <div className="pt-2 text-md-end text-center frm-btn-btm">
                                        <button className="btn-all-cancel" type="button">
                                            Cancel
                                        </button>
                                        <button className="btn-all-comn" type="submit">
                                            Update Review
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