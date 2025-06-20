
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const PastorCard = ({ name, image, role, description, phone, whatsapp }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="col-12 col-lg-10 col-xl-8 mx-auto">
      <div className="d-flex flex-column flex-lg-row bg-light p-4 rounded-3 align-items-center shadow-sm hover-shadow">
        <img
          src={`/images/${image}`}
          className="img-fluid rounded-circle mb-3 mb-lg-0 me-lg-4"
          alt={name}
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
              {t?.pastors?.callNow || 'Call Now'}
            </a>
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success d-inline-flex align-items-center mb-2"
              style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
            >
              <i className="bi bi-whatsapp me-2"></i>
              {t?.pastors?.whatsapp || 'WhatsApp'}
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
  const t = translations[language];

  const pastors = [
    {
      name: t?.pastors?.pastorName || 'SILUVAI RAJA',
      role: t?.pastors?.pastorRole || 'Pastor',
      image: 'pastor img.jpg',
      description: t?.pastors?.pastorDescription || 'A dedicated spiritual leader with over 15 years of experience in ministry.',
      phone: '+919841711591',
      whatsapp: '919841711591'
    }
  ];

  return (
    <section className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-4" style={{ color: '#8B4513' }}>
          {t?.pastors?.meetOurPastor || 'Meet Our Pastor'}
        </h2>
        <p className="text-center mb-5 lead">
          {t?.pastors?.meetOurPastorDescription || 'Meet our pastor, a dedicated leader guiding our community in faith and love.'}
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
