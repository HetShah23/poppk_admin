import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";

const Login = lazy(() => import("./Pages/Common/Login"));
const Signup = lazy(() => import("./Pages/Common/Signup"));
const ForgotPassword = lazy(() => import("./Pages/Common/ForgotPassword"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const EditUser = lazy(() => import("./Pages/EditUser"));
const AddUser = lazy(() => import("./Pages/AddUser"));
const AddFounders = lazy(() => import("./Pages/AddFounders"));
const AddAdvertainment = lazy(() => import("./Pages/AddAdvertainment"));
const AddProject = lazy(() => import("./Pages/AddProject"));
const AddDonation = lazy(() => import("./Pages/AddDonation"));
const AddCity = lazy(() => import("./Pages/AddCity"));
const AddReviews = lazy(() => import("./Pages/AddReviews"));
const AddBlog = lazy(() => import("./Pages/AddBlog"));
const User = lazy(() => import("./Pages/User"));
const Founders = lazy(() => import("./Pages/Founders"));
const Advertainment = lazy(() => import("./Pages/Advertainment"));
const PointTable = lazy(() => import("./Pages/PointTable"));
const Projects = lazy(() => import("./Pages/Projects"));
const Donation = lazy(() => import("./Pages/Donation"));
const City = lazy(() => import("./Pages/City"));
const Reviews = lazy(() => import("./Pages/Reviews"));
const RecycleBin = lazy(() => import("./Pages/RecycleBin"));
const Inquiry = lazy(() => import("./Pages/Inquiry"));
const SponsorAds = lazy(() => import("./Pages/SponsorAds"));
const Blogs = lazy(() => import("./Pages/Blogs"));
const Withdraw = lazy(() => import("./Pages/Withdraw"));

const RequireAuth = () => {
    let isAuthenticated = sessionStorage.getItem("");
    return isAuthenticated ? <Outlet /> : <Navigate to={"/"} />;
};

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Suspense
                fallback={
                    <div>
                        <div className="loading-cust">{/* <img src={Logo} loading="lazy" className="img-fluid" alt="logo" /> */}</div>
                    </div>
                }
            >
                <Routes>
                    <Route path="/" strict element={<Login />} />
                    <Route path="/login" strict element={<Login />} />
                    <Route path="/signup" strict element={<Signup />} />
                    <Route path="/forgot-password" strict element={<ForgotPassword />} />
                    <Route path="/dashboard" strict element={<Dashboard />} />
                    <Route path="/edituser" strict element={<EditUser />} />
                    <Route path="/adduser" strict element={<AddUser />} />
                    <Route path="/addfounders" strict element={<AddFounders />} />
                    <Route path="/addadvertainment" strict element={<AddAdvertainment />} />
                    <Route path="/addproject" strict element={<AddProject />} />
                    <Route path="/adddonation" strict element={<AddDonation />} />
                    <Route path="/addcity" strict element={<AddCity />} />
                    <Route path="/addreviews" strict element={<AddReviews />} />
                    <Route path="/addblog" strict element={<AddBlog />} />
                    <Route path="/user" strict element={<User />} />
                    <Route path="/founders" strict element={<Founders />} />
                    <Route path="/advertainment" strict element={<Advertainment />} />
                    <Route path="/pointtable" strict element={<PointTable />} />
                    <Route path="/projects" strict element={<Projects />} />
                    <Route path="/donation" strict element={<Donation />} />
                    <Route path="/reviews" strict element={<Reviews />} />
                    <Route path="/city" strict element={<City />} />
                    <Route path="/recyclebin" strict element={<RecycleBin />} />
                    <Route path="/inquiry" strict element={<Inquiry />} />
                    <Route path="/sponsorads" strict element={<SponsorAds />} />
                    <Route path="/blogs" strict element={<Blogs />} />
                    <Route path="/wthdraw" strict element={<Withdraw />} />
                    <Route element={<RequireAuth />}>{/* <Route path="/user" strict element={<User />} /> */}</Route>
                    <Route path="*" element={<Navigate to={"/login"} />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
