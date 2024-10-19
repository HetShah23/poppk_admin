import React, { useState } from "react";
import { Link} from "react-router-dom";
import Logo from "../../Components/Images/logo.png";
import EyeOpenIco from "../../Components/Images/eye.svg";
import EyeCloseIco from "../../Components/Images/eye-slash.svg";

export default function Login() {
    const [showPassword, setshowPassword] = useState("password");

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
                                    <h1 className="text-center">Sign In</h1>
                                    <p className="text-center">Enter your email address and password to access admin panel.</p>
                                    <form>
                                        <div className="mb-2 pb-1">
                                            <label className="lbl-info-common">Email Address</label>
                                            <input type="email" className="form-control form-style-input" placeholder="Your email" name="" />
                                        </div>
                                        <div className="mb-2 pb-1">
                                            <label className="lbl-info-common">Password</label>
                                            <div className="position-relative login-icons-div">
                                                <input type={showPassword} className="form-control form-style-input" placeholder="Password" name="password" />
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
                                        <div className="mb-2 pb-1">
                                            <div className="row me-0">
                                                <div className="col-6 pe-0">
                                                    <label className="cust-chk-bx">
                                                        <input type="checkbox" className="form-check-inpu" name="" />
                                                        <span className="cust-chkmark"></span>
                                                        Remember me
                                                    </label>
                                                </div>
                                                <div className="col-6 pe-0">
                                                    <div className="text-end">
                                                        <Link className="frt-lnk-last" to="/forgot-password">
                                                            Forgot Password ?
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <button className="btn-all-comn w-100" type="submit">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                    <div className="login-links-bottom text-center">
                                        Don’t have an account?
                                        <Link className="d-inline-block ms-1" to="/signup">
                                            Register Now
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
