
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <>
//       <style>{`
//         .hero {
//           background-image:url('https://conradschmitt.com/wp-content/uploads/2022/03/StThomasFinished-1.jpg');
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           position: relative;
//           overflow: hidden;
//         }
        
//         .hero::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(0, 0, 0, 0.4);
//           z-index: 1;
//         }
        
//         .hero-content {
//           position: relative;
//           z-index: 2;
//           text-align: center;
//         }
        
//         .hero h1 {
//           font-size: 4rem;
//           font-weight: bold;
//           margin-bottom: 1.5rem;
//           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
//         }
        
//         .hero p {
//           font-size: 1.5rem;
//           margin-bottom: 2rem;
//           opacity: 0.95;
//           max-width: 800px;
//           margin-left: auto;
//           margin-right: auto;
//         }
        
//         .hero-btn {
//           background: white;
//           color: #92400e;
//           border: none;
//           padding: 15px 30px;
//           font-size: 1.2rem;
//           font-weight: 600;
//           border-radius: 50px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
//           text-decoration: none;
//           display: inline-block;
//         }
        
//         .hero-btn:hover {
//           background: #fef3c7;
//           transform: translateY(-2px);
//           box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
//         }
        
//         .bible-bg {
//           position: absolute;
//           top: 10%;
//           right: 10%;
//           width: 200px;
//           height: 250px;
//           background: rgba(139, 69, 19, 0.1);
//           border-radius: 5px;
//           transform: rotate(15deg);
//           z-index: 1;
//         }
        
//         .bible-bg2 {
//           position: absolute;
//           bottom: 20%;
//           left: 15%;
//           width: 150px;
//           height: 200px;
//           background: rgba(160, 82, 45, 0.1);
//           border-radius: 5px;
//           transform: rotate(-10deg);
//           z-index: 1;
//         }
        
//         @media (max-width: 768px) {
//           .hero h1 {
//             font-size: 2.5rem;
//           }
//           .hero p {
//             font-size: 1.2rem;
//           }
//         }
//       `}</style>
      
//       <header className="hero">
//         <div className="bible-bg"></div>
//         <div className="bible-bg2"></div>
        
//         <div className="container hero-content">
//           <h1>Welcome to the glory of God!</h1>
//           <p>
//             Join us at "AJC SILUVAIRAJA MINISTRY" Church, where love and acceptance thrive. Embrace divine 
//             glory and connect with others in a vibrant, faith-filled community!
//           </p>
//           <div className="hero-buttons">
//             <Link to="/sermons" className="hero-btn">
//               Join Us Now →
//             </Link>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;


import React from 'react';
import { Link } from 'react-router-dom';

import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <style>{`
        .hero {
          background-image: url('https://conradschmitt.com/wp-content/uploads/2022/03/StThomasFinished-1.jpg');
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          position: relative;
          text-align: center;
          padding: 2rem;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: auto;
        }

        .hero h1 {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 1.2rem;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
        }

        .hero p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          opacity: 0.95;
          padding: 0 1rem;
        }

        .hero-btn {
          background: white;
          color: #92400e;
          border: none;
          padding: 14px 28px;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          text-decoration: none;
          display: inline-block;
        }

        .hero-btn:hover {
          background: #fef3c7;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .bible-bg, .bible-bg2 {
          display: none;
        }

        @media (min-width: 768px) {
          .hero h1 {
            font-size: 3rem;
          }
          .hero p {
            font-size: 1.3rem;
          }
        }

        @media (min-width: 992px) {
          .hero h1 {
            font-size: 4rem;
          }
          .hero p {
            font-size: 1.5rem;
          }
          .bible-bg {
            display: block;
            position: absolute;
            top: 10%;
            right: 10%;
            width: 200px;
            height: 250px;
            background: rgba(139, 69, 19, 0.1);
            border-radius: 5px;
            transform: rotate(15deg);
            z-index: 1;
          }

          .bible-bg2 {
            display: block;
            position: absolute;
            bottom: 20%;
            left: 15%;
            width: 150px;
            height: 200px;
            background: rgba(160, 82, 45, 0.1);
            border-radius: 5px;
            transform: rotate(-10deg);
            z-index: 1;
          }
        }
      `}</style>

      <header className="hero">
        <div className="bible-bg"></div>
        <div className="bible-bg2"></div>

        <div className="container hero-content">
          <h1>{t?.header?.welcomeTitle || t?.welcomeTitle || 'Welcome to the glory of God!'}</h1>
          <p>
            {t?.header?.churchDescription || t?.churchDescription || 'Join us at "AJC SILUVAIRAJA MINISTRY" Church, where love and acceptance thrive. Embrace divine glory and connect with others in a vibrant, faith-filled community!'}
          </p>
          <div className="hero-buttons">
            <Link to="/sermons" className="hero-btn">
              {t?.header?.joinUsNow || t?.joinUsNow || 'Join Us Now →'}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
