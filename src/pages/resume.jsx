import React from "react";
import "../css/resume.css";

import Navbar from "../components/navbar";


function Resume() {
  return (
    <>
      <section className="siteBody">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <Navbar />
            </div>
            <div className="col-lg-10">
              <div className="siteBody">
                <div className="resume-page">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="resume-heading resume-heading-1">
                            <p>2019 - 2024</p>
                            <h2>Education Qualification</h2>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="resume-tab">
                            <h3>Intermediate Education</h3>
                            <span>2019 - 2020</span>
                            <p>Swami TeonRam Alok sr. sec. School, Kota, Rajasthan</p>
                            <hr />
                            <p>
                              I have passed my intermediate education from Swami TeonRam Alok sr. sec. school gaining 65% marks in the subject of P.C.M. from R.B.S.E. board.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="resume-tab">
                            <h3>Bachlore of Technology</h3>
                            <span>2020 - 2024</span>
                            <p>
                              Veer Bahadur Singh Purvanchal University, Jaunpur, Uttar Pradesh
                            </p>
                            <hr />
                            <p>
                              I have completed my bachlore degree from Veer Bahadur Singh Purvanchal University obtaining aggregrate 70.69% marks in the branch of Information Technology.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="resume-heading resume-heading-2">
                            <p>2024 - Onwards</p>
                            <h2>Job Experience</h2>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="resume-tab">
                            <h3>Innovilla Private Ltd.</h3>
                            <span>02 June,23 - 02 July,23</span>
                            <p>CDC Building, BHU, Varanasi</p>
                            <hr />
                            <p>
                              The company's motive was to provide a running, seo based
                              web application to the local business around the city. I
                              projected there as an Inter using technologies such as
                              HTML, CSS, JS and Bootstrap.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="resume-tab">
                            <h3>Next . . .</h3>
                            <span>+</span>
                            <p>*-*-*-*-*-*-*-*</p>
                            <hr />
                            <p>
                              *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="resume-features">
                        <p>Skills</p>
                        <h2>Frontend Skills</h2>
                        <div className="resume-bar">
                          HTML
                          <div className="progress-bar">
                            <div className="inner1-bar1">100%</div>
                          </div>
                        </div>
                        <div className="resume-bar">
                          CSS
                          <div className="progress-bar">
                            <div className="inner1-bar2">100%</div>
                          </div>
                        </div>
                        <div className="resume-bar">
                          BOOTSTRAP
                          <div className="progress-bar">
                            <div className="inner1-bar3">85%</div>
                          </div>
                        </div>
                        <div className="resume-bar">
                          JAVASCRIPT
                          <div className="progress-bar">
                            <div className="inner1-bar4">75%</div>
                          </div>
                        </div>
                        <div className="resume-bar">
                          REACT
                          <div className="progress-bar">
                            <div className="inner1-bar5">55%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="resume-features">
                        <p>Skills</p>
                        <h2>Backend and Database Skills</h2>
                        <div className="resume-bar">
                          NODE JS
                          <div className="progress-bar">
                            <div className="inner2-bar1">70%</div>
                          </div>
                        </div>
                        <div className="resume-bar">
                          EXPRESS JS
                          <div className="progress-bar">
                            <div className="inner2-bar2">50%</div>
                          </div>
                        </div>
                        <div className="resume-bar">
                          MONGO DB (Mongoose)
                          <div className="progress-bar">
                            <div className="inner2-bar3">65%</div>
                          </div>
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
  );
};

export default Resume;
