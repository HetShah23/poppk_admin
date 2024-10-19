import React, { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { Link } from 'react-router-dom';
import ArrowBrad from "../Components/Images/bradcumb-ico.svg";
import CloudImage from "../Components/Images/cloude-ico.svg";

export default function AddBlog() {
    return (
        <Layout>
            <div className="nav-top-section">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-12">
                            <div className="bx-white-main">
                                <h2>Add Blog</h2>
                                <form>
                                    <div className="row me-0">
                                        <div className="col-12 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">
                                                First Name*
                                            </label>
                                            <input type="text" className="form-control form-style-input" placeholder="Enter blog name" name="" />
                                        </div>
                                        <div className="col-12 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">
                                                Slug*
                                            </label>
                                            <input type="text" className="form-control form-style-input" placeholder="Enter blog slug" name="" />
                                        </div>
                                        <div className="col-12 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">Description</label>
                                            <textarea rows={5} className="form-control form-style-input h-auto" placeholder="Write details about blog..." name=""></textarea>
                                        </div>
                                        <div className="col-12 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">Image</label>
                                            <div className="file-upload-section position-relative text-center">
                                                <input type="file" />
                                                <img src={CloudImage} loading="lazy" alt="" />
                                                <span className="d-block">Upload image</span>
                                                <bdi className="d-block">Image must be 1200 x 800</bdi>
                                                <p className="m-auto">Choose File</p>
                                            </div>
                                        </div>
                                        <div className="col-12 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">Meta Title</label>
                                            <input type="text" className="form-control form-style-input" placeholder="Enter blog meta title" name="" />
                                        </div>
                                        <div className="col-12 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">Meta Description</label>
                                            <textarea rows={5} className="form-control form-style-input h-auto" placeholder="Write details about blog..." name=""></textarea>
                                        </div>
                                        <div className="col-12 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">Meta Keyword</label>
                                            <input type="text" className="form-control form-style-input" placeholder="Write here..." name="" />
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
                                            Add Blog
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