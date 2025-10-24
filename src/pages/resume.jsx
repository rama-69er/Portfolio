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

const jobExperience = [
  {
    id: 1,
    company: "Innovilla Private Ltd.",
    duration: "02 June,23 - 02 July,23",
    location: "CDC Building, BHU, Varanasi",
    description: "The company's objective was to develop a search engine optimized (SEO) web application for local businesses within the city. This web application was designed using HTML, CSS, JavaScript, and Bootstrap."
  },
  {
    id: 2,
    company: "Edunext Technologys Pvt. Ltd.",
    duration: "06 March,25 - Present",
    location: "7th Floor, A-8, Block A, Sector 68, Noida",
    description: "Edunext ERP is India's most advanced school management software with mobile apps for students, parents, teachers and management."
  },
]

function Resume() {
  return (
    <>
      <section className="siteBody">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 d-none d-lg-block">
              <Navbar />
            </div>
            <div className="col-lg-10">
              <div className="siteBody">
                <div className="resume-page">
                  <div className="row">
                    <div className="col-12">
                      <p className="mb-1 fw-semibold">2016 - 2024</p>
                      <h2 className="h3 fw-bold">Education Qualification</h2>
                      {educationDetails.map((education) => (
                        <>
                          <div className="resume-tab p-4 rounded rounded-4 mb-3" key={education.id}>
                            <h2 className="h4 fw-semibold">{education.degree}</h2>
                            <div className="d-block d-md-flex flex-row-reverse align-items-center justify-content-between">
                              <span className="d-inline-block p-2 mb-2 mb-md-0 rounded rounded-2 bg-white text-dark">{education.year}</span>
                              <p className="mb-0">{education.school}</p>
                            </div>
                            <hr />
                            <p className="mb-0">{education.description}</p>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="mb-1 fw-semibold">2023 - Onwards</p>
                      <h2 className="h3 fw-bold">Job / Intern Experience</h2>
                      {jobExperience.map((job) => (
                        <>
                          <div className="resume-tab p-4 rounded rounded-4 mb-3" key={job.id}>
                            <h2 className="h4 fw-semibold">{job.company}</h2>
                            <div className="d-block d-md-flex flex-row-reverse align-items-center justify-content-between">
                              <span className="d-inline-block p-2 mb-2 mb-md-0 rounded rounded-2 bg-white text-dark">{job.duration}</span>
                              <p className="mb-0">{job.location}</p>
                            </div>
                            <hr />
                            <p className="mb-0">{job.description}</p>
                          </div>
                        </>
                      ))}
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
                            <div className="inner1-bar3">100%</div>
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
