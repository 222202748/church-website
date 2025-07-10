import React from 'react';
import RegistrationForm from './RegistrationForm';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { API_ENDPOINTS } from '../config/api';

const EventRegistration = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(API_ENDPOINTS.eventRegistration, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      alert(t.eventRegistration.successMessage);
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please try again.');
    }
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