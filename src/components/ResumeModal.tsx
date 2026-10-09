import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faXmark, 
  faPrint, 
  faDownload, 
  faEnvelope, 
  faPhone, 
  faLocationDot, 
  faGraduationCap, 
  faBriefcase, 
  faCode, 
  faCircleCheck 
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { PERSONAL_INFO, EDUCATION_DETAILS, JOB_EXPERIENCE, FRONTEND_SKILLS, BACKEND_SKILLS } from '../data/portfolioData';

interface ResumeModalProps {
  show: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      role="dialog" 
      aria-modal="true"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">{PERSONAL_INFO.name}</h2>
            <p className="text-slate-400 text-xs sm:text-sm m-0">{PERSONAL_INFO.role} · Curriculum Vitae</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              type="button" 
              className="px-3 py-1.5 rounded-lg border border-white/30 text-white hover:bg-white/10 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <FontAwesomeIcon icon={faPrint} />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button 
              type="button" 
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer" 
              onClick={onClose}
              aria-label="Close modal"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 bg-slate-50 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Quick Contact Bar */}
          <div className="bg-white p-4 rounded-xl shadow-xs border border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2.5">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#f9004d]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-800 hover:text-[#f9004d] no-underline truncate">{PERSONAL_INFO.email}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <FontAwesomeIcon icon={faPhone} className="text-[#f9004d]" />
                <span>{PERSONAL_INFO.phone1}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FontAwesomeIcon icon={faWhatsapp} className="text-emerald-600" />
                <span>{PERSONAL_INFO.whatsapp}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FontAwesomeIcon icon={faLocationDot} className="text-[#f9004d]" />
                <span className="truncate">{PERSONAL_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h3 className="text-xs uppercase font-bold text-[#f9004d] tracking-wider mb-2">Professional Summary</h3>
            <p className="text-slate-600 text-sm leading-relaxed m-0 bg-white p-4 rounded-xl border border-slate-200">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs uppercase font-bold text-[#f9004d] tracking-wider mb-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faBriefcase} />
              <span>Experience</span>
            </h3>
            <div className="space-y-3">
              {JOB_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 m-0">{exp.company}</h4>
                    <span className="text-xs bg-slate-100 text-slate-600 font-semibold px-2.5 py-0.5 rounded-full border border-slate-200 self-start sm:self-auto">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium mb-2">{exp.role} · {exp.location}</div>
                  <p className="text-slate-600 text-xs sm:text-sm m-0 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs uppercase font-bold text-[#f9004d] tracking-wider mb-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faGraduationCap} />
              <span>Education</span>
            </h3>
            <div className="space-y-3">
              {EDUCATION_DETAILS.map((edu) => (
                <div key={edu.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 m-0">{edu.degree}</h4>
                    <span className="text-xs bg-slate-100 text-slate-600 font-semibold px-2.5 py-0.5 rounded-full border border-slate-200 self-start sm:self-auto">
                      {edu.year}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium mb-2">
                    {edu.school} {edu.score ? `(Score: ${edu.score})` : ''}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm m-0 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs uppercase font-bold text-[#f9004d] tracking-wider mb-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faCode} />
              <span>Technical Proficiencies</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <h5 className="text-sm font-bold text-slate-900 mb-2">Frontend Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {FRONTEND_SKILLS.map((s) => (
                    <span key={s.name} className="bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-md border border-slate-200">
                      {s.name} ({s.level}%)
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <h5 className="text-sm font-bold text-slate-900 mb-2">Backend &amp; Database</h5>
                <div className="flex flex-wrap gap-2">
                  {BACKEND_SKILLS.map((s) => (
                    <span key={s.name} className="bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-md border border-slate-200">
                      {s.name} ({s.level}%)
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xs uppercase font-bold text-[#f9004d] tracking-wider mb-2">Key Strengths &amp; Soft Skills</h3>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PERSONAL_INFO.softSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-[#f9004d]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t border-slate-200 p-4 sm:p-5 flex items-center justify-between gap-4">
          <span className="text-xs text-slate-500">© 2026 {PERSONAL_INFO.name}</span>
          <div className="flex items-center gap-3">
            <button 
              type="button" 
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer border border-slate-200" 
              onClick={onClose}
            >
              Close
            </button>
            <button 
              type="button" 
              className="theme-btn-primary px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl text-white shadow-md transition-all hover:scale-[1.02] active:scale-100" 
              onClick={handlePrint}
            >
              <FontAwesomeIcon icon={faDownload} className="mr-1.5" />
              <span>Print / Save Resume</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
