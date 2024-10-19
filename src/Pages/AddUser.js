import React, { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { Link } from 'react-router-dom';
import ArrowBrad from "../Components/Images/bradcumb-ico.svg";
import EyeOpenIco from "../Components/Images/eye.svg";
import EyeCloseIco from "../Components/Images/eye-slash.svg";

export default function AddUser() {
    const [showPassword, setshowPassword] = useState("password");
    const [showPassword2, setshowPassword2] = useState("password");

    return (
        <Layout>
            <div className="nav-top-section">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-12">
                            <div className="bradcumb-text">
                                <Link to="/">Users</Link>
                                <img src={ArrowBrad} loading="lazy" alt="" />
                                <span>Add User</span>
                            </div>
                            <div className="bx-white-main">
                                <h2>Add User</h2>
                                <form>
                                    <div className="row me-0">
                                        <div className="col-md-6 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">
                                                First Name*
                                            </label>
                                            <input type="text" className="form-control form-style-input" placeholder="Enter your first name" name="" />
                                        </div>
                                        <div className="col-md-6 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">
                                                Last Name*
                                            </label>
                                            <input type="text" className="form-control form-style-input" placeholder="Enter your last name" name="" />
                                        </div>
                                        <div className="col-md-6 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">
                                                Email Address*
                                            </label>
                                            <input type="email" className="form-control form-style-input" placeholder="Enter your email address" name="" />
                                        </div>
                                        <div className="col-md-6 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">
                                                Phone No*
                                            </label>
                                            <input type="text" className="form-control form-style-input" placeholder="Enter your phone no." name="" />
                                        </div>
                                        <div className="col-md-6 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">PAN No.</label>
                                            <input type="text" className="form-control form-style-input" placeholder="Enter your PAN no" name="" />
                                        </div>
                                        <div className="col-md-6 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">Aadhar No.</label>
                                            <input type="text" className="form-control form-style-input" placeholder="Enter your Aadhar no" name="" />
                                        </div>
                                        <div className="col-md-6 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">
                                                Referral Code*
                                            </label>
                                            <input type="text" className="form-control form-style-input" placeholder="Enter your referral code" name="" />
                                        </div>
                                        <div className="col-md-6 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">Bank Name</label>
                                            <input type="text" className="form-control form-style-input" placeholder="Enter bank name" name="" />
                                        </div>
                                        <div className="col-md-6 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">Bank Account Number</label>
                                            <input type="text" className="form-control form-style-input" placeholder="Enter your bank account" name="" />
                                        </div>
                                        <div className="col-md-6 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">IFSC Code</label>
                                            <input type="text" className="form-control form-style-input" placeholder="Enter IFSC code" name="" />
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
                                        <div className="col-md-6 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">Password</label>
                                            <div className="position-relative login-icons-div">
                                                <input type={showPassword} className="form-control form-style-input" placeholder="Enter your password" name="password" />
                                                <div className="eyes-icons-div">
                                                    <img
                                                        src={showPassword === "password" ? EyeCloseIco : EyeOpenIco}
                                                        loading="lazy"
                                                        alt="Password"
                                                        className="img-fluid"
                                                        onClick={() => setshowPassword(showPassword === "password" ? "text" : "password")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pe-0 mb-2 pb-1">
                                            <label className="lbl-info-common">Confirm Password</label>
                                            <div className="position-relative login-icons-div">
                                                <input type={showPassword2} className="form-control form-style-input" placeholder="Enter your confirm password" name="password" />
                                                <div className="eyes-icons-div">
                                                    <img
                                                        src={showPassword2 === "password" ? EyeCloseIco : EyeOpenIco}
                                                        loading="lazy"
                                                        alt="Password"
                                                        className="img-fluid"
                                                        onClick={() => setshowPassword2(showPassword2 === "password" ? "text" : "password")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 pe-0 mb-2 pb-1">
                                            <label className="cust-chk-bx">
                                                <input type="checkbox" className="form-check-inpu" name="" />
                                                <span className="cust-chkmark"></span>I accept Terms and Conditions
                                            </label>
                                        </div>
                                    </div>
                                    <div className="pt-2 text-md-end text-center frm-btn-btm">
                                        <button className="btn-all-cancel" type="button">
                                            Cancel
                                        </button>
                                        <button className="btn-all-comn" type="submit">
                                            Add User
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