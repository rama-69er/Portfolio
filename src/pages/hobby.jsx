import React from 'react';

import "../css/hobby.css";
import Navbar from "../components/navbar";

import { NavLink, Outlet, Navigate, useLocation } from "react-router-dom";

function Hobby() {

    const location = useLocation();

    return (
        <>
            {location.pathname === '/hobby' && <Navigate to="sports" />}
            <section className="siteBody">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 d-none d-lg-block">
                            <Navbar />
                        </div>
                        <div className="col-lg-10">
                            <div className="hobby-page">
                                <div className="row">
                                    <nav className="navBar">
                                        <ul className="hobby-nav">
                                            <li className="nav-item">
                                                <NavLink className="theme-btn" to="sports">Sports</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="theme-btn" to="cooking">Cooking</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="theme-btn" to="books">Books</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="theme-btn" to="travel">Travel</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="theme-btn" to="music">Music</NavLink>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Hobby;