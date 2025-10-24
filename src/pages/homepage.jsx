import React from "react";
import "../css/homepage.css";

import Navbar from "../components/navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPenToSquare, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

const techData = [
  { id: 1, imgLink: "./images/html.webp", aLink: "https://www.html.com" },
  { id: 2, imgLink: "./images/css.webp", aLink: "https://www.w3schools.com/cssref/index.php" },
  { id: 3, imgLink: "./images/js.webp", aLink: "https://www.w3schools.com/jsrEF/default.asp" },
  { id: 4, imgLink: "./images/node.webp", aLink: "https://www.nodejs.org" },
  { id: 5, imgLink: "./images/mongo.webp", aLink: "http://www.mongodb.com" },
  { id: 6, imgLink: "./images/react.webp", aLink: "http://www.react.dev" },
]

function HomePage() {
  return (
    <>
      <section className="siteBody">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 d-none d-lg-block">
              <Navbar />
            </div>
            <div className="col-lg-10">
              <div className="site-about bg-white my-2 rounded rounded-4 p-0 p-md-3">
                <div className="row">
                  <div className="col-md-5">
                    <div className="about-image">
                      <img src="./images/dp1.webp" alt="err_loading" className="img-fluid w-100 rounded rounded-5" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="about-para p-3 p-md-0">
                      <h2 className="h4 fw-bold">About Me</h2>
                      <p>
                        Fresher web developer proficient in English, Hindi and
                        Nepali languages seeking a challenging role as a Software
                        Engineer. Skilled in developing websites and problem
                        solving, with a strong understanding of programming
                        languages and frame projects. A hard projecting and dedicated
                        person with a passion for creating innovations and
                        Bootstrap.
                      </p>
                      <h6 className="mb-3 text-secondary">
                        <FontAwesomeIcon icon={faCheck} /> Communication Skills
                      </h6>
                      <h6 className="mb-3 text-secondary">
                        <FontAwesomeIcon icon={faCheck} /> Time Management
                      </h6>
                      <h6 className="mb-3 text-secondary">
                        <FontAwesomeIcon icon={faCheck} /> Problem Solving
                      </h6>
                      <h6 className="mb-3 text-secondary">
                        <FontAwesomeIcon icon={faCheck} /> Team Project
                      </h6>
                      <h6 className="mb-3 text-secondary">
                        <FontAwesomeIcon icon={faCheck} /> Adaptability
                      </h6>
                      <h6 className="mb-3 text-secondary">
                        <FontAwesomeIcon icon={faCheck} /> Leadership
                      </h6>
                      <div className="text-center text-md-start">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="./Ramanand's Resume.pdf"
                          download={true}
                          className="theme-btn"
                        >Download My Resume</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project p-3">
                <h2 className="h5 fw-bold text-center mb-3">What I am Doing...</h2>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="project-left mb-3 mb-md-0 p-4 border border-2 rounded-5 border-secondary text-pink">
                      <div className="d-flex align-items-center mb-2">
                        <FontAwesomeIcon className="me-2 fs-4" icon={faWandMagicSparkles} />
                      <h2 className="h5 mb-0 text-dark">Full Stack Web Development</h2>
                      </div>
                      <p className="mb-0">
                        Innovative, proficient and detail-oriented full stack
                        developer and programmer using HTML, CSS and Javascript
                        and React.js.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-right mb-3 mb-md-0 p-4 border border-2 rounded-5 border-secondary text-pink">
                      <div className="d-flex align-items-center mb-2">
                        <FontAwesomeIcon className="me-2 fs-4" icon={faPenToSquare} />
                      <h2 className="h5 mb-0 text-dark">Data Structure and Algorithm</h2>
                      </div>
                      <p className="mb-0">
                        Problem solving skills using C++, motivated to expand
                        knowledge & skills and is curious about learning new
                        things.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="technology p-3">
                <div className="container">
                  <h2 className="h5 mb-3 fw-bold">Technologies that I use...</h2>
                  <div className="row align-items-center justify-content-center justify-content-md-start">
                    {techData.map((data) =>
                      <div className="mb-3 col-6 col-md-3 col-lg-2 d-none d-lg-block">
                        <div className="technology-tab d-flex align-items-center justify-content-center rounded-3 bg-light p-4 w-100">
                          <span key={data.id}>
                            <a href={data.aLink}>
                              <img src={data.imgLink} alt="err_loading" className="img-fluid" />
                            </a>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
