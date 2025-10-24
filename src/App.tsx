import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import OnboardToCryptoSection from "./components/sections/OnboardToCryptoSection";
import BaseAppIntegrationSection from "./components/sections/BaseAppIntegrationSection";
import WhyCubePaySection from "./components/sections/WhyCubePaySection";
import CubePaySection from "./components/sections/CubePaySection";
import SpatiaSection from "./components/sections/SpatiaSection";
import PrivatePaymentsSection from "./components/sections/PrivatePaymentsSection";

type Section =
  | "home"
  | "how-it-works"
  | "onboard-crypto"
  | "base-app"
  | "why-cubepay"
  | "cubepay"
  | "spatia"
  | "private-payments"
  | "contact";

function App() {
  const [currentSection, setCurrentSection] = useState<Section>("home");

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <Hero />;
      case "how-it-works":
        return <HowItWorksSection />;
      case "onboard-crypto":
        return <OnboardToCryptoSection />;
      case "base-app":
        return <BaseAppIntegrationSection />;
      case "why-cubepay":
        return <WhyCubePaySection />;
      case "cubepay":
        return <CubePaySection />;
      case "spatia":
        return <SpatiaSection />;
      case "private-payments":
        return <PrivatePaymentsSection />;
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
