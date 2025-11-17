import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Tools from './components/Tools';
import Stats from './components/Stats';
import Features from './components/Features';
import CommunitySection from './components/CommunitySection';
import CreativeGrid from './components/CreativeGrid';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Tools />
      <Stats />
      <Features />
      <CommunitySection />
      <CreativeGrid />
      <CallToAction />
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;