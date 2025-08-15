import React from "react";
import "../css/homepage.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Header() {
    return (
        <>
            <section className="homePage py-3 py-md-5">
                <div className="container">
                    <div className="homeTab p-4 rounded-4">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6">
                                <div className="left-tab">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <img
                                                src="/images/dp.webp"
                                                alt="Best Portfolio"
                                                className="profile-image img-fluid rounded-4 border-2 h-100 w-100 mb-3 mb-lg-0"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="title text-center mb-3 mb-md-0 text-white">
                                                <div className="mb-3">
                                                    <h1>Ramanand Dubey</h1>
                                                    <h5>Software Developer</h5>
                                                </div>
                                                <ul className="list-unstyled d-flex align-items-center justify-content-evenly gap-3">
                                                    <li>
                                                        <Link target="_blank" rel="noreferrer" to="https://www.facebook.com/ramanand.dubey.988/" className="theme-btn facebook">
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
                                <div className="right-tab text-white">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-sm-6">
                                            <h5>Email</h5>
                                            <p>ramanand.dubey@yahoo.com</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>Birth</h5>
                                            <p>21 June, 2001</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>Phone</h5>
                                            <p className="mb-0">(+91) 8005633372</p>
                                            <p>(+91) 8302491984</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>Address</h5>
                                            <p className="mb-0">Kaptanganj, Azamgarh, U.P.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>)
}

export default Header;
