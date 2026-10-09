import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faXmark, 
  faUser, 
  faFileText, 
  faLaptopCode, 
  faHeart, 
  faAddressBook 
} from '@fortawesome/free-solid-svg-icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'About', icon: faUser },
    { to: '/resume', label: 'Resume', icon: faFileText },
    { to: '/projects', label: 'Projects', icon: faLaptopCode },
    { to: '/hobby', label: 'Hobbies', icon: faHeart },
    { to: '/contact', label: 'Contacts', icon: faAddressBook },
  ];

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="lg:hidden mb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile Top Bar */}
        <div className="flex items-center justify-between bg-white px-5 py-3.5 rounded-2xl shadow-sm border border-slate-200/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 text-white flex items-center justify-center font-bold text-sm tracking-wider shrink-0 shadow-sm">
              RD
            </div>
            <div>
              <span className="font-bold text-base text-slate-900 block leading-tight">{PERSONAL_INFO.name}</span>
              <span className="text-[#f9004d] text-xs font-semibold uppercase tracking-wider block">
                {PERSONAL_INFO.role}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all duration-200 cursor-pointer border border-slate-200/80 active:scale-95"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="text-lg transition-transform duration-200" />
          </button>
        </div>

        {/* Collapsible Mobile Navigation Drawer */}
        {isOpen && (
          <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-5 mt-3 border border-slate-200/90 animate-menu-open">
            <ul className="flex flex-col gap-3 m-0 p-0 list-none">
              {navItems.map((item) => (
                <li key={item.to} className="w-full">
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={handleClose}
                    className={({ isActive }) =>
                      `w-full text-left py-3.5 px-5 rounded-2xl text-base font-bold flex items-center gap-3.5 transition-all duration-200 no-underline ${
                        isActive
                          ? 'border-2 border-[#f9004d] text-[#f9004d] bg-rose-50/50 shadow-xs'
                          : 'text-slate-600 bg-slate-50 hover:bg-slate-100 hover:text-[#f9004d] border border-slate-200/70'
                      }`
                    }
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-8 h-8 rounded-xl flex items-center justify-center bg-white/90 text-center shrink-0">
                        <FontAwesomeIcon icon={item.icon} className="text-xs" />
                      </span>
                      <span>{item.label}</span>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
