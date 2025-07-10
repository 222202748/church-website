import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const PastorCard = ({ name, image, role, description, phone, whatsapp }) => {
  const { language } = useLanguage();
  const [imageError, setImageError] = useState(false);

  // Improved translation function with better debugging
  const getTranslation = (key, fallback) => {
    try {
      console.log('Getting translation for:', key, 'in language:', language);
      console.log('Translations object:', translations);
      
      if (!translations) {
        console.error('Translations object is undefined');
        return fallback;
      }

      // Check what language keys are available
      const availableLanguages = Object.keys(translations);
      console.log('Available languages:', availableLanguages);

      // Try different language key variations
      let currentLang = null;
      const possibleKeys = [
        language,                                    // 'english' or 'tamil'
        language.toLowerCase(),                      // 'english' or 'tamil' (lowercase)
        language === 'english' ? 'en' : 'ta',      // Short codes
        language === 'english' ? 'English' : 'Tamil', // Capitalized
      ];

      console.log('Trying language keys:', possibleKeys);

      for (const langKey of possibleKeys) {
        if (translations[langKey]) {
          currentLang = translations[langKey];
          console.log(`Found translations for key: ${langKey}`, currentLang);
          break;
        }
      }

      if (!currentLang) {
        console.error(`No translations found for language: ${language}. Available: ${availableLanguages.join(', ')}`);
        return fallback;
      }

      // Navigate nested keys
      const keys = key.split('.');
      let result = currentLang;
      
      console.log('Navigating keys:', keys);
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
          console.log(`Found key ${k}:`, result);
        } else {
          console.error(`Translation key not found: ${k} in`, result);
          return fallback;
        }
      }
      
      console.log('Final translation result:', result);
      return result || fallback;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return fallback;
    }
  };

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
    console.warn(`Failed to load image: /images/${image}`);
  };

  // Fallback placeholder as data URL
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
            <a href="https://facebook.com/awakenur" className="text-dark me-3 fs-5"><i className="bi bi-facebook"></i></a>
            <a href="https://twitter.com/awakenur" className="text-dark me-3 fs-5"><i className="bi bi-twitter"></i></a>
            <a href="https://instagram.com/awakenur" className="text-dark me-3 fs-5"><i className="bi bi-instagram"></i></a>
            <a href="https://t.me/awakenur" className="text-dark fs-5"><i className="bi bi-telegram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pastors = () => {
  const { language } = useLanguage();

  // Comprehensive debugging translation function
  const getTranslation = (key, fallback) => {
    console.log('🔍 === TRANSLATION DEBUG START ===');
    console.log('Requested key:', key);
    console.log('Current language from context:', language);
    console.log('Language type:', typeof language);
    console.log('Fallback:', fallback);
    
    // Check if translations object exists
    console.log('Translations object:', translations);
    console.log('Translations type:', typeof translations);
    console.log('Translations is array?', Array.isArray(translations));
    
    if (!translations) {
      console.error('❌ Translations object is null/undefined');
      return fallback;
    }

    // Log all available language keys
    const availableKeys = Object.keys(translations);
    console.log('Available language keys:', availableKeys);
    
    // Try to find the correct language key
    let currentLang = null;
    let usedKey = null;
    
    // Test each possible key variation
    const possibleKeys = [
      language,                                    // Direct match
      language?.toLowerCase(),                     // Lowercase
      language?.toUpperCase(),                     // Uppercase  
      language?.charAt(0).toUpperCase() + language?.slice(1), // Capitalize first letter
      language === 'english' ? 'en' : 'ta',      // Short codes
      language === 'english' ? 'English' : 'Tamil', // Full names capitalized
      language === 'english' ? 'ENGLISH' : 'TAMIL', // All caps
    ];

    console.log('Trying these language key variations:', possibleKeys);

    for (const langKey of possibleKeys) {
      console.log(`Testing key: "${langKey}"`);
      if (langKey && translations[langKey]) {
        currentLang = translations[langKey];
        usedKey = langKey;
        console.log(`✅ Found translations for key: "${langKey}"`);
        console.log('Translation object:', currentLang);
        break;
      } else {
        console.log(`❌ No translations found for key: "${langKey}"`);
      }
    }

    if (!currentLang) {
      console.error('❌ No translations found for any language key variation');
      console.log('Maybe try one of these available keys:', availableKeys);
      return fallback;
    }

    console.log(`Using language key: "${usedKey}"`);
    
    // Navigate through nested keys
    const keys = key.split('.');
    let result = currentLang;
    
    console.log('Navigating through keys:', keys);
    
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      console.log(`Step ${i + 1}: Looking for key "${k}" in:`, result);
      
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
        console.log(`✅ Found "${k}":`, result);
      } else {
        console.error(`❌ Key "${k}" not found in object`);
        console.log('Available keys at this level:', result ? Object.keys(result) : 'N/A');
        return fallback;
      }
    }
    
    console.log('🎉 Final translation result:', result);
    console.log('🔍 === TRANSLATION DEBUG END ===');
    return result || fallback;
  };

  // Debug logging
  console.log('🚀 === PASTORS COMPONENT DEBUG ===');
  console.log('Language Context:', { language });
  console.log('Translations Import:', translations);
  
  // Test multiple translations
  console.log('Testing translations...');
  const testTranslations = {
    meetOurPastor: getTranslation('pastors.meetOurPastor', 'Meet Our Pastor'),
    pastorName: getTranslation('pastors.pastorName', 'SILUVAI RAJA'),
    callNow: getTranslation('pastors.callNow', 'Call Now'),
  };
  console.log('Test results:', testTranslations);

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
        {/* Enhanced Debug info */}
        <div className="alert alert-warning mb-4" style={{ fontSize: '11px', fontFamily: 'monospace' }}>
          <strong>🔧 DEBUG INFO (Remove in production):</strong><br/>
          <strong>Language Context:</strong> "{language}" (type: {typeof language})<br/>
          <strong>Translations Object:</strong> {translations ? 'EXISTS' : 'MISSING'}<br/>
          <strong>Available Keys:</strong> {translations ? Object.keys(translations).join(', ') : 'None'}<br/>
          <strong>Test Results:</strong><br/>
          - Meet Our Pastor: "{testTranslations.meetOurPastor}"<br/>
          - Pastor Name: "{testTranslations.pastorName}"<br/>
          - Call Now: "{testTranslations.callNow}"<br/>
          <br/>
          <strong>🚨 If Tamil not working, check:</strong><br/>
          1. Is your language switching properly? Current: {language}<br/>
          2. Do you have a key that matches in translations object?<br/>
          3. Is the nested structure correct (pastors.keyName)?
        </div>
        
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