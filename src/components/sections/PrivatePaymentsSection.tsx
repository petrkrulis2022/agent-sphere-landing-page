import React from "react";
import {
  Shield,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle,
  Wallet,
  Key,
  Globe,
  Zap,
} from "lucide-react";
import VideoPlayer from "../VideoPlayer";

const PrivatePaymentsSection = () => {
  const videos = [
    {
      src: "/videos/cubepay/E_shop_Payment_with_Virtual_Card.mp4",
      title: "E-shop Virtual Card Payment",
      description: "Shop online securely with virtual cards",
    },
    {
      src: "/videos/cubepay/AR_Payment_Video_Merchant_Onboarding.mp4",
      title: "Merchant Onboarding",
      description: "Easy merchant integration for private payments",
    },
    {
      src: "/videos/cubepay/Cube_Pay_Video_Generation_Use_Cases 3.mp4",
      title: "CubePay Use Cases",
      description: "Multiple privacy-focused payment scenarios",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-8">
            <Shield className="w-4 h-4 mr-2" />
            Virtual Terminal Interface
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent mb-6">
            Private Online Payments with Virtual Terminals
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your card details never touch merchant servers. Pay online using
            your own secure AR terminal—merchants only receive payment
            confirmation, not your sensitive data. True privacy without
            compromise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center">
              Start Private Payments
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5">
              Learn More
            </button>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Zero-Knowledge Proofs */}
          <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Zero-Knowledge Technology
            </h3>
            <p className="text-gray-300 mb-6">
              Prove you have funds without revealing your identity, balance, or
              transaction history. Complete anonymity guaranteed.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Anonymous transactions
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Hidden balances
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Private transaction history
              </li>
            </ul>
          </div>

          {/* Untraceable Payments */}
          <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-6">
              <EyeOff className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Completely Untraceable
            </h3>
            <p className="text-gray-300 mb-6">
              Advanced cryptographic mixing ensures your payment trail cannot be
              followed. True financial privacy in the digital age.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                Cryptographic mixing
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                No transaction linking
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                Stealth addresses
              </li>
            </ul>
          </div>

          {/* Instant & Secure */}
          <div className="bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Lightning Fast & Secure
            </h3>
            <p className="text-gray-300 mb-6">
              Enjoy instant private payments with bank-level security. Privacy
              doesn't mean compromising on speed or safety.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                Instant settlement
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                End-to-end encryption
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                Multi-signature security
              </li>
            </ul>
          </div>
        </div>

        {/* Privacy Features */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Advanced Privacy Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Military-grade privacy features ensure your financial activities
              remain completely confidential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 text-lg">
                  Hidden Transaction Amounts
                </h4>
                <p className="text-gray-300">
                  Transaction values are encrypted and only visible to sender
                  and receiver. No one else can see how much you're sending or
                  receiving.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Key className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 text-lg">
                  Private Keys, Private Life
                </h4>
                <p className="text-gray-300">
                  Your private keys never leave your device. Complete control
                  over your funds with no third-party access or surveillance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 text-lg">
                  Anonymous Wallet Addresses
                </h4>
                <p className="text-gray-300">
                  Generate unlimited stealth addresses that can't be linked to
                  your identity or other transactions. Fresh address for every
                  payment.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 text-lg">
                  Cross-Border Privacy
                </h4>
                <p className="text-gray-300">
                  Send and receive private payments globally without geographic
                  restrictions, KYC requirements, or surveillance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              How Private Payments Work
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your Virtual Terminal keeps your card details safe at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h4 className="text-white font-semibold mb-2">Shop Online</h4>
              <p className="text-gray-300 text-sm">
                Browse any e-commerce site that integrates Cube Pay's Virtual
                Terminal Interface
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h4 className="text-white font-semibold mb-2">
                Merchant Requests Payment
              </h4>
              <p className="text-gray-300 text-sm">
                At checkout, merchant sends a payment request to YOUR Virtual
                Terminal (not their server)
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h4 className="text-white font-semibold mb-2">
                Approve in Your AR Cube
              </h4>
              <p className="text-gray-300 text-sm">
                Review the amount and merchant details in your secure AR
                environment. Approve with one tap.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                4
              </div>
              <h4 className="text-white font-semibold mb-2">
                Payment Confirmed
              </h4>
              <p className="text-gray-300 text-sm">
                Merchant receives only a payment confirmation—never your card
                details. Order ships, you stay private.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Use Virtual Terminal Payments?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protection from data breaches, fraud, and privacy violations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3 text-lg">
                Protect Your Data
              </h3>
              <p className="text-gray-300 text-sm">
                Shop online without worrying about merchant data breaches. Your
                card details are never stored on vulnerable merchant servers.
              </p>
            </div>

            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3 text-lg">
                Business Privacy
              </h3>
              <p className="text-gray-300 text-sm">
                Keep supplier relationships and purchasing patterns
                confidential. Merchants see only what they need to fulfill
                orders.
              </p>
            </div>

            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3 text-lg">
                Reduce Fraud Risk
              </h3>
              <p className="text-gray-300 text-sm">
                Generate single-use Agentic Virtual Cards for online purchases.
                Even if a card number is compromised, it's already expired.
              </p>
            </div>
          </div>
        </div>

        {/* Video Demonstrations */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Private Payments in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how Virtual Terminal Interface protects your payment data
            </p>
          </div>
          <VideoPlayer videos={videos} className="max-w-6xl mx-auto" />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for Safer Online Payments?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the privacy revolution with Virtual Terminal technology. Your
              card details stay yours—merchants never see them.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center">
                Launch Virtual Terminal
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5">
                For Merchants
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivatePaymentsSection;
