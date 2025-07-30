import React, { useState } from 'react';

type Section = 'home' | 'near-pay' | 'world-builder' | 'social-ar' | 'my-ghost' | 'home-security' | 'contact';

interface NavigationProps {
  currentSection: Section;
  onSectionChange: (section: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as Section, name: 'Home', href: '#home' },
    { id: 'near-pay' as Section, name: 'NeAR Pay', href: '#near-pay' },
    { id: 'world-builder' as Section, name: 'Digital World Builder', href: '#world-builder' },
    { id: 'social-ar' as Section, name: 'Social AR Network', href: '#social-ar' },
    { id: 'my-ghost' as Section, name: 'My Ghost', href: '#my-ghost' },
    { id: 'home-security' as Section, name: 'Home Security', href: '#home-security' },
    { id: 'contact' as Section, name: 'Contact', href: '#contact' },
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
                ? 'text-green-400'
                : 'text-gray-300 hover:text-green-400'
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
                    ? 'text-green-400'
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 py-2">
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200">
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