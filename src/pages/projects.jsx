import React from "react";
import "../css/projects.css";

import Navbar from "../components/navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
  { id: 1, pImg: "/images/Personal Website.png", pName: "Personal Website", gLink: "", vLink: "" },
  { id: 2, pImg: "/images/form filling.png", pName: "Form Filling Website", gLink: "", vLink: "" },
  { id: 3, pImg: "/images/Chat Bot.png", pName: "Chatbot  Integration", gLink: "", vLink: "" },
  { id: 4, pImg: "/images/Portfolio.png", pName: "My Personal Portfolio", gLink: "", vLink: "" },
  { id: 5, pImg: "/images/Crop Recommendation.png", pName: "Crop Recommendation System", gLink: "", vLink: "" },
  { id: 6, pImg: "/images/Figma Replication.png", pName: "Figma Replication", gLink: "", vLink: "" },
]

function Projects() {
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
                <div className="site-project">
                  <div className="row">
                    {projects.map((pData) =>
                      <>
                        <div className="col-lg-4 col-md-6">
                          <div className="project-tab">
                            <div className="project-tab-img">
                              <img src={pData.pImg} alt={pData.pName} />
                            </div>
                            <div className="project-para">
                              <a target="_blank" rel="noreferrer" href={pData.vLink}>
                                <FontAwesomeIcon icon={faGlobe} size="lg" />
                              </a>
                              <a target="_blank" rel="noreferrer" href={pData.gLink}>
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                              </a>
                            </div>
                            <div className="project-bottom">
                              {pData.pName}
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
