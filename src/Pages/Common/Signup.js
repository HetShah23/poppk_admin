import React, { useState } from "react";
import { Link} from "react-router-dom";
import Logo from "../../Components/Images/logo.png";
import EyeOpenIco from "../../Components/Images/eye.svg";
import EyeCloseIco from "../../Components/Images/eye-slash.svg";

export default function Signup() {
    const [showPassword, setshowPassword] = useState("password");
    const [showPassword2, setshowPassword2] = useState("password");

    return (
        <div className="container-fluid login-nav-bg">
            <div className="row">
                <div className="col-12">
                    <div className="login-div-scrollpart">
                        <div className="main-div-logins">
                            <div className="main-section-box-ctr m-auto position-relative">
                                <div className="w-100 text-center logo-top-ctr">
                                    <img src={Logo} loading="lazy" alt="logo" className="img-fluid" />
                                </div>
                                <div className="sign-form-cust">
                                    <h1 className="text-center">Create Account</h1>
                                    <p className="text-center">Don't have an account? Create your free account now.</p>
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
                                                    Referral*
                                                </label>
                                                <input type="text" className="form-control form-style-input" placeholder="Enter referral" name="" />
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
                                        <div className="pt-2">
                                            <button className="btn-all-comn w-100" type="submit">
                                                Signup
                                            </button>
                                        </div>
                                    </form>
                                    <div className="login-links-bottom text-center">
                                        Already have an account?
                                        <Link className="d-inline-block ms-1" to="/login">
                                            Login
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-center copyright-text-btm">Copyright ©2024 All rights reserved</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
