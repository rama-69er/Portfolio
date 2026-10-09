import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [logoSrc, setLogoSrc] = useState('/images/my_logo.webp');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 mt-12 py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
          {/* Logo & Bio */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="inline-flex items-center gap-3 no-underline text-slate-900 mb-2">
              <img
                src={logoSrc}
                onError={() => setLogoSrc('/images/my_logo.svg')}
                alt={`${PERSONAL_INFO.name} Logo`}
                className="h-12 w-auto object-contain"
              />
              <span className="font-bold text-lg tracking-tight">{PERSONAL_INFO.name}</span>
            </Link>
            <p className="text-slate-500 text-xs sm:text-sm max-w-sm m-0">
              Full Stack Web Developer crafting responsive, intuitive digital products.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex justify-center gap-4 sm:gap-6 text-sm mb-3 flex-wrap font-medium">
              <Link to="/" className="text-slate-600 hover:text-[#f9004d] transition-colors no-underline">About</Link>
              <Link to="/resume" className="text-slate-600 hover:text-[#f9004d] transition-colors no-underline">Resume</Link>
              <Link to="/projects" className="text-slate-600 hover:text-[#f9004d] transition-colors no-underline">Projects</Link>
              <Link to="/hobby" className="text-slate-600 hover:text-[#f9004d] transition-colors no-underline">Hobbies</Link>
              <Link to="/contact" className="text-slate-600 hover:text-[#f9004d] transition-colors no-underline">Contact</Link>
            </div>
            <p className="text-slate-400 text-xs m-0">
              © {new Date().getFullYear()}. All rights reserved by {PERSONAL_INFO.name}
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-2 mb-2">
              <a
                href={PERSONAL_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#1877f2] hover:text-white text-slate-600 flex items-center justify-center transition-colors text-sm"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#e1306c] hover:text-white text-slate-600 flex items-center justify-center transition-colors text-sm"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#0a66c2] hover:text-white text-slate-600 flex items-center justify-center transition-colors text-sm"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <span className="text-slate-400 text-xs">Noida, Uttar Pradesh, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
