import React from "react";
import {
  ArrowRight,
  Play,
  Box,
  Zap,
  Shield,
  Lock,
  CreditCard,
} from "lucide-react";
import VideoPlayer from "./VideoPlayer";

const Hero = () => {
  // Home page video collection with uploaded videos
  const homeVideos = [
    {
      src: "/videos/cubepay/d-cube-crypto-payment.mp4",
      title: "CubePay 3D Spatial Terminal",
      description:
        "See how CubePay enables precise spatial payment terminals in AR",
    },
    {
      src: "/videos/cubepay/Seamless_AR_Payment_Experience.mp4",
      title: "Seamless AR Payment Experience",
      description: "Experience seamless AR payment interactions with CubePay",
    },
    {
      src: "/videos/cubepay/AR_Agent_Payment_Video_Ready.mp4",
      title: "AR Agent Payment Flow",
      description: "AI agents facilitate smooth AR payment transactions",
    },
    {
      src: "/videos/cubepay/Futuristic_QR_Code_Payment_Video.mp4",
      title: "Futuristic QR Payment",
      description: "Next-generation QR code payment experience",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-8">
            <Box className="w-4 h-4 mr-2" />
            World's First Spatial Payment Terminal Platform
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            World's First
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Spatial Payment Terminal
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Pay with crypto, fiat, or voice—all from one AR cube. No wallet
            switching. No complexity. Just rotate, select, and pay. Your ticket
            to Spatia Bank.
          </p>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <Box className="w-8 h-8 text-green-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">
                3D Payment Cubes
              </h3>
              <p className="text-gray-400 text-sm">
                Floating spatial terminals in augmented reality
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <CreditCard className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">AR QR Payments</h3>
              <p className="text-gray-400 text-sm">
                Instant scanning and payment processing
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <Lock className="w-8 h-8 text-yellow-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">
                Blockchain Security
              </h3>
              <p className="text-gray-400 text-sm">
                Enterprise-grade payment protection
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <Zap className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-400 text-sm">
                Sub-second transaction processing
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#linktree"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "linktree";
                window.dispatchEvent(new HashChangeEvent("hashchange"));
              }}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 flex items-center"
            >
              Launch Cube Pay
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5 flex items-center">
              Connect Base App
            </button>
            <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5 flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>

          {/* Video Player Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                See CubePay in Action
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Watch how CubePay transforms payments through revolutionary
                spatial AR payment terminals.
              </p>
            </div>
            <VideoPlayer videos={homeVideos} className="max-w-6xl mx-auto" />

            {/* cube-pay.base.eth Banner */}
            <div className="mt-12 flex justify-center">
              <img
                src="/images/cubepay/cube-pay-base-eth.jpeg"
                alt="cube-pay.base.eth"
                className="h-16 md:h-20 object-contain rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Open CubePay
                </h3>
                <p className="text-gray-400">
                  Launch the app and point camera at payment location
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Scan Cube
                </h3>
                <p className="text-gray-400">
                  3D payment terminal appears in AR
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Pay Instantly
                </h3>
                <p className="text-gray-400">
                  Secure blockchain-verified payment in seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
