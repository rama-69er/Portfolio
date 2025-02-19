import React from "react";
import "../css/projects.css";

import Navbar from "../components/navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
  { id: 1, pImg: "/images/Personal Website.png", spanLeft: "Go Live", spanRight: "gitHub", pName: "Personal Website", pLink: "" },
  { id: 2, pImg: "/images/form filling.png", spanLeft: "Go Live", spanRight: "gitHub", pName: "Form Filling Website", pLink: "" },
  { id: 3, pImg: "/images/Chat Bot.png", spanLeft: "Go Live", spanRight: "gitHub", pName: "Chatbot  Integration", pLink: "" },
  { id: 4, pImg: "/images/Portfolio.png", spanLeft: "Go Live", spanRight: "gitHub", pName: "My Personal Portfolio", pLink: "" },
  { id: 5, pImg: "/images/Crop Recommendation.png", spanLeft: "Go Live", spanRight: "gitHub", pName: "Crop Recommendation System", pLink: "" },
  { id: 6, pImg: "/images/Figma Replication.png", spanLeft: "Go Live", spanRight: "gitHub", pName: "Figma Replication", pLink: "" },
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
                              <a target="_blank" rel="noreferrer" href={pData.pLink}>
                                <FontAwesomeIcon icon={faGlobe} size="lg" />
                              </a>
                              <FontAwesomeIcon icon={faHeart} />
                              <a target="_blank" rel="noreferrer" href={pData.pLink}>
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
