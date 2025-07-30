import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NearPaySection from './components/sections/NearPaySection';
import WorldBuilderSection from './components/sections/WorldBuilderSection';
import SocialARSection from './components/sections/SocialARSection';
import MyGhostSection from './components/sections/MyGhostSection';
import HomeSecuritySection from './components/sections/HomeSecuritySection';

type Section = 'home' | 'near-pay' | 'world-builder' | 'social-ar' | 'my-ghost' | 'home-security' | 'contact';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Hero />;
      case 'near-pay':
        return <NearPaySection />;
      case 'world-builder':
        return <WorldBuilderSection />;
      case 'social-ar':
        return <SocialARSection />;
      case 'my-ghost':
        return <MyGhostSection />;
      case 'home-security':
        return <HomeSecuritySection />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header currentSection={currentSection} onSectionChange={setCurrentSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;