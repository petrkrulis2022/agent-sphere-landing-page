import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Wallet,
  Shield,
  Zap,
  User,
} from "lucide-react";
import VideoPlayer from "../VideoPlayer";

const OnboardToCryptoSection = () => {
  const videos = [
    {
      src: "/videos/cubepay/Crypto_On_Off_Ramp_Video_Generation.mp4",
      title: "Crypto On/Off Ramp",
      description: "Seamlessly convert between crypto and fiat with ease",
    },
    {
      src: "/videos/cubepay/Crypto_On_Ramp_With_Virtual_Card.mp4",
      title: "Virtual Card Onboarding",
      description: "Buy crypto using virtual cards in one tap",
    },
    {
      src: "/videos/cubepay/AR_Bus_Agent_Video_Generation.mp4",
      title: "AR Agent Assistance",
      description: "AI agents guide you through your crypto journey",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
            <Wallet className="w-4 h-4 mr-2" />
            Simple Crypto Onboarding
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Onboard to Crypto
          </h1>

          <p className="text-2xl font-semibold text-gray-300 mb-4">
            Crypto Made Simple—No Seed Phrases, No Complexity
          </p>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your crypto journey with Cube Pay. Connect via Base App in
            seconds, or let us create a secure wallet for you—no technical
            knowledge required. Discover crypto payments naturally through our
            spatial AR interface.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center">
              Connect Base App
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5">
              Create Wallet
            </button>
            <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5">
              Watch Tutorial
            </button>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Instant Onboarding via Base App */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Connect Your Base Wallet in One Tap
            </h3>
            <p className="text-gray-300 mb-6">
              Already have a Base wallet? Connect it instantly and start using
              Cube Pay. Your existing crypto is ready to use across all payment
              methods—no setup, no hassle.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                One-tap Base App integration
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Use your existing wallet immediately
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Access all Cube Pay features instantly
              </li>
            </ul>
          </div>

          {/* No Seed Phrases with DEKS */}
          <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Create a Wallet Without the Complexity
            </h3>
            <p className="text-gray-300 mb-6">
              New to crypto? We use DEKS (Distributed Encrypted Key Shares) to
              create your wallet securely—no seed phrases to write down or lose.
              Your wallet is protected by advanced cryptography, but you don't
              need to understand it.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                No seed phrases to manage
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

          {/* Start with Familiar Payments */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Begin with What You Know
            </h3>
            <p className="text-gray-300 mb-6">
              Not ready for crypto yet? Start by using Cube Pay with traditional
              bank payments (Revolut QR, Virtual Cards). When you're ready,
              crypto options are just a cube rotation away—discover them at your
              own pace.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Start with bank QR or virtual cards
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Explore crypto when you're comfortable
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Gradual learning through spatial interface
              </li>
            </ul>
          </div>

          {/* Transparent Conversion */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Wallet className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              See Exactly What You're Paying
            </h3>
            <p className="text-gray-300 mb-6">
              When you use crypto for payments, Cube Pay shows real-time
              conversion rates before you confirm. No surprises, no hidden
              fees—just transparent pricing in your local currency.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                Real-time crypto-to-fiat rates
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                See total cost before confirming
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                No hidden conversion fees
              </li>
            </ul>
          </div>
        </div>

        {/* How Crypto Onboarding Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Your Journey from Web2 to Web3
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h4 className="text-white font-semibold mb-3">
                Choose Your Path
              </h4>
              <ul className="text-gray-300 text-sm space-y-2 text-left">
                <li>• Connect existing Base wallet (instant)</li>
                <li>• Create new wallet with DEKS (2 min)</li>
                <li>• Start with bank payments (no wallet)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h4 className="text-white font-semibold mb-3">
                Explore the Cube
              </h4>
              <p className="text-gray-300 text-sm">
                Rotate the AR cube to see all payment options. Crypto faces show
                real-time balances—no pressure to use them.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h4 className="text-white font-semibold mb-3">
                First Crypto Payment
              </h4>
              <p className="text-gray-300 text-sm">
                When comfortable, try a small crypto payment. Voice AI guides:
                "Send $5 USDC to the coffee shop on Base."
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                4
              </div>
              <h4 className="text-white font-semibold mb-3">
                Discover Multi-Chain
              </h4>
              <p className="text-gray-300 text-sm">
                Explore payments on Solana, Ethereum, Hedera, and more. Cube Pay
                handles cross-chain complexity automatically.
              </p>
            </div>
          </div>
        </div>

        {/* Video Demonstrations */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              See How Easy It Is
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch real users onboard to crypto in seconds with Cube Pay
            </p>
          </div>
          <VideoPlayer videos={videos} className="max-w-6xl mx-auto" />
        </div>

        {/* Why Onboard with Cube Pay */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Onboard with Cube Pay?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                For Complete Beginners
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>No technical jargon—just simple payment options</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    Start with familiar bank payments, explore crypto later
                  </span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Voice AI guides you through every step</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                For Crypto-Curious
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Connect your Base wallet and start immediately</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <span>See crypto and fiat side-by-side in one interface</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    Transparent conversion rates before every transaction
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                For Multi-Chain Users
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    One interface for Base, Solana, Ethereum, Hedera, Starknet
                  </span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Automatic cross-chain routing—no manual bridging</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    Voice payments across all chains with natural language
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Discover Crypto?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands who started their crypto journey with Cube Pay. No
              complexity, no confusion—just simple, spatial payments that work
              for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center">
                Connect Base App
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5">
                Create Wallet
              </button>
              <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5">
                Watch How It Works
              </button>
            </div>
            <div className="mt-8 text-gray-400 space-y-2">
              <p>
                <strong className="text-white">Already have crypto?</strong>{" "}
                Connect your Base wallet and start using Cube Pay in seconds.
              </p>
              <p>
                <strong className="text-white">New to crypto?</strong> Create a
                secure wallet with DEKS—no seed phrases, no stress.
              </p>
              <p>
                <strong className="text-white">Not ready yet?</strong> Start
                with bank payments and explore crypto when you're comfortable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardToCryptoSection;
