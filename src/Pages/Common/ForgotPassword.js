import React, { useState } from "react";
import { Link} from "react-router-dom";
import Logo from "../../Components/Images/logo.png";
import EyeOpenIco from "../../Components/Images/eye.svg";
import EyeCloseIco from "../../Components/Images/eye-slash.svg";

export default function ForgotPassword() {

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
                                    <h1 className="text-center mb-3">Forgot Password</h1>
                                    <form>
                                        <div className="mb-2 pb-1">
                                            <label className="lbl-info-common">Email Address</label>
                                            <input type="email" className="form-control form-style-input" placeholder="Your email" name="" />
                                        </div>
                                        <div className="pt-2">
                                            <button className="btn-all-comn w-100" type="submit">
                                                Submit
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
