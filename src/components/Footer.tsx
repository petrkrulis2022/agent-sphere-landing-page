import React from "react";
import { Box, Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 via-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <Box className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                CubePay
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionary spatial payment terminal platform. Experience the
              future of AR payments with secure, instant transactions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#cubepay"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Cube Pay Terminal
                </a>
              </li>
              <li>
                <a
                  href="#spatia"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Spatia AR Bank
                </a>
              </li>
              <li>
                <a
                  href="#social-ar"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Social AR Network
                </a>
              </li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-white font-semibold mb-4">Technology</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 text-sm">
                  3D Spatial Terminals
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">AR QR Payments</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">
                  Blockchain Security
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">
                  Multi-Currency Support
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">
                  Real-time Processing
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          {/* cube-pay.base.eth Banner */}
          <div className="flex justify-center mb-8">
            <img
              src="/images/cubepay/cube-pay-base-eth.jpeg"
              alt="cube-pay.base.eth"
              className="h-12 md:h-16 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 CubePay. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Building the future of spatial payments
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
