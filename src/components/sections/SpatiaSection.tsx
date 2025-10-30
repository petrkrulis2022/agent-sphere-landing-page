import React from "react";
import {
  Building2,
  Wallet,
  CreditCard,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Shield,
  Globe,
  TrendingUp,
} from "lucide-react";

const SpatialSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
            <Building2 className="w-4 h-4 mr-2" />
            Next-Generation AR Banking
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Spatial Bank
          </h1>
          <p className="text-2xl font-semibold text-gray-300 mb-8">
            Your AR Banking Experience
          </p>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience banking reimagined in augmented reality. Access your
            accounts, make transactions, and manage finances through immersive
            AR interfaces anywhere in the world.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center">
              Open Spatial Bank Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5">
              Explore Features
            </button>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* AR Banking Interface */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Immersive AR Banking
            </h3>
            <p className="text-gray-300 mb-6">
              Interact with your finances through stunning 3D visualizations and
              spatial interfaces that make banking intuitive and engaging.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                3D account visualization
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Spatial transaction history
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Gesture-based controls
              </li>
            </ul>
          </div>

          {/* Spatial Wallet */}
          <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
              <Wallet className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Multi-Currency AR Wallet
            </h3>
            <p className="text-gray-300 mb-6">
              Manage traditional currencies and cryptocurrencies in one unified
              AR wallet. Switch between assets with simple gestures.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Fiat & crypto support
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Real-time exchange rates
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Instant currency conversion
              </li>
            </ul>
          </div>

          {/* Security */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Bank-Grade Security
            </h3>
            <p className="text-gray-300 mb-6">
              Protected by advanced encryption, biometric authentication, and
              blockchain verification. Your assets are always secure.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Biometric authentication
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                End-to-end encryption
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Blockchain verification
              </li>
            </ul>
          </div>
        </div>

        {/* AR Banking Features */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Revolutionary AR Banking Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Banking reimagined for the spatial computing era
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 text-lg">
                  Global AR ATM Network
                </h4>
                <p className="text-gray-300">
                  Access virtual ATMs anywhere in the world through AR. Withdraw
                  cash or crypto at any location with Spatial Bank presence.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 text-lg">
                  AR Investment Dashboard
                </h4>
                <p className="text-gray-300">
                  Visualize your portfolio in 3D. Track stocks, crypto, and
                  assets with interactive AR charts and real-time market data.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 text-lg">
                  Spatial Payment Cards
                </h4>
                <p className="text-gray-300">
                  Generate virtual payment cards in AR space. No physical card
                  needed - just project your card when you need it.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 text-lg">
                  Virtual Branch Access
                </h4>
                <p className="text-gray-300">
                  Visit Spatial Bank branches in AR from anywhere. Speak with AI
                  advisors and access full banking services virtually.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Banking Made Simple with AR
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Open your Spatial Bank account and start banking in augmented
              reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h4 className="text-white font-semibold mb-2">
                Download Spatial Bank
              </h4>
              <p className="text-gray-300 text-sm">
                Get the Spatial Bank AR Banking app on your device
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h4 className="text-white font-semibold mb-2">Create Account</h4>
              <p className="text-gray-300 text-sm">
                Quick verification with biometric setup
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h4 className="text-white font-semibold mb-2">Enter AR Mode</h4>
              <p className="text-gray-300 text-sm">
                Launch AR interface and see your finances in 3D
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                4
              </div>
              <h4 className="text-white font-semibold mb-2">Start Banking</h4>
              <p className="text-gray-300 text-sm">
                Manage accounts, pay, invest - all in AR
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for AR Banking?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands already banking in augmented reality with Spatial
              Bank.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center mx-auto">
              Open Your Spatial Bank Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpatialSection;
