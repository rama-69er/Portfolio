import React from 'react';
import { NavLink, Outlet, useLocation, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFootball, 
  faUtensils, 
  faBookOpen, 
  faPlaneDeparture, 
  faMusic 
} from '@fortawesome/free-solid-svg-icons';

export const HobbyPage: React.FC = () => {
  const location = useLocation();

  const hobbyTabs = [
    { to: 'sports', label: 'Sports', icon: faFootball },
    { to: 'cooking', label: 'Cooking', icon: faUtensils },
    { to: 'books', label: 'Books', icon: faBookOpen },
    { to: 'travel', label: 'Travel', icon: faPlaneDeparture },
    { to: 'music', label: 'Music', icon: faMusic },
  ];

  return (
    <>
      {location.pathname === '/hobby' && <Navigate to="sports" replace />}

      <section className="py-2 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Desktop Left Navigation */}
            <aside className="hidden lg:block lg:col-span-3 xl:col-span-2 sticky top-6 self-start z-30">
              <Navbar />
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-9 xl:col-span-10 space-y-6">
              <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 border border-slate-200/80">
                {/* Header */}
                <div className="text-center mb-8">
                  <span className="inline-block px-3 py-1 bg-[#f9004d]/10 text-[#f9004d] rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-[#f9004d]/20">
                    Passions &amp; Interests
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Hobbies &amp; Lifestyle</h1>
                  <p className="text-slate-500 text-sm m-0 max-w-md mx-auto">
                    Beyond code: what inspires, energizes, and grounds my daily creativity
                  </p>
                </div>

                {/* Sub-Navigation: Completely Symmetrical Rounded Pills, Fully Responsive */}
                <div className="flex justify-center mb-8">
                  <nav 
                    className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 bg-slate-100/90 rounded-2xl xl:rounded-full border border-slate-200/80 w-full max-w-2xl mx-auto" 
                    aria-label="Hobbies categories"
                  >
                    {hobbyTabs.map((tab) => (
                      <NavLink
                        key={tab.to}
                        to={tab.to}
                        className={({ isActive }) =>
                          `rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 no-underline shrink-0 ${
                            isActive
                              ? 'bg-white text-[#f9004d] shadow-sm border border-[#f9004d]/40 scale-[1.03]'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-white/70 border border-transparent'
                          }`
                        }
                      >
                        <FontAwesomeIcon icon={tab.icon} className="text-xs sm:text-sm" />
                        <span>{tab.label}</span>
                      </NavLink>
                    ))}
                  </nav>
                </div>

                {/* Sub-routes Content Area */}
                <div className="hobby-content-area transition-all duration-300">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HobbyPage;
