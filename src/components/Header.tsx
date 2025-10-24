import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Navigation from "./Navigation";

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

interface HeaderProps {
  currentSection: Section;
  onSectionChange: (section: Section) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/cubepay/logo.png"
              alt="CubePay Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
              CubePay
            </span>
          </div>

          {/* Navigation */}
          <Navigation
            currentSection={currentSection}
            onSectionChange={onSectionChange}
          />

          {/* Launch App Button */}
          <div className="hidden lg:block">
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
              Launch App
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-green-400 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
