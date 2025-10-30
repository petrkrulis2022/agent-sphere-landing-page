import React, { useState } from "react";

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

interface NavigationProps {
  currentSection: Section;
  onSectionChange: (section: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSection,
  onSectionChange,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home" as Section, name: "Home", href: "#home" },
    {
      id: "how-it-works" as Section,
      name: "How It Works",
      href: "#how-it-works",
    },
    {
      id: "onboard-crypto" as Section,
      name: "Onboard to Crypto",
      href: "#onboard-crypto",
    },
    {
      id: "watch-demo" as Section,
      name: "Watch Demo",
      href: "#watch-demo",
    },
    {
      id: "why-cubepay" as Section,
      name: "Why Cube Pay",
      href: "#why-cubepay",
    },
    {
      id: "private-payments" as Section,
      name: "Private Payments",
      href: "#private-payments",
    },
    { id: "spatia" as Section, name: "Spatial Bank", href: "#spatia" },
    { id: "contact" as Section, name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (section: Section) => {
    onSectionChange(section);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`text-sm font-medium transition-colors duration-200 ${
              currentSection === item.id
                ? "text-green-400"
                : "text-gray-300 hover:text-green-400"
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-green-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 transition-colors duration-200 ${
                  currentSection === item.id
                    ? "text-green-400"
                    : "text-gray-300 hover:text-green-400"
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 py-2">
              <button
                onClick={() => handleNavClick("linktree")}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
              >
                Launch App
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
