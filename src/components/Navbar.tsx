import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faFileText,
  faLaptopCode,
  faHeart,
  faAddressBook
} from '@fortawesome/free-solid-svg-icons';

export const Navbar: React.FC = () => {
  const navItems = [
    { to: '/', label: 'About', icon: faUser },
    { to: '/resume', label: 'Resume', icon: faFileText },
    { to: '/projects', label: 'Projects', icon: faLaptopCode },
    { to: '/hobby', label: 'Hobbies', icon: faHeart },
    { to: '/contact', label: 'Contacts', icon: faAddressBook },
  ];

  return (
    <nav className="sticky top-6 z-30" aria-label="Main Menu">
      <div className="bg-white rounded-3xl shadow-sm p-4 sm:p-5 border border-slate-200/90">
        <ul className="flex flex-col gap-3.5 m-0 p-0 list-none">
          {navItems.map((item) => (
            <li key={item.to} className="w-full">
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `w-full text-left py-3.5 px-5 rounded-2xl text-sm font-bold flex items-center justify-center gap-3.5 transition-all duration-300 no-underline ${
                    isActive
                      ? 'border-2 border-[#f9004d] text-[#f9004d] bg-rose-50/50 shadow-xs translate-x-1'
                      : 'text-slate-600 bg-slate-50/70 hover:bg-white hover:text-[#f9004d] hover:shadow-xs border border-slate-200/80 hover:translate-x-1'
                  }`
                }
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-8 h-8 rounded-xl flex items-center justify-center bg-white/90 text-center shrink-0">
                    <FontAwesomeIcon icon={item.icon} className="text-xs" />
                  </span>
                  <span className="tracking-tight">{item.label}</span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
