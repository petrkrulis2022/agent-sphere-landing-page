import React from "react";
import { ArrowRight, CheckCircle, Box, Zap, Shield } from "lucide-react";
import VideoPlayer from "../VideoPlayer";

const HowItWorksSection = () => {
  const videos = [
    {
      src: "/videos/cubepay/AR_QR_Code_Generation_and_Payment.mp4",
      title: "QR Code Generation & Payment",
      description: "Generate and scan QR codes for instant AR payments",
    },
    {
      src: "/videos/cubepay/Crypto_Payment_Confirmation_in_AR.mp4",
      title: "Crypto Payment in AR",
      description: "Real-time crypto payment confirmation in augmented reality",
    },
    {
      src: "/videos/cubepay/AR_Payment_Journey_Video_Generation.mp4",
      title: "Complete Payment Journey",
      description: "From discovery to payment completion in AR",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            How Cube Pay Works
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionary spatial payment technology that transforms how you pay
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6">
              1
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Open Cube Pay
            </h3>
            <p className="text-gray-300">
              Launch the app or connect via Base App for instant onboarding
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6">
              2
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Choose Your Method
            </h3>
            <p className="text-gray-300">
              Rotate the AR cube to select: Crypto, Bank QR, Virtual Card, or
              Voice AI
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6">
              3
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Pay Instantly
            </h3>
            <p className="text-gray-300">
              Blockchain-verified payment with real-time confirmation. Works
              with any merchant.
            </p>
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Core Features
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* One Cube, All Payment Methods */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Box className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                One Cube, All Payment Methods
              </h3>
              <p className="text-gray-300 mb-6">
                Rotate the AR cube to choose: Cross-Chain Crypto, Bank QR,
                Virtual Card, Voice AI, Bitcoin, or Tap to Speak. No
                app-switching. No complexity.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  3D floating payment cubes
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Zero hardware requirements
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Instant transaction processing
                </li>
              </ul>
            </div>

            {/* Secure by Design */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Secure by Design
              </h3>
              <p className="text-gray-300 mb-6">
                Your card details never touch merchant servers.
                Blockchain-verified transactions. Cryptographic authorization
                for agent payments. Bank-level security, Web3 transparency.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Blockchain verification
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Encrypted transactions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  Immutable payment records
                </li>
              </ul>
            </div>

            {/* Instant Payments */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Instant Payments, Any Chain
              </h3>
              <p className="text-gray-300 mb-6">
                Cross-chain routing in seconds. Crypto-to-fiat conversion in
                &lt;500ms. Voice payments with natural language. Real-time
                confirmations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  Sub-second processing
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  Real-time confirmations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                  Optimized AR pipeline
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Video Demonstrations */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              See It in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch how Cube Pay simplifies payments across all methods
            </p>
          </div>
          <VideoPlayer videos={videos} className="max-w-6xl mx-auto" />
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands using Cube Pay for seamless spatial payments
            </p>
            <button className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 flex items-center mx-auto">
              Launch Cube Pay
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
