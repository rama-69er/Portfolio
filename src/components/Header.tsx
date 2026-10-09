import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ResumeModal } from './ResumeModal';

export const Header: React.FC = () => {
  const [showResume, setShowResume] = useState(false);
  const [imgSrc, setImgSrc] = useState('/images/dp.webp');

  return (
    <>
      <header className="py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="portfolio-header-container p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Avatar & Details */}
              <div className="lg:col-span-7">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                  {/* Avatar */}
                  <div className="shrink-0">
                    <div className="img-zoom-container rounded-2xl shadow-md border-2 border-white/20 w-36 h-40 sm:w-44 sm:h-48 overflow-hidden bg-slate-800">
                      <img
                        src={imgSrc}
                        onError={() => setImgSrc('/images/dp.svg')}
                        alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`}
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>
                  </div>

                  {/* Intro info */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-[#f9004d]/25 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-[#f9004d]/50">
                        {PERSONAL_INFO.role}
                      </span>
                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-1">
                        {PERSONAL_INFO.name}
                      </h1>
                      <p className="text-slate-200 text-sm leading-relaxed max-w-lg">
                        Crafting fast, accessible, and robust full-stack web applications with modern React, Node.js &amp; Tailwind CSS.
                      </p>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-5">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={PERSONAL_INFO.socials.facebook}
                        className="social-btn facebook"
                        aria-label="Facebook Profile"
                        title="Facebook"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={PERSONAL_INFO.socials.instagram}
                        className="social-btn instagram"
                        aria-label="Instagram Profile"
                        title="Instagram"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={PERSONAL_INFO.socials.linkedin}
                        className="social-btn linkedin"
                        aria-label="LinkedIn Profile"
                        title="LinkedIn"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap">
                      {/* Fixed "View CV / Resume" button with bright text on rich gradient */}
                      <button
                        type="button"
                        onClick={() => setShowResume(true)}
                        className="theme-btn-primary px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl text-white shadow-md transition-all hover:scale-[1.02] active:scale-100"
                      >
                        <FontAwesomeIcon icon={faFileAlt} className="mr-1.5 text-white" />
                        <span className="text-white font-bold">View CV / Resume</span>
                      </button>
                      <Link
                        to="/contact"
                        className="px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-white/40 text-white hover:bg-white/10 transition-colors inline-flex items-center gap-1.5"
                      >
                        <FontAwesomeIcon icon={faPaperPlane} />
                        <span>Get In Touch</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Details Card */}
              <div className="lg:col-span-5">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 shadow-inner">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="border-b sm:border-b-0 sm:border-r border-white/15 pb-4 sm:pb-0 sm:pr-4">
                      <span className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-1">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-white hover:text-[#f9004d] text-sm font-medium transition-colors truncate block"
                        title={PERSONAL_INFO.email}
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>

                    <div className="border-b sm:border-b-0 pb-4 sm:pb-0">
                      <span className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-1">
                        Birth Date
                      </span>
                      <span className="text-white text-sm font-medium block">
                        {PERSONAL_INFO.birth}
                      </span>
                    </div>

                    <div className="border-b sm:border-b-0 sm:border-r border-white/15 pb-4 sm:pb-0 sm:pr-4">
                      <span className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-1">
                        Contact Phone
                      </span>
                      <a href={`tel:${PERSONAL_INFO.phone1}`} className="text-white hover:text-[#f9004d] text-sm font-medium block">
                        {PERSONAL_INFO.phone1}
                      </a>
                      <a href={`tel:${PERSONAL_INFO.phone2}`} className="text-slate-300 hover:text-white text-xs block mt-0.5">
                        {PERSONAL_INFO.phone2}
                      </a>
                    </div>

                    <div>
                      <span className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-1">
                        Location
                      </span>
                      <span className="text-white text-sm font-medium block truncate" title="Noida / Azamgarh">
                        {PERSONAL_INFO.hometown}
                      </span>
                      <span className="text-slate-300 text-xs block mt-0.5">Noida, UP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <ResumeModal show={showResume} onClose={() => setShowResume(false)} />
    </>
  );
};

export default Header;
