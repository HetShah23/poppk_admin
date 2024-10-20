import React from 'react';
import Layout from '../Components/Layout/Layout';
import AddIco from "../Components/Images/plus-add-ico.svg";
import BlogImage from "../Components/Images/blog-image.svg";
import { Link } from 'react-router-dom';

export default function Blogs() {
    return (
        <Layout>
            <div className="nav-top-section">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-12 mt-3">
                            <div className="bx-white-main">
                                <h2 className="mb-0">Blogs</h2>
                                <div className="text-center blog-section-info">
                                    <img src={BlogImage} loading="lazy" alt="" />
                                    <p>No blogs available. Click 'Add' to add a new blog.</p>
                                    <Link to="/" className="btn-all-comn">
                                        <img src={AddIco} className="me-2" loading="lazy" alt="" />
                                        Add Blogs
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}