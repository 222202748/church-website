import React from 'react';
import RegistrationForm from './RegistrationForm';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const EventRegistration = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubmit = (formData) => {
    // Here you would typically send this data to your backend
    console.log('Event Registration:', formData);
    alert(t.eventRegistration.successMessage);
  };

  return (
    <div className="event-registration">
      <style>{`
        .event-registration {
          min-height: 100vh;
          padding: 4rem 1rem;
          background: linear-gradient(135deg, #92400e, #b45309);
        }

        .event-registration h1 {
          text-align: center;
          color: white;
          margin-bottom: 2rem;
          font-size: 2.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      <h1>{t.eventRegistration.title}</h1>
      <RegistrationForm
        eventType="event"
        eventTitle={t.eventRegistration.eventTitle}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EventRegistration;