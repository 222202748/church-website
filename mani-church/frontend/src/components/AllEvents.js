import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const AllEvents = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { language } = useLanguage();
  const t = translations[language] || translations.en || {}; // Add fallback

  const getCurrentDate = () => {
    const today = new Date();
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'short', 
      day: '2-digit' 
    };
    return today.toLocaleDateString(language === 'tamil' ? 'ta-IN' : 'en-US', options);
  };

  // Add fallback values for missing translation keys
  const getTranslation = (key, fallback = key) => {
    return t[key] || fallback;
  };

  const events = [
    {
      id: 1,
      title: getTranslation('wonderfulGathering', 'Wonderful Gathering'),
      date: "28",
      month: "JUN",
      year: "2025",
      time: getTranslation('eventTime', 'Time') + " 06:00 pm",
      location: getTranslation('eventLocation', 'Location') + ": 7th main road,12th cross street,pudhu nallur,Kundrathur,ch-600069.",
      description: getTranslation('events', 'Event Description'),
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop&auto=format"
    },
    {
      id: 2,
      title: getTranslation('buildingBonds', 'Building Bonds'),
      date: "29",
      month: "JUN",
      year: "2025",
      time: getTranslation('eventTime', 'Time') + " 06:00 pm",
      location: getTranslation('eventLocation', 'Location') + ": 7th main road,12th cross street,pudhu nallur,Kundrathur,ch-600069.",
      description: getTranslation('events', 'Event Description'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&auto=format"
    },
    {
      id: 3,
      title: getTranslation('thankfulness', 'Thankfulness'),
      date: "12",
      month: "JUL",
      year: "2025",
      time: getTranslation('eventTime', 'Time') + " 12:00 pm",
      location: getTranslation('eventLocation', 'Location') + ": 7th main road,12th cross street,pudhu nallur,Kundrathur,ch-600069.",
      description: getTranslation('events', 'Event Description'),
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=250&fit=crop&auto=format"
    },
    {
      id: 4,
      title: getTranslation('faithFellowship', 'Faith Fellowship'),
      date: "27",
      month: "JUL",
      year: "2025",
      time: getTranslation('eventTime', 'Time') + " 08:00 pm",
      location: getTranslation('eventLocation', 'Location') + ": 7th main road,12th cross street,pudhu nallur,Kundrathur,ch-600069.",
      description: getTranslation('events', 'Event Description'),
      image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=400&h=250&fit=crop&auto=format"
    },
    {
      id: 5,
      title: getTranslation('youthGathering', 'Youth Gathering'),
      date: "15",
      month: "AUG",
      year: "2025",
      time: getTranslation('eventTime', 'Time') + " 07:00 pm",
      location: getTranslation('eventLocation', 'Location') + ": 7th main road,12th cross street,pudhu nallur,Kundrathur,ch-600069.",
      description: getTranslation('events', 'Event Description'),
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop&auto=format"
    },
    {
      id: 6,
      title: getTranslation('prayerService', 'Prayer Service'),
      date: "28",
      month: "AUG",
      year: "2025",
      time: getTranslation('eventTime', 'Time') + " 05:30 am",
      location: getTranslation('eventLocation', 'Location') + ": 7th main road,12th cross street,pudhu nallur,Kundrathur,ch-600069.",
      description: getTranslation('events', 'Event Description'),
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=250&fit=crop&auto=format"
    }
  ];

  const filteredEvents = useMemo(() => {
    if (!searchTerm.trim()) {
      return events;
    }

    const searchLower = searchTerm.toLowerCase().trim();
    
    return events.filter(event => {
      return (
        event.title.toLowerCase().includes(searchLower) ||
        event.location.toLowerCase().includes(searchLower) ||
        event.description.toLowerCase().includes(searchLower) ||
        event.month.toLowerCase().includes(searchLower) ||
        event.date.includes(searchLower) ||
        event.time.toLowerCase().includes(searchLower)
      );
    });
  }, [searchTerm, events]);

  const clearSearch = () => {
    setSearchTerm('');
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f8f8',
      minHeight: '100vh'
    },
    topBar: {
      backgroundColor: '#8B4513',
      color: 'white',
      padding: '8px 0',
      fontSize: '14px'
    },
    topBarContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    eventsSection: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px'
    },
    filterSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      marginBottom: '40px'
    },
    filterLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      flexWrap: 'wrap'
    },
    dateText: {
      fontSize: '16px',
      fontWeight: '600',
      whiteSpace: 'nowrap',
      color: '#333'
    },
    iconButton: {
      backgroundColor: 'transparent',
      border: '1px solid #ddd',
      padding: '8px 12px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'all 0.3s ease'
    },
    searchContainer: {
      position: 'relative',
      width: '100%',
      maxWidth: '350px'
    },
    searchInput: {
      padding: '12px 80px 12px 40px',
      border: '2px solid #ddd',
      borderRadius: '25px',
      fontSize: '16px',
      width: '100%',
      boxSizing: 'border-box',
      transition: 'border-color 0.3s ease',
      outline: 'none'
    },
    searchIcon: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#999',
      fontSize: '18px'
    },
    clearButton: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      color: '#999',
      cursor: 'pointer',
      fontSize: '18px',
      padding: '4px',
      borderRadius: '50%',
      transition: 'color 0.3s ease'
    },
    searchResults: {
      marginBottom: '20px',
      fontSize: '14px',
      color: '#666',
      fontStyle: 'italic'
    },
    eventsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginBottom: '60px'
    },
    eventCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    eventImage: {
      width: '100%',
      height: '200px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    },
    dateTag: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      backgroundColor: '#2d5a4a',
      color: 'white',
      padding: '8px 12px',
      borderRadius: '6px',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: 'bold'
    },
    dateNumber: {
      fontSize: '20px',
      lineHeight: '1'
    },
    dateMonth: {
      fontSize: '12px',
      opacity: '0.9'
    },
    eventContent: {
      flex: '1',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    eventTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333',
      margin: '0 0 10px 0'
    },
    eventTime: {
      color: '#666',
      margin: '0 0 5px 0',
      fontSize: '14px'
    },
    eventLocation: {
      color: '#666',
      margin: '0 0 10px 0',
      fontSize: '14px',
      lineHeight: '1.4'
    },
    eventDescription: {
      color: '#777',
      fontSize: '13px',
      lineHeight: '1.4',
      margin: '0 0 20px 0'
    },
    registerButton: {
      backgroundColor: '#D4B896',
      color: '#5D4037',
      border: 'none',
      padding: '12px 20px',
      fontSize: '14px',
      fontWeight: '600',
      borderRadius: '6px',
      cursor: 'pointer',
      alignSelf: 'flex-start',
      transition: 'background-color 0.3s ease'
    },
    noResults: {
      textAlign: 'center',
      padding: '60px 20px',
      color: '#666'
    },
    noResultsIcon: {
      fontSize: '48px',
      marginBottom: '20px'
    },
    noResultsText: {
      fontSize: '18px',
      marginBottom: '10px'
    },
    noResultsSubtext: {
      fontSize: '14px',
      color: '#999'
    }
  };

  const mediaStyles = `
    @media (min-width: 768px) {
      .filter-section {
        flex-direction: row !important;
        justify-content: space-between !important;
        align-items: center !important;
      }
      .events-grid {
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)) !important;
      }
      .event-card {
        flex-direction: row !important;
      }
      .event-card:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
      }
      .event-image {
        width: 200px !important;
        height: 180px !important;
        flex-shrink: 0 !important;
      }
      .event-title {
        font-size: 20px !important;
      }
    }

    @media (max-width: 767px) {
      .events-section {
        padding: 20px 15px !important;
      }
      .filter-left {
        justify-content: center !important;
      }
      .search-container {
        max-width: 100% !important;
      }
      .events-grid {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
      }
    }

    .icon-button:hover {
      background-color: #f0f0f0 !important;
      transform: translateY(-1px) !important;
    }

    .search-input:focus {
      border-color: #8B4513 !important;
    }

    .clear-button:hover {
      color: #8B4513 !important;
      background-color: #f0f0f0 !important;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: mediaStyles }} />
      <div style={styles.container}>
        <div style={styles.topBar}>
          <div style={styles.topBarContent}></div>
        </div>

        <div style={styles.eventsSection} className="events-section">
          <div style={styles.filterSection} className="filter-section">
            <div style={styles.filterLeft} className="filter-left">
              <span style={styles.dateText}>{getCurrentDate()}</span>
              <button style={styles.iconButton} title={getTranslation('eventCalendar', 'Event Calendar')}>📅</button>
            </div>

            <div style={styles.searchContainer} className="search-container">
              <span style={styles.searchIcon}>🔍</span>
              <input
                type="text"
                placeholder={getTranslation('search', 'Search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchInput}
                className="search-input"
              />
              {searchTerm && (
                <button onClick={clearSearch} style={styles.clearButton} className="clear-button" title={getTranslation('search', 'Clear search')}>
                  ✕
                </button>
              )}
            </div>
          </div>

          {searchTerm && (
            <div style={styles.searchResults}>
              {filteredEvents.length === 0 
                ? `${getTranslation('noResults', 'No results found for')} "${searchTerm}"` 
                : `${getTranslation('search', 'Found')} ${filteredEvents.length} ${getTranslation('events', 'events')}`
              }
            </div>
          )}

          {filteredEvents.length === 0 ? (
            <div style={styles.noResults}>
              <div style={styles.noResultsIcon}>🔍</div>
              <div style={styles.noResultsText}>{getTranslation('noResults', 'No results found')}</div>
              <div style={styles.noResultsSubtext}>
                {getTranslation('search', 'Try a different search term')}
              </div>
              {searchTerm && (
                <button onClick={clearSearch} style={{ ...styles.registerButton, marginTop: '20px' }}>
                  {getTranslation('events', 'View all events')}
                </button>
              )}
            </div>
          ) : (
            <div style={styles.eventsGrid} className="events-grid">
              {filteredEvents.map((event) => (
                <div key={event.id} style={styles.eventCard} className="event-card">
                  <div 
                    style={{ ...styles.eventImage, backgroundImage: `url(${event.image})` }}
                    className="event-image"
                  >
                    <div style={styles.dateTag}>
                      <div style={styles.dateNumber}>{event.date}</div>
                      <div style={styles.dateMonth}>{event.month}</div>
                    </div>
                  </div>

                  <div style={styles.eventContent} className="event-content">
                    <div>
                      <h3 style={styles.eventTitle}>{event.title}</h3>
                      <p style={styles.eventTime}>🕐 {event.time}</p>
                      <p style={styles.eventLocation}>📍 {event.location}</p>
                      <p style={styles.eventDescription}>{event.description}</p>
                    </div>

                    <button
                      onClick={() => navigate('/event-registration', { 
                        state: { 
                          eventTitle: event.title,
                          eventDate: `${event.date} ${event.month} ${event.year}`,
                          eventTime: event.time,
                          eventLocation: event.location,
                          eventDescription: event.description,
                          eventId: event.id
                        }
                      })}                    
                      style={styles.registerButton}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#C5A47F'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#D4B896'}
                    >
                      {getTranslation('registerNow', 'Register Now')} →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllEvents;