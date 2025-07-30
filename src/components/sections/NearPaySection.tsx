import React from 'react';
import { CreditCard, Car, Smartphone, Coins, ArrowRight, CheckCircle } from 'lucide-react';
import ImageSlider from '../ImageSlider';

const NearPaySection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-8">
            <CreditCard className="w-4 h-4 mr-2" />
            Revolutionary AR QR Payment System
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            NeAR Pay
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            World's first floating QR payment system with trailing AR agents. Pay for taxi rides, deliveries, and mobile services without physical terminals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 flex items-center">
              Try NeAR Pay
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Image Slider */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">See NeAR Pay in Action</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the revolutionary AR QR payment system through these interactive demonstrations
            </p>
          </div>
          <div className="relative w-full max-w-6xl mx-auto">
            {/* Main Slider */}
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10">
              {[
                {
                  id: 1,
                  image: '/src/assets/3d_world_reconstruction_1.png',
                  title: 'Precision AR Agent Placement',
                  description: 'Deploy payment agents with centimeter-accurate GPS positioning'
                },
                {
                  id: 2,
                  image: '/src/assets/3d_world_reconstruction_2.png',
                  title: 'Real-time AR Environment',
                  description: 'Live 3D reconstruction for seamless AR payment integration'
                },
                {
                  id: 3,
                  image: '/src/assets/Gemini_Generated_Image_47hwd547hwd547hw.png',
                  title: 'AR Agent Interaction',
                  description: 'Interactive AR payment agents in real-world environments'
                },
                {
                  id: 4,
                  image: '/src/assets/3d_world_reconstruction_3.webp',
                  title: 'Advanced 3D Mapping',
                  description: 'Detailed environment mapping for precise payment agent deployment'
                }
              ].map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === 0 ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-gray-200 text-lg max-w-2xl">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === 0
                      ? 'bg-green-500 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Floating 3D QR Codes */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Floating 3D QR Codes</h3>
            <p className="text-gray-300 mb-6">
              Pay agents without leaving AR. QR codes float in 3D space, eliminating the need for physical payment terminals.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                3D floating QR codes in AR space
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                No physical terminals needed
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Instant payment processing
              </li>
            </ul>
          </div>

          {/* Trailing AR Agents */}
          <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Trailing AR Payment Agents</h3>
            <p className="text-gray-300 mb-6">
              Personal agents that follow your device anywhere, providing always-ready payment terminals.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Agents follow your device
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Always-ready payment terminal
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Personalized payment experience
              </li>
            </ul>
          </div>
        </div>

        {/* Taxi Use Case */}
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Car className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Taxi Use Case: Device-Free Payments</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary payment system for moving vehicles with trailing AR agents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">1</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Driver's AR Agent</h4>
                    <p className="text-gray-300">Personal AR agent generates QR codes on demand</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">2</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Passenger Scans</h4>
                    <p className="text-gray-300">Scan AR QR code directly from trailing agent</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">3</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Blockchain Transaction</h4>
                    <p className="text-gray-300">Seamless payment processing in moving vehicles</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  No physical payment terminals needed
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Works in moving vehicles
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Instant payment confirmation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Reduced hardware costs
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Enhanced security
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Multi-Blockchain Support */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Multi-Blockchain Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <Coins className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">BlockDAG</h3>
              <p className="text-gray-400 text-sm">High-speed transactions with DAG technology</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <Coins className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Solana</h3>
              <p className="text-gray-400 text-sm">Fast and low-cost blockchain payments</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <Coins className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Morph</h3>
              <p className="text-gray-400 text-sm">Advanced Layer 2 scaling solution</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Payments?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the payment revolution with NeAR Pay's floating QR system and trailing AR agents.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 flex items-center mx-auto">
              Launch NeAR Pay
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearPaySection;