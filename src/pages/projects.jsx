import React from "react";
import "../css/projects.css";

import Navbar from "../components/navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const companyProjects = [
  { id: 1, pImg: "", pName: "Mount Litera School, Lucknow", gLink: "", vLink: "https://web.edunexttechnologies.com/theme/mlzs-landingpage/" },
  { id: 2, pImg: "", pName: "Prince Public School, Rohini", gLink: "", vLink: "https://web.edunexttechnologies.com/theme/princepublicschool/" },
  { id: 3, pImg: "", pName: "Agarwal Vidya Vihar, Surat", gLink: "", vLink: "https://avv.ac.in" },
  { id: 4, pImg: "", pName: "Tapti Valley International School, Surat", gLink: "", vLink: "https://tvis.edu.in/" },
  { id: 5, pImg: "", pName: "Agape Mission School, Rishikesh", gLink: "", vLink: "https://web.edunexttechnologies.com/theme/agape-mission/" },
  { id: 6, pImg: "", pName: "Shambhu Dayal Global School, Ghaziabad", gLink: "", vLink: "https://sdglobalschool.com/" },
]
const personalProjects = [
  { id: 1, pImg: "/images/Personal Website.webp", pName: "Personal Website", gLink: "", vLink: "" },
  { id: 2, pImg: "/images/form filling.webp", pName: "Form Filling Website", gLink: "", vLink: "" },
  { id: 3, pImg: "/images/Chat Bot.webp", pName: "Chatbot  Integration", gLink: "", vLink: "" },
  { id: 4, pImg: "/images/Portfolio.webp", pName: "My Personal Portfolio", gLink: "", vLink: "" },
  { id: 5, pImg: "/images/Crop Recommendation.webp", pName: "Crop Recommendation System", gLink: "", vLink: "" },
  { id: 6, pImg: "/images/Figma Replication.webp", pName: "Figma Replication", gLink: "", vLink: "" },
]

function Projects() {
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
                <div className="site-project mb-3">
                  <h2 className="h5 fw-semibold mb-3">Company's Projects</h2>
                  <div className="row align-items-center">
                    {companyProjects.map((pData) =>
                      <>
                        <div className="col-lg-4 col-md-6">
                          <a target="_blank" rel="noreferrer" href={pData.vLink} className="project-para rounded-2 mb-3 shadow-sm btn theme-btn  d-flex align-items-center justify-content-between justify-content-md-evenly w-100 p-3">
                            <FontAwesomeIcon className="me-2" icon={faGlobe} size="lg" />
                            <h2 className="h6 fw-semibold text-start text-md-center mb-0">{pData.pName}</h2>
                          </a>
                        </div>
                      </>)}
                  </div>
                </div>
                <div className="site-project">
                  <h2 className="h5 fw-semibold mb-3">Personal Projects</h2>
                  <div className="row">
                    {personalProjects.map((pData) =>
                      <>
                        <div className="col-lg-4 col-md-6">
                          <div className="project-tab rounded-2 bg-light shadow-sm p-3 mb-4">
                            <div className="overflow-hidden rounded-2 mb-3">
                              <img className="img-fluid w-100" src={pData.pImg} alt={pData.pName} />
                            </div>
                            <div className="project-para d-flex align-items-center justify-content-between">
                              <a target="_blank" rel="noreferrer" href={pData.vLink}>
                                <FontAwesomeIcon icon={faGlobe} size="lg" />
                              </a>
                              <h2 className="h6 fw-semibold text-center mb-0">{pData.pName}</h2>
                              <a target="_blank" rel="noreferrer" href={pData.gLink}>
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </>)}
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

export default Projects;
