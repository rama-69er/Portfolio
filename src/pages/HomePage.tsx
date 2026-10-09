import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck, 
  faFileDownload, 
  faEye,
  faLaptopCode, 
  faNetworkWired
} from '@fortawesome/free-solid-svg-icons';
import { PERSONAL_INFO, TECH_STACK } from '../data/portfolioData';
import { ResumeModal } from '../components/ResumeModal';

export const HomePage: React.FC = () => {
  const [showResume, setShowResume] = useState(false);
  const [profileImg, setProfileImg] = useState('/images/dp1.webp');

  return (
    <>
      <section className="py-2 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Desktop Left Navigation */}
            <aside className="hidden lg:block lg:col-span-3 xl:col-span-2 sticky top-6 self-start z-30">
              <Navbar />
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-9 xl:col-span-10 space-y-6">
              {/* About Me Card */}
              <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-200/80">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Photo */}
                  <div className="md:col-span-5 xl:col-span-4 flex justify-center">
                    <div className="img-zoom-container rounded-2xl shadow-sm border border-slate-200 w-full max-w-[260px] overflow-hidden bg-slate-50">
                      <img
                        src={profileImg}
                        onError={() => setProfileImg('/images/dp1.svg')}
                        alt={`${PERSONAL_INFO.name} - About Me`}
                        className="w-full h-auto object-cover"
                        style={{ aspectRatio: '1/1.25' }}
                      />
                    </div>
                  </div>

                  {/* Text details */}
                  <div className="md:col-span-7 xl:col-span-8">
                    <div>
                      <span className="inline-block px-3 py-1 bg-[#f9004d]/10 text-[#f9004d] rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-[#f9004d]/20">
                        Profile Bio
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">About Me</h2>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                        {PERSONAL_INFO.bio}
                      </p>

                      {/* Soft Skills List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                        {PERSONAL_INFO.softSkills.map((skill) => (
                          <div key={skill} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                            <span className="w-5 h-5 rounded-full flex items-center justify-center bg-[#f9004d]/10 text-[#f9004d] shrink-0 text-xs">
                              <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className="font-medium">{skill}</span>
                          </div>
                        ))}
                      </div>

                      {/* Resume Action Buttons */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <button
                          type="button"
                          onClick={() => setShowResume(true)}
                          className="theme-btn-primary px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl text-white shadow-md transition-all hover:scale-[1.02] active:scale-100"
                        >
                          <FontAwesomeIcon icon={faEye} />
                          <span>View Full Resume</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowResume(true)}
                          className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faFileDownload} />
                          <span>Download PDF</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What I am Doing Section */}
              <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-200/80">
                <div className="text-center mb-6">
                  <span className="inline-block px-3 py-1 bg-[#f9004d]/10 text-[#f9004d] rounded-full text-xs font-bold uppercase tracking-wider mb-1.5 border border-[#f9004d]/20">
                    Specializations
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 m-0">What I Am Doing...</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 hover:bg-white card-hover-lift flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[#f9004d] bg-[#f9004d]/10 shrink-0">
                          <FontAwesomeIcon icon={faLaptopCode} className="text-lg" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 m-0">Full Stack Web Development</h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed m-0">
                        Innovative, proficient, and detail-oriented Full Stack Developer building responsive web applications using modern React, Node.js, Next.js, and Tailwind CSS.
                      </p>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 hover:bg-white card-hover-lift flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[#f9004d] bg-[#f9004d]/10 shrink-0">
                          <FontAwesomeIcon icon={faNetworkWired} className="text-lg" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 m-0">Backend Architecture &amp; Database</h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed m-0">
                        Building scalable server-side systems, RESTful services, and database management with Node.js, Express, MongoDB, and modern web protocols.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies That I Use Section */}
              <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-200/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#f9004d]/10 text-[#f9004d] rounded-full text-xs font-bold uppercase tracking-wider mb-1 border border-[#f9004d]/20">
                      Tech Stack
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 m-0">Technologies That I Use...</h2>
                  </div>
                  <span className="text-slate-400 text-xs">Click any technology to view official docs</span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                  {TECH_STACK.map((tech) => (
                    <a
                      key={tech.id}
                      href={tech.aLink}
                      target="_blank"
                      rel="noreferrer"
                      className="tech-card rounded-xl p-4 text-center no-underline shadow-xs flex flex-col items-center justify-center"
                      title={tech.name}
                    >
                      <img
                        src={tech.imgLink}
                        alt={tech.name}
                        className="h-11 w-auto object-contain mb-2.5"
                        loading="lazy"
                      />
                      <span className="font-semibold text-slate-800 text-xs sm:text-sm">{tech.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResumeModal show={showResume} onClose={() => setShowResume(false)} />
    </>
  );
};

export default HomePage;
