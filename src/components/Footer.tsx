import React from 'react';
import { Zap, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AgentSphere</span>
            </div>
            <p className="text-gray-400 text-sm">
              The world's first Agentic Internet platform. Deploy AI agents in real-world locations with AR technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-white font-semibold mb-4">Use Cases</h3>
            <ul className="space-y-2">
              <li><a href="#near-pay" className="text-gray-400 hover:text-green-400 transition-colors text-sm">NeAR Pay</a></li>
              <li><a href="#world-builder" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Digital World Builder</a></li>
              <li><a href="#social-ar" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Social AR Network</a></li>
              <li><a href="#my-ghost" className="text-gray-400 hover:text-green-400 transition-colors text-sm">My Ghost</a></li>
              <li><a href="#home-security" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Home Security</a></li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-white font-semibold mb-4">Technology</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm">RTK GPS Enhancement</span></li>
              <li><span className="text-gray-400 text-sm">AR QR Payments</span></li>
              <li><span className="text-gray-400 text-sm">Multi-Blockchain</span></li>
              <li><span className="text-gray-400 text-sm">3D World Reconstruction</span></li>
              <li><span className="text-gray-400 text-sm">Real-time Interactions</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 AgentSphere. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Building the future of the Agentic Internet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;