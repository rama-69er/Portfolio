import React from "react";
import "../css/contact.css";

import Navbar from "../components/navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Contact() {
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
                <div className="contact-part">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-para">
                        <div className="contact-img">
                          <img
                            src="/images/contact.png"
                            alt="err_loading_image"
                          />
                        </div>
                        <h3>Ramanand Dubey</h3>
                        <span>Web Developer at Innovilla</span>
                        <h6>
                          I am available for freelance projects. Connect with me via email, whatsapp or ping me on my number.
                        </h6>
                        <p>
                          <a href="tel:+918005633372">
                            <FontAwesomeIcon icon={faPhone} /> : (+91) 8005633372
                          </a>
                        </p>
                        <p>
                          <a target="_blank"
                            rel="noreferrer"
                            href="https://wa.me/+918302491984/?text=Hello%20Ramanand%20Dubey%20!%20Are%20you%20available%20to%20work%20with%20us%20?">
                            <FontAwesomeIcon icon={faWhatsapp} /> : (+91) 8302491984
                          </a>
                        </p>
                        <p>
                          <a href="https://www.mailto:ramanand.dubey@yahoo.com">
                            <FontAwesomeIcon icon={faEnvelope} /> : ramanand.dubey@yahoo.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-form">
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-6">
                              <label for="fullName">NAME</label>
                              <input
                                type="text"
                                id="fullName"
                                placeholder=" Your Name Here..."
                                required
                              />
                            </div>
                            <div className="col-lg-6">
                              <label for="number">PHONE</label>
                              <input
                                type="tel"
                                id="fullName"
                                placeholder=" Your Number Here..."
                                required
                              />
                            </div>
                            <div className="col-lg-12">
                              <label for="subject">SUBJECT</label>
                              <br />
                              <input
                                type="text"
                                id="subject"
                                placeholder=" Write your Subject..."
                                required
                              />
                            </div>
                            <div className="col-lg-12">
                              <label for="message">MESSAGE</label>
                              <br />
                              <textarea id="message" cols="0" rows="6" placeholder=" Write your Message..." required>
                                {""}
                              </textarea>
                            </div>
                            <button type="submit" className="theme-btn text-center " href="/thankyou">
                              <FontAwesomeIcon icon={faTelegram} />
                            </button>
                          </div>
                        </form>
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

export default Contact;
