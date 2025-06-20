import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // Remove duplicate language state
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getNavLinks = () => {
    if (language === 'tamil') {
      return [
        { to: '/', label: 'முகப்பு' },
        // { to: '/sermons', label: 'பிரசங்கங்கள்' },
        { to: '/events', label: 'நிகழ்வுகள்' },
        { to: '/blog', label: 'வலைப்பதிவு' },
        { to: '/pastors', label: 'பாஸ்டர்கள்' },
        { to: '/contact', label: 'தொடர்பு' },
        { to: '/Admin',label:'நிர்வாகி'}
      ];
    } else {
      return [
        { to: '/', label: 'Home' },
        // { to: '/sermons', label: 'Sermons' },
        { to: '/events', label: 'Events' },
        { to: '/blog', label: 'Blog' },
        { to: '/pastors', label: 'Pastors' },
        { to: '/contact', label: 'Contact' },
        { to: '/admin', label: 'Admin'}
      ];
    }
  };

  const headerStyles = {
    background: 'linear-gradient(90deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)',
    padding: isMobile ? '12px 0' : '15px 0',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    position: 'sticky',
    top: '0',
    zIndex: '1000',
    width: '100%'
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: isMobile ? '0 16px' : '0 20px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const logoContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '8px' : '12px',
    textDecoration: 'none',
    zIndex: '1001'
  };

  const logoIconStyles = {
    width: isMobile ? '40px' : '50px',
    height: isMobile ? '40px' : '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    overflow: 'hidden',
    flexShrink: 0
  };

  const logoImageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const logoTextStyles = {
    fontSize: isMobile ? '20px' : '28px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: '0',
    fontFamily: 'serif',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
    whiteSpace: 'nowrap'
  };

  const desktopNavStyles = {
    display: isMobile ? 'none' : 'flex',
    gap: '24px',
    alignItems: 'center'
  };

  const navLinkStyles = {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    padding: '8px 12px',
    borderRadius: '4px',
    whiteSpace: 'nowrap'
  };

  const mobileMenuButtonStyles = {
    display: isMobile ? 'flex' : 'none',
    background: 'none',
    border: 'none',
    color: '#FFFFFF',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: '1001',
    padding: '8px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease'
  };

  const mobileMenuOverlayStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px',
    zIndex: '1000',
    padding: '20px',
    boxSizing: 'border-box'
  };

  const mobileNavLinkStyles = {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: '500',
    padding: '12px 24px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    minWidth: '200px',
    border: '2px solid transparent'
  };

  const languageSwitcherStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#FFFFFF',
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '4px',
    padding: '6px 12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginLeft: '24px',
    fontSize: '14px'
  };

  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        <a href="/" style={logoContainerStyles}>
          <div style={logoIconStyles}>
            <img 
              src="/logo.jpg"
              alt="AJC Church Logo" 
              style={logoImageStyles}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/favicon.ico';
              }}
            />
          </div>
          <h1 style={logoTextStyles}>AJC</h1>
        </a>

        {/* Desktop Navigation Menu */}
        <nav style={desktopNavStyles}>
          {getNavLinks().map((link) => (
            <a
              key={link.to}
              href={link.to}
              onClick={handleNavClick}
              style={navLinkStyles}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            style={languageSwitcherStyles}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            {language === 'tamil' ? 'தமிழ்' : 'EN'}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={toggleLanguage}
            style={{
              ...languageSwitcherStyles,
              display: isMobile ? 'flex' : 'none',
              marginLeft: 0
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }}
          >
            {language === 'tamil' ? 'தமிழ்' : 'EN'}
          </button>
          <button
            onClick={toggleMobileMenu}
            style={mobileMenuButtonStyles}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div style={mobileMenuOverlayStyles}>
            {getNavLinks().map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={handleNavClick}
                style={mobileNavLinkStyles}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.target.style.borderColor = '#FFFFFF';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.borderColor = 'transparent';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
<LanguageSwitcher />
