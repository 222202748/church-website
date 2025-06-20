import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Contact = () => {
  const { language } = useLanguage();
  
  // Safety check for language and translations
  const currentLanguage = language || 'en'; // fallback to 'en' if language is undefined
  const t = translations[currentLanguage] || translations['en'] || {}; // fallback chain
  
  // Additional safety check for contact translations
  const contactTranslations = t.contact || {
    title: 'Contact Us',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    submitButton: 'Submit'
  };

  // Debug logging (remove in production)
  console.log('Current language:', language);
  console.log('Available translations:', Object.keys(translations));
  console.log('Translation object exists:', !!t);
  console.log('Contact translations exist:', !!t.contact);

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">{contactTranslations.title}</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  {contactTranslations.nameLabel}
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  {contactTranslations.emailLabel}
                </label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  {contactTranslations.messageLabel}
                </label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  rows="5" 
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {contactTranslations.submitButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;