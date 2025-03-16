import React from "react";
import "../css/homepage.css";
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Header() {
    return (
        <>
            <section className="homePage">
                <div className="homepage-image">
                    <div className="homeTab">
                        <div className="container">
                            <div className="homepage-tab">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="left-tab">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img
                                                        id="profile-image"
                                                        src="/images/dp.jpg"
                                                        alt="ramanand"
                                                    />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="title">
                                                        <h1>Ramanand Dubey</h1>
                                                        <h5>Software Developer</h5>
                                                        <ul>
                                                            <li>
                                                                <Link target="_blank" rel="noreferrer" to="https://www.facebook.com/ramanand.dubey.988/"  className="theme-btn facebook">
                                                                    <FontAwesomeIcon icon={faFacebook} />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link target="_blank" rel="noreferrer" to="https://www.instagram.com/rd.x_69er/" className="theme-btn instagram">
                                                                    <FontAwesomeIcon icon={faInstagram} />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link target="_blank" rel="noreferrer" to="https://www.linkedin.com/in/ramanand-dubey-985b9025a/" className="theme-btn linkedIn">
                                                                    <FontAwesomeIcon icon={faLinkedin} />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-tab">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <h5>Email</h5>
                                                    <p>ramanand.dubey@yahoo.com</p>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <h5>Birth</h5>
                                                    <p>21 June, 2001</p>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <h5>Phone</h5>
                                                    <p>(+91) 8005633372</p>
                                                    <p>(+91) 8302491984</p>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <h5>Address</h5>
                                                    <p>Kaptanganj, Azamgarh, U.P.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;
