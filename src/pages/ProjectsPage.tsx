import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGlobe, 
  faArrowUpRightFromSquare, 
  faLayerGroup,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { COMPANY_PROJECTS, PERSONAL_PROJECTS } from '../data/portfolioData';

export const ProjectsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'company' | 'personal'>('all');

  const displayedCompanyProjects = activeTab === 'personal' ? [] : COMPANY_PROJECTS;
  const displayedPersonalProjects = activeTab === 'company' ? [] : PERSONAL_PROJECTS;

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
              <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-200/80">
                {/* Header & Filter Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-slate-200 pb-5">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#f9004d]/10 text-[#f9004d] rounded-full text-xs font-bold uppercase tracking-wider mb-1.5 border border-[#f9004d]/20">
                      Showcase &amp; Portfolio
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 m-0">Featured Projects</h1>
                  </div>

                  {/* Filter Tabs using Tailwind segmented controls */}
                  <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 self-start sm:self-auto" role="group" aria-label="Project filter options">
                    <button
                      type="button"
                      onClick={() => setActiveTab('all')}
                      className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        activeTab === 'all' 
                          ? 'bg-slate-900 text-white shadow-xs' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      All
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('company')}
                      className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        activeTab === 'company' 
                          ? 'bg-slate-900 text-white shadow-xs' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Company
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('personal')}
                      className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        activeTab === 'personal' 
                          ? 'bg-slate-900 text-white shadow-xs' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Personal
                    </button>
                  </div>
                </div>

                {/* Company Projects Section */}
                {displayedCompanyProjects.length > 0 && (
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#f9004d]/10 text-[#f9004d] shrink-0 text-sm">
                        <FontAwesomeIcon icon={faBuilding} />
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 m-0">Company Client Web Portals</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {displayedCompanyProjects.map((pData) => (
                        <div key={`company-${pData.id}`} className="bg-slate-50/70 hover:bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs card-hover-lift flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-semibold bg-white text-slate-700 border border-slate-200 px-2 py-0.5 rounded-md">
                                Client Portal
                              </span>
                              <FontAwesomeIcon icon={faGlobe} className="text-[#f9004d] text-sm" />
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-2 truncate" title={pData.pName}>
                              {pData.pName}
                            </h3>
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                              {pData.description}
                            </p>
                          </div>

                          <div>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {pData.techStack?.map((tech) => (
                                <span key={tech} className="text-[11px] bg-white text-slate-600 border border-slate-200/80 px-2 py-0.5 rounded-md">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={pData.vLink}
                              className="theme-btn w-full py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-xl text-center flex items-center justify-center gap-2"
                            >
                              <span>Visit Live Portal</span>
                              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Personal Projects Section */}
                {displayedPersonalProjects.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#f9004d]/10 text-[#f9004d] shrink-0 text-sm">
                        <FontAwesomeIcon icon={faLayerGroup} />
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 m-0">Personal &amp; Academic Projects</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {displayedPersonalProjects.map((pData) => (
                        <div key={`personal-${pData.id}`} className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden card-hover-lift shadow-xs flex flex-col justify-between">
                          <div>
                            {/* Thumbnail with zoom */}
                            <div className="img-zoom-container relative h-44 w-full bg-slate-200">
                              <img
                                src={pData.pImg}
                                alt={pData.pName}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>

                            <div className="p-4">
                              <h3 className="text-base font-bold text-slate-900 mb-1.5 truncate" title={pData.pName}>
                                {pData.pName}
                              </h3>
                              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2" style={{ minHeight: '38px' }}>
                                {pData.description}
                              </p>

                              <div className="flex flex-wrap gap-1.5 mb-2">
                                {pData.techStack?.map((tech) => (
                                  <span key={tech} className="text-[11px] bg-white text-slate-600 border border-slate-200 px-2 py-0.5 rounded-md">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="p-4 pt-0 flex gap-2">
                            {pData.vLink ? (
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href={pData.vLink}
                                className="theme-btn flex-1 py-2 px-3 text-xs font-semibold rounded-xl text-center flex items-center justify-center gap-1.5"
                                title="View Project Demo"
                              >
                                <FontAwesomeIcon icon={faGlobe} />
                                <span>Live Demo</span>
                              </a>
                            ) : null}

                            {pData.gLink ? (
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href={pData.gLink}
                                className="py-2 px-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-900 hover:text-white text-slate-700 text-xs font-semibold transition-colors flex items-center justify-center"
                                aria-label="View Source on GitHub"
                                title="GitHub Repository"
                              >
                                <FontAwesomeIcon icon={faGithub} />
                              </a>
                            ) : null}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
