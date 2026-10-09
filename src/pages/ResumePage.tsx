import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faBriefcase, 
  faCode, 
  faDatabase, 
  faPrint 
} from '@fortawesome/free-solid-svg-icons';
import { 
  EDUCATION_DETAILS, 
  JOB_EXPERIENCE, 
  FRONTEND_SKILLS, 
  BACKEND_SKILLS 
} from '../data/portfolioData';
import { ResumeModal } from '../components/ResumeModal';

export const ResumePage: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

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
                {/* Header with Title and Resume Print Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 border-b border-slate-200 pb-5">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#f9004d]/10 text-[#f9004d] rounded-full text-xs font-bold uppercase tracking-wider mb-1.5 border border-[#f9004d]/20">
                      Professional Trajectory
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 m-0">Resume &amp; Qualifications</h1>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowResume(true)}
                      className="theme-btn-primary px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl text-white shadow-md transition-all hover:scale-[1.02] active:scale-100"
                    >
                      <FontAwesomeIcon icon={faPrint} />
                      <span>Print / View CV</span>
                    </button>
                  </div>
                </div>

                {/* Section 1: Education */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#f9004d]/10 text-[#f9004d] shrink-0 text-sm">
                      <FontAwesomeIcon icon={faGraduationCap} />
                    </div>
                    <div>
                      <span className="text-[#f9004d] font-bold text-xs uppercase tracking-wider block">2016 - 2024</span>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 m-0">Education Qualification</h2>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {EDUCATION_DETAILS.map((education) => (
                      <div key={education.id} className="resume-card p-5 rounded-2xl shadow-xs border border-slate-200">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 m-0">{education.degree}</h3>
                          <span className="bg-white text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200 shadow-2xs self-start sm:self-auto">
                            {education.year}
                          </span>
                        </div>
                        <p className="text-slate-500 text-xs sm:text-sm font-medium mb-3">
                          {education.school} {education.score ? `· Score: ${education.score}` : ''}
                        </p>
                        <hr className="my-2 border-slate-100" />
                        <p className="text-slate-600 text-xs sm:text-sm m-0 leading-relaxed">
                          {education.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 2: Experience */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#f9004d]/10 text-[#f9004d] shrink-0 text-sm">
                      <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <div>
                      <span className="text-[#f9004d] font-bold text-xs uppercase tracking-wider block">2023 - Onwards</span>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 m-0">Job / Internship Experience</h2>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {JOB_EXPERIENCE.map((job) => (
                      <div key={job.id} className="resume-card p-5 rounded-2xl shadow-xs border border-slate-200">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 m-0">{job.company}</h3>
                          <span className="bg-white text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200 shadow-2xs self-start sm:self-auto">
                            {job.duration}
                          </span>
                        </div>
                        <p className="text-slate-500 text-xs sm:text-sm font-medium mb-3">
                          {job.role} · {job.location}
                        </p>
                        <hr className="my-2 border-slate-100" />
                        <p className="text-slate-600 text-xs sm:text-sm m-0 leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3: Skill Progress Bars */}
                <div>
                  <div className="text-center mb-6">
                    <span className="inline-block px-3 py-1 bg-[#f9004d]/10 text-[#f9004d] rounded-full text-xs font-bold uppercase tracking-wider mb-1.5 border border-[#f9004d]/20">
                      Proficiency Metrics
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 m-0">Skills &amp; Technical Competencies</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Frontend Skills */}
                    <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
                      <div className="flex items-center gap-2 mb-4">
                        <FontAwesomeIcon icon={faCode} className="text-[#f9004d]" />
                        <h3 className="text-base font-bold text-slate-900 m-0">Frontend Proficiencies</h3>
                      </div>

                      <div className="space-y-4">
                        {FRONTEND_SKILLS.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-1 text-xs sm:text-sm">
                              <span className="font-semibold text-slate-800">{skill.name}</span>
                              <span className="text-slate-500 font-bold">{skill.level}%</span>
                            </div>
                            <div 
                              className="w-full h-6 bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-200" 
                              role="progressbar" 
                              aria-valuenow={skill.level} 
                              aria-valuemin={0} 
                              aria-valuemax={100}
                              aria-label={`${skill.name} proficiency: ${skill.level}%`}
                            >
                              <div
                                className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-pink-300 to-[#f9004d] flex items-center justify-end pr-1.5 text-white font-bold text-[10px]"
                                style={{ width: `${skill.level}%` }}
                              >
                                {skill.level}%
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
                      <div className="flex items-center gap-2 mb-4">
                        <FontAwesomeIcon icon={faDatabase} className="text-[#f9004d]" />
                        <h3 className="text-base font-bold text-slate-900 m-0">Backend &amp; Database Proficiencies</h3>
                      </div>

                      <div className="space-y-4">
                        {BACKEND_SKILLS.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-1 text-xs sm:text-sm">
                              <span className="font-semibold text-slate-800">{skill.name}</span>
                              <span className="text-slate-500 font-bold">{skill.level}%</span>
                            </div>
                            <div 
                              className="w-full h-6 bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-200" 
                              role="progressbar" 
                              aria-valuenow={skill.level} 
                              aria-valuemin={0} 
                              aria-valuemax={100}
                              aria-label={`${skill.name} proficiency: ${skill.level}%`}
                            >
                              <div
                                className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-pink-300 to-[#f9004d] flex items-center justify-end pr-1.5 text-white font-bold text-[10px]"
                                style={{ width: `${skill.level}%` }}
                              >
                                {skill.level}%
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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

export default ResumePage;
