import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Link as LinkIcon,
  Shield,
  Zap,
} from "lucide-react";
import VideoPlayer from "../VideoPlayer";

const BaseAppIntegrationSection = () => {
  const videos = [
    {
      src: "/videos/cubepay/AR_Ticket_Confirmation_and_Payment.mp4",
      title: "AR Ticket Payment",
      description: "Buy tickets with instant AR confirmation",
    },
    {
      src: "/videos/cubepay/Hotel_Payment_and_Booking_Confirmation_Video (1).mp4",
      title: "Hotel Booking & Payment",
      description: "Complete hotel bookings with secure payments",
    },
    {
      src: "/videos/cubepay/AR_QR_Payment_Video_Storyboard.mp4",
      title: "QR Payment Flow",
      description: "Step-by-step QR code payment process",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
            <LinkIcon className="w-4 h-4 mr-2" />
            Seamless Integration
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Seamless Onboarding with Base App
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Already on Base? Connect your wallet in one tap and start using Cube
            Pay instantly. New to crypto? Base App makes wallet creation
            effortless—no seed phrases, no complexity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center">
              Connect Base App
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5">
              Learn More
            </button>
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* One-Tap Connection */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              One-Tap Connection
            </h3>
            <p className="text-gray-300 mb-6">
              Connect your existing Base wallet instantly. Your crypto is ready
              to use across all Cube Pay payment methods—no setup required.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Instant wallet connection
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Use existing Base balance immediately
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Access all payment features
              </li>
            </ul>
          </div>

          {/* Built on Base Infrastructure */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Built on Base Infrastructure
            </h3>
            <p className="text-gray-300 mb-6">
              Cube Pay leverages Base's secure wallet infrastructure and
              ecosystem. Your Base wallet works seamlessly with our spatial
              payment terminal.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                Base-native integration
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                Shared security standards
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                Access to Base ecosystem
              </li>
            </ul>
          </div>

          {/* Easy Onboarding */}
          <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
              <LinkIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Easy Onboarding for Newcomers
            </h3>
            <p className="text-gray-300 mb-6">
              Don't have a Base wallet? Create one through Base App with DEKS
              technology—no seed phrases to manage, just secure, simple wallet
              creation.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                No seed phrase complexity
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Automatic secure backup
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Recovery without technical knowledge
              </li>
            </ul>
          </div>
        </div>

        {/* How Base App Integration Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              How Base App Integration Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three simple steps to connect and start paying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Visit Cube Pay
              </h3>
              <p className="text-gray-300">
                Open Cube Pay and select "Connect Base App"
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Authorize Connection
              </h3>
              <p className="text-gray-300">
                Base App prompts you to authorize Cube Pay (one tap)
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Start Paying
              </h3>
              <p className="text-gray-300">
                Your Base wallet is connected—rotate the cube and pay instantly
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-lg">
              <strong className="text-white">For new users:</strong> Base App
              guides you through wallet creation first, then connects to Cube
              Pay automatically.
            </p>
          </div>
        </div>

        {/* Why Base App + Cube Pay */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Base App + Cube Pay?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The perfect combination of security, simplicity, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">For Base Users</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    Use your Base wallet across all payment methods (crypto,
                    fiat, voice)
                  </span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    Spatial interface makes multi-chain payments intuitive
                  </span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    Access Cube Pay features without creating new accounts
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                For Cube Pay Users
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Tap into Base's secure wallet infrastructure</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Join the Base ecosystem and community</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Seamless onboarding reduces friction to near-zero</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Together</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                One wallet, one interface, unlimited payment possibilities. Base
                App provides the foundation, Cube Pay provides the spatial
                experience.
              </p>
              <div className="bg-white/5 rounded-xl p-4 mt-4">
                <p className="text-white font-semibold">The Result:</p>
                <p className="text-gray-300">
                  Fastest, simplest crypto payment experience ever created
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Demonstrations */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              See Base App Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch how easy it is to get started with CubePay
            </p>
          </div>
          <VideoPlayer videos={videos} className="max-w-6xl mx-auto" />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Connect Your Base Wallet Now
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the spatial payment revolution. One tap to connect, instant
              access to all features.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center">
                Connect Base App
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5">
                Create Base Wallet
              </button>
              <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5">
                Watch Tutorial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseAppIntegrationSection;
