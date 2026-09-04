import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

// Separate Page Components
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';
import WhyUsPage from './pages/WhyUsPage.jsx';
import TrainingPage from './pages/TrainingPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState('');

  // Synchronize with URL Hash on load and on hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'courses', 'why-us', 'training', 'contact'];
      if (hash && validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCourse = (courseCode) => {
    setSelectedCourse(courseCode);
  };

  return (
    <div className="app-root">
      {/* Sticky Top Header Navigation with Page Tabs */}
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {/* Main Distinct Page Content Area */}
      <main className="main-content-viewport">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectCourse={handleSelectCourse}
          />
        )}

        {activePage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {activePage === 'courses' && (
          <CoursesPage
            onNavigate={handleNavigate}
            onSelectCourse={handleSelectCourse}
          />
        )}

        {activePage === 'why-us' && (
          <WhyUsPage onNavigate={handleNavigate} />
        )}

        {activePage === 'training' && (
          <TrainingPage onNavigate={handleNavigate} />
        )}

        {activePage === 'contact' && (
          <ContactPage 
            selectedCourse={selectedCourse} 
            onNavigate={handleNavigate} 
          />
        )}
      </main>

      {/* Website Footer with Page Jump Links */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Call & WhatsApp Quick Buttons */}
      <WhatsAppButton />
    </div>
  );
}
