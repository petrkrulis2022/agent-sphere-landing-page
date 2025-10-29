import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import OnboardToCryptoSection from "./components/sections/OnboardToCryptoSection";
import WatchDemoSection from "./components/sections/WatchDemoSection";
import WhyCubePaySection from "./components/sections/WhyCubePaySection";
import CubePaySection from "./components/sections/CubePaySection";
import SpatiaSection from "./components/sections/SpatiaSection";
import PrivatePaymentsSection from "./components/sections/PrivatePaymentsSection";
import SpatiaRegistrationSection from "./components/sections/SpatiaRegistrationSection";
import CubePayLanding from "./components/CubePayLanding";

type Section =
  | "home"
  | "how-it-works"
  | "onboard-crypto"
  | "watch-demo"
  | "why-cubepay"
  | "cubepay"
  | "spatia"
  | "private-payments"
  | "contact"
  | "linktree"
  | "register";

function App() {
  const [currentSection, setCurrentSection] = useState<Section>("home");

  // Handle hash changes for navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as Section;
      if (
        hash &&
        [
          "home",
          "how-it-works",
          "onboard-crypto",
          "watch-demo",
          "why-cubepay",
          "cubepay",
          "spatia",
          "private-payments",
          "contact",
          "linktree",
          "register",
        ].includes(hash)
      ) {
        setCurrentSection(hash);
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <Hero />;
      case "how-it-works":
        return <HowItWorksSection />;
      case "onboard-crypto":
        return <OnboardToCryptoSection />;
      case "watch-demo":
        return <WatchDemoSection />;
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
      case "linktree":
        return <CubePayLanding />;
      case "register":
        return <SpatiaRegistrationSection />;
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
