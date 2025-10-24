import React from "react";
import {
  Box,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Play,
  Lock,
  Zap,
} from "lucide-react";
import VideoPlayer from "../VideoPlayer";

const CubePaySection = () => {
  // Cube Pay video collection (using existing near-pay videos)
  const cubePayVideos = [
    {
      src: "/videos/near-pay/AR_Agent_Payment_Video_Ready.mp4",
      title: "Cube Pay AR Payment System",
      description:
        "Experience seamless spatial payments with Cube Pay's AR terminal technology",
    },
    {
      src: "/videos/near-pay/AR_Pay_D_Cube_Crypto_Demo.mp4",
      title: "D-Cube Crypto Payment Demo",
      description:
        "Revolutionary 3D cube interface for cryptocurrency payments through AR",
    },
    {
      src: "/videos/near-pay/AR_QR_Code_Generation_and_Payment.mp4",
      title: "AR QR Code Generation",
      description:
        "Dynamic QR code generation and payment processing in augmented reality",
    },
    {
      src: "/videos/near-pay/AR_QR_Code_Payment_Demonstration.mp4",
      title: "AR QR Payment Demo",
      description: "Complete demonstration of Cube Pay AR payment workflow",
    },
    {
      src: "/videos/near-pay/AR_QR_Payment_Video_Storyboard.mp4",
      title: "AR Payment Storyboard",
      description:
        "Step-by-step visualization of the Cube Pay AR payment process",
    },
    {
      src: "/videos/near-pay/AR_Restaurant_Payment_Confirmation.mp4",
      title: "Restaurant Payment Experience",
      description:
        "Cube Pay AR payment confirmation for restaurant transactions",
    },
    {
      src: "/videos/near-pay/Bitcoin_Lightning_Payment_AR_Video (1).mp4",
      title: "Bitcoin Lightning Payments",
      description:
        "Lightning-fast Bitcoin payments through Cube Pay AR interface",
    },
    {
      src: "/videos/near-pay/Crypto_Lifestyle_AR_Payment_Video.mp4",
      title: "Crypto Lifestyle Payments",
      description:
        "Integration of cryptocurrency payments into daily lifestyle with Cube Pay",
    },
    {
      src: "/videos/near-pay/Futuristic_QR_Code_Payment_Video.mp4",
      title: "Futuristic QR Payments",
      description:
        "Next-generation QR code payment technology powered by Cube Pay",
    },
    {
      src: "/videos/near-pay/Hedera_AR_Payment_Commuter_Experience.mp4",
      title: "Hedera Commuter Payments",
      description: "Seamless AR payments for commuters using Hedera blockchain",
    },
    {
      src: "/videos/near-pay/Multi_Agent_Blockchain_Payments.mp4",
      title: "Multi-Blockchain Payment System",
      description:
        "Cube Pay supports multiple blockchain payment networks simultaneously",
    },
    {
      src: "/videos/near-pay/Seamless_AR_Payment_Experience.mp4",
      title: "Seamless AR Experience",
      description:
        "Effortless payment experience through Cube Pay's advanced AR technology",
    },
    {
      src: "/videos/near-pay/Virtual_Card_Payment_AR_Showcase.mp4",
      title: "Virtual Card AR Showcase",
      description:
        "Virtual payment cards rendered in augmented reality via Cube Pay",
    },
    {
      src: "/videos/near-pay/taxi 1.mp4",
      title: "Mobile Payment Demo 1",
      description:
        "Cube Pay AR payment system demonstration in mobile environments",
    },
    {
      src: "/videos/near-pay/taxi 3.mp4",
      title: "Mobile Payment Demo 2",
      description:
        "Advanced mobile payment scenarios using Cube Pay AR technology",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-8">
            <Box className="w-4 h-4 mr-2" />
            Spatial Virtual Terminal Technology
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Cube Pay
          </h1>
          <p className="text-2xl font-semibold text-gray-300 mb-8">
            Spatial Virtual Terminal
          </p>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            World's first spatial payment terminal system. Experience secure,
            instant payments through AR technology with floating 3D payment
            cubes and virtual terminals anywhere, anytime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 flex items-center">
              Launch Cube Pay
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Video Player Section */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              <Play className="w-4 h-4 mr-2" />
              Interactive Video Demonstrations
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Cube Pay in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our revolutionary spatial payment terminal through
              comprehensive video demonstrations. Watch real-world applications
              of AR payment technology.
            </p>
          </div>

          <VideoPlayer videos={cubePayVideos} className="max-w-6xl mx-auto" />
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Spatial Virtual Terminal */}
          <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
              <Box className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              3D Payment Cubes
            </h3>
            <p className="text-gray-300 mb-6">
              Floating 3D payment terminals in AR space. No physical hardware
              needed - just scan and pay instantly.
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

          {/* Security */}
          <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Secured by Blockchain
            </h3>
            <p className="text-gray-300 mb-6">
              Enterprise-grade security powered by blockchain technology. Every
              transaction is verified and immutable.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Blockchain verification
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Encrypted transactions
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Immutable payment records
              </li>
            </ul>
          </div>

          {/* Speed */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Lightning Fast
            </h3>
            <p className="text-gray-300 mb-6">
              Process payments in milliseconds with our optimized AR payment
              pipeline. No delays, no waiting.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Sub-second processing
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Real-time confirmations
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Optimized AR pipeline
              </li>
            </ul>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              How Cube Pay Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary spatial payment technology that transforms how you
              pay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h4 className="text-white font-semibold mb-2 text-lg">
                Open Cube Pay AR
              </h4>
              <p className="text-gray-300">
                Launch the app and point your camera at any payment location
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h4 className="text-white font-semibold mb-2 text-lg">
                Scan 3D Payment Cube
              </h4>
              <p className="text-gray-300">
                Virtual payment terminal appears as a floating 3D cube in AR
                space
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h4 className="text-white font-semibold mb-2 text-lg">
                Confirm & Pay
              </h4>
              <p className="text-gray-300">
                Instant blockchain-verified payment with real-time confirmation
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for the Future of Payments?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the payment revolution with Cube Pay's spatial virtual
              terminal technology.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 flex items-center mx-auto">
              Launch Cube Pay Terminal
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CubePaySection;
