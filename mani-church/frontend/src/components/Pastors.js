import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const PastorCard = ({ name, image, role, description, phone, whatsapp }) => {
  const { language } = useLanguage();
  const [imageError, setImageError] = useState(false);

  // Simplified translation function
  const getTranslation = (key, fallback) => {
    try {
      // Get the language translations
      const langTranslations = translations[language];
      
      if (!langTranslations) {
        console.warn(`No translations found for language: ${language}`);
        return fallback;
      }

      // Navigate nested keys (e.g., 'pastors.callNow')
      const keys = key.split('.');
      let result = langTranslations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          console.warn(`Translation key not found: ${key}`);
          return fallback;
        }
      }
      
      return result || fallback;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return fallback;
    }
  };

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  // Fallback placeholder
  const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Crect width='320' height='320' fill='%23f0f0f0'/%3E%3Ccircle cx='160' cy='120' r='50' fill='%23ccc'/%3E%3Cpath d='M80 280c0-44 36-80 80-80s80 36 80 80' fill='%23ccc'/%3E%3C/svg%3E";

  return (
    <div className="col-12 col-lg-10 col-xl-8 mx-auto">
      <div className="d-flex flex-column flex-lg-row bg-light p-4 rounded-3 align-items-center shadow-sm hover-shadow">
        <img
          src={imageError ? placeholderImage : `/images/${image}`}
          className="img-fluid rounded-circle mb-3 mb-lg-0 me-lg-4"
          alt={name}
          onError={handleImageError}
          style={{
            width: '100%',
            maxWidth: '320px',
            height: 'auto',
            objectFit: 'cover',
            border: '4px solid #8B4513'
          }}
        />
        <div>
          <h3 className="fw-bold text-primary mb-2">{name}</h3>
          <p className="text-muted mb-3 fs-5">{role}</p>
          <p className="mb-3">{description}</p>

          {/* Communication Buttons */}
          <div className="communication-buttons mb-3">
            <a
              href={`tel:${phone}`}
              className="btn btn-outline-primary me-3 d-inline-flex align-items-center mb-2"
              style={{ borderColor: '#8B4513', color: '#8B4513' }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#8B4513';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#8B4513';
              }}
            >
              <i className="bi bi-telephone-fill me-2"></i>
              {getTranslation('pastors.callNow', 'Call Now')}
            </a>
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success d-inline-flex align-items-center mb-2"
              style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
            >
              <i className="bi bi-whatsapp me-2"></i>
              {getTranslation('pastors.whatsapp', 'WhatsApp')}
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://facebook.com/awakenur" className="text-dark me-3 fs-5">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com/awakenur" className="text-dark me-3 fs-5">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://instagram.com/awakenur" className="text-dark me-3 fs-5">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://t.me/awakenur" className="text-dark fs-5">
              <i className="bi bi-telegram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pastors = () => {
  const { language } = useLanguage();

  // Same simplified translation function
  const getTranslation = (key, fallback) => {
    try {
      const langTranslations = translations[language];
      
      if (!langTranslations) {
        console.warn(`No translations found for language: ${language}`);
        return fallback;
      }

      const keys = key.split('.');
      let result = langTranslations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          console.warn(`Translation key not found: ${key}`);
          return fallback;
        }
      }
      
      return result || fallback;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return fallback;
    }
  };

  const pastors = [
    {
      name: getTranslation('pastors.pastorName', 'SILUVAI RAJA'),
      role: getTranslation('pastors.pastorRole', 'Pastor'),
      image: 'pastor img.jpg',
      description: getTranslation('pastors.pastorDescription', 'A dedicated spiritual leader with over 15 years of experience in ministry.'),
      phone: '+919841711591',
      whatsapp: '919841711591'
    }
  ];

  return (
    <section className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-4" style={{ color: '#8B4513' }}>
          {getTranslation('pastors.meetOurPastor', 'Meet Our Pastor')}
        </h2>
        <p className="text-center mb-5 lead">
          {getTranslation('pastors.meetOurPastorDescription', 'Meet our pastor, a dedicated leader guiding our community in faith and love.')}
        </p>
        <div className="row g-4 justify-content-center">
          {pastors.map((pastor, index) => (
            <PastorCard key={index} {...pastor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pastors;