import React from "react";
import "../css/resume.css";

import Navbar from "../components/navbar";

const educationDetails = [{
  id: 1,
  degree: "Bachlore of Technology",
  year: "2020 - 2024",
  school: "Veer Bahadur Singh Purvanchal University, Jaunpur, Uttar Pradesh",
  description: "I graduated with a Bachelor's degree in Information Technology from Veer Bahadur Singh Purvanchal University, achieving a total score of 70.69 percentage marks."
}, {
  id: 2,
  degree: "Intermediate Education",
  year: "2019 - 2020",
  school: "Swami TeonRam Alok Sr. Sec. School, Kota, Rajasthan",
  description: "I successfully completed my intermediate education at Swami TeonRam Alok Sr. Sec. School, achieving a score of 65% in PCM from the RBSE board."
}, {
  id: 3,
  degree: "High School Education",
  year: "2016 - 2017",
  school: "Maharaja Public Sr. Sec. School, Ajmer, Rajasthan",
  description: "I successfully completed my secondary education at Maharaja Public Sr. Sec. School, achieving a score of 63% from the RBSE board."
}]

const jobExperience = [{
  id: 1,
  company: "Innovilla Private Ltd.",
  duration: "02 June,23 - 02 July,23",
  location: "CDC Building, BHU, Varanasi",
  description: "The company's objective was to develop a search engine optimized (SEO) web application for local businesses within the city. This web application was designed using HTML, CSS, JavaScript, and Bootstrap."
},]

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
                            <p>2016 - 2024</p>
                            <h2>Education Qualification</h2>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          {educationDetails.map((education) => (
                            <>
                              <div className="resume-tab" key={education.id}>
                                <h3>{education.degree}</h3>
                                <span>{education.year}</span>
                                <p>{education.school}</p>
                                <hr />
                                <p>{education.description}</p>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="resume-heading resume-heading-2">
                            <p>2023 - Onwards</p>
                            <h2>Job / Intern Experience</h2>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          {jobExperience.map((job) => (
                            <>
                              <div className="resume-tab" key={job.id}>
                                <h3>{job.company}</h3>
                                <span>{job.duration}</span>
                                <p>{job.location}</p>
                                <hr />
                                <p>{job.description}</p>
                              </div>
                            </>
                          ))}
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
