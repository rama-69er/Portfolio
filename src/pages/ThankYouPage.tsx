import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faHome } from '@fortawesome/free-solid-svg-icons';

export const ThankYouPage: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-8 sm:p-12 text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 text-3xl">
            <FontAwesomeIcon icon={faCircleCheck} />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Thank You!</h1>
          <p className="text-slate-600 text-base mb-2">
            Your message has been sent successfully.
          </p>
          <p className="text-slate-400 text-sm mb-8 max-w-sm mx-auto">
            I will review your inquiry and get back to you as soon as possible.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link to="/" className="theme-btn px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-sm inline-flex items-center gap-2">
              <FontAwesomeIcon icon={faHome} />
              <span>Return to Homepage</span>
            </Link>
            <Link to="/projects" className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold transition-colors no-underline">
              <span>Explore Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouPage;
