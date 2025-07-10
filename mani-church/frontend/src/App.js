import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import AwakenurNavbar from './components/Navbar';
import Header from './components/Header';
import EventCountdown from './components/EventCountdown';
import Pastors from './components/Pastors';
import BlogArticles from './components/BlogArticles';
import Blog from './components/Blog';
import EventRegistration from './components/EventRegistration';
import Footer from './components/Footer';
import Events from './components/AllEvents';
import Contact from './components/Contact';
import { LanguageProvider } from './contexts/LanguageContext';
import Admindashboard from './components/Admindashboard';
import Adminlogin from './components/Adminlogin';



const Home = () => (
  <>
    <Header />
    <EventCountdown />
    <Pastors />
    <BlogArticles/>
  </>
);

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <AwakenurNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pastors" element={<Pastors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Admin" element={<Adminlogin />} />
          <Route path="/Admin/dashboard" element={<Admindashboard />} />
          <Route path="/event-registration" element={<EventRegistration />} />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;