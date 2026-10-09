import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone 
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState('/images/contact.webp');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailSubject = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hello Ramanand,\n\nYou have received a message from your portfolio contact form:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent directly via Ramanand Dubey Portfolio`
    );

    // Open user's default email client prefilled directly to ramanandubey@gmail.com
    window.location.href = `mailto:ramanandubey@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/thankyou');
    }, 400);
  };

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
                {/* Header */}
                <div className="text-center mb-8">
                  <span className="inline-block px-3 py-1 bg-[#f9004d]/10 text-[#f9004d] rounded-full text-xs font-bold uppercase tracking-wider mb-1.5 border border-[#f9004d]/20">
                    Connect With Me
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">Contact &amp; Collaborations</h1>
                  <p className="text-slate-500 text-sm m-0">Have an inquiry, project, or full-time opening? Let's discuss!</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Contact Profile Card */}
                  <div className="lg:col-span-5 flex flex-col">
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 h-full flex flex-col justify-between shadow-xs">
                      <div>
                        {/* Contact Image with Zoom */}
                        <div className="img-zoom-container rounded-2xl mb-5 relative h-48 w-full bg-slate-200">
                          <img
                            src={imgSrc}
                            onError={() => setImgSrc('/images/contact.svg')}
                            alt="Connect with Ramanand Dubey"
                            className="w-full h-full object-cover rounded-2xl"
                            loading="lazy"
                          />
                        </div>

                        <div className="mb-5">
                          <h2 className="text-xl font-bold text-slate-900 mb-1">{PERSONAL_INFO.name}</h2>
                          <span className="inline-block text-xs font-semibold text-[#f9004d] bg-white border border-[#f9004d]/30 px-2.5 py-0.5 rounded-full mb-3">
                            {PERSONAL_INFO.role}
                          </span>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed m-0">
                            I am available for frontend web developer roles and freelance projects. Reach out via email, phone, or WhatsApp anytime.
                          </p>
                        </div>
                      </div>

                      {/* Direct Channels */}
                      <div className="flex flex-col gap-2.5 mt-auto">
                        <a
                          href={`tel:${PERSONAL_INFO.phone1}`}
                          className="bg-white border border-slate-200/80 hover:border-[#f9004d]/40 text-slate-800 py-3 px-4 rounded-xl flex items-center justify-between no-underline shadow-xs hover:text-[#f9004d] transition-all"
                        >
                          <span className="flex items-center gap-3 text-xs sm:text-sm font-semibold">
                            <FontAwesomeIcon icon={faPhone} className="text-[#f9004d]" />
                            <span>Call Directly</span>
                          </span>
                          <span className="text-xs text-slate-500 font-medium">{PERSONAL_INFO.phone1}</span>
                        </a>

                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={PERSONAL_INFO.socials.whatsapp}
                          className="bg-white border border-slate-200/80 hover:border-emerald-400 text-slate-800 py-3 px-4 rounded-xl flex items-center justify-between no-underline shadow-xs hover:text-emerald-600 transition-all"
                        >
                          <span className="flex items-center gap-3 text-xs sm:text-sm font-semibold">
                            <FontAwesomeIcon icon={faWhatsapp} className="text-emerald-500 text-base" />
                            <span>WhatsApp</span>
                          </span>
                          <span className="text-xs text-slate-500 font-medium">{PERSONAL_INFO.whatsapp}</span>
                        </a>

                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="bg-white border border-slate-200/80 hover:border-[#f9004d]/40 text-slate-800 py-3 px-4 rounded-xl flex items-center justify-between no-underline shadow-xs hover:text-[#f9004d] transition-all"
                        >
                          <span className="flex items-center gap-3 text-xs sm:text-sm font-semibold">
                            <FontAwesomeIcon icon={faEnvelope} className="text-[#f9004d]" />
                            <span>Email Me</span>
                          </span>
                          <span className="text-xs text-slate-500 font-medium truncate max-w-[140px]">{PERSONAL_INFO.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Contact Form */}
                  <div className="lg:col-span-7 flex flex-col">
                    <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 h-full flex flex-col justify-between shadow-xs">
                      <div>
                        <h2 className="text-lg font-bold text-slate-900 mb-4">Send a Direct Message</h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Name Input */}
                            <div>
                              <label htmlFor="contactName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                Your Name *
                              </label>
                              <input
                                type="text"
                                id="contactName"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f9004d]/30 focus:border-[#f9004d] transition-all"
                                placeholder="e.g. Lucky Dubey"
                                required
                              />
                            </div>

                            {/* Phone Input */}
                            <div>
                              <label htmlFor="contactPhone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                Phone Number *
                              </label>
                              <input
                                type="tel"
                                id="contactPhone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f9004d]/30 focus:border-[#f9004d] transition-all"
                                placeholder="e.g. +91 9876543210"
                                required
                              />
                            </div>
                          </div>

                          {/* Subject Input */}
                          <div>
                            <label htmlFor="contactSubject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                              Subject *
                            </label>
                            <input
                              type="text"
                              id="contactSubject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f9004d]/30 focus:border-[#f9004d] transition-all"
                              placeholder="e.g. Job Opportunity / Project Discussion"
                              required
                            />
                          </div>

                          {/* Message Textarea */}
                          <div>
                            <label htmlFor="contactMessage" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                              Message *
                            </label>
                            <textarea
                              id="contactMessage"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={5}
                              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#f9004d]/30 focus:border-[#f9004d] transition-all"
                              placeholder="Write your message or inquiry here..."
                              required
                            />
                          </div>

                          {/* Submit Button */}
                          <div className="pt-2">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="theme-btn w-full py-3.5 px-4 text-sm font-semibold rounded-xl text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                            >
                              <FontAwesomeIcon icon={faTelegram} className="text-base" />
                              <span>{isSubmitting ? 'Sending Message...' : 'Send Message Now'}</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
