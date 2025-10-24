import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CubePaySection from "./components/sections/CubePaySection";
import SpatiaSection from "./components/sections/SpatiaSection";
import SocialARSection from "./components/sections/SocialARSection";

type Section = "home" | "cubepay" | "spatia" | "social-ar" | "contact";

function App() {
  const [currentSection, setCurrentSection] = useState<Section>("home");

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <Hero />;
      case "cubepay":
        return <CubePaySection />;
      case "spatia":
        return <SpatiaSection />;
      case "social-ar":
        return <SocialARSection />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;
