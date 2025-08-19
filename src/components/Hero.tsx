import React from "react";
import { ArrowRight, Play, MapPin, Zap, Eye, Coins } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

const Hero = () => {
  // Home page video collection with uploaded videos
  const homeVideos = [
    {
      src: "/videos/home/AgentSphere_D_World_Building.mp4",
      title: "AgentSphere 3D World Building",
      description:
        "See how AgentSphere enables precise 3D world building and agent deployment",
    },
    {
      src: "/videos/home/AR_Agent_Interaction_and_Payment.mp4",
      title: "AR Agent Interaction & Payment",
      description:
        "Experience seamless AR agent interactions with integrated payment systems",
    },
    {
      src: "/videos/home/AR_World_Video_Ready.mp4",
      title: "AR World Experience",
      description:
        "Explore the complete AR world experience with location-based agents",
    },
    {
      src: "/videos/home/agents arqr merge 3 vids.mp4",
      title: "Complete AgentSphere AR Experience",
      description:
        "Comprehensive showcase of AgentSphere's AR QR payment and agent capabilities",
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
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            World's First Agentic Internet Platform
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Deploy Agents in
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              {" "}
              Your World
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Create, test, and experience location-based AI Agents through AR.
            Transform your school and community with personalized digital
            assistants.
          </p>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <MapPin className="w-8 h-8 text-green-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">
                1cm Precision GPS
              </h3>
              <p className="text-gray-400 text-sm">
                RTK enhanced positioning for exact agent placement
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <Eye className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">AR QR Payments</h3>
              <p className="text-gray-400 text-sm">
                World's first floating QR payment system
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <Coins className="w-8 h-8 text-yellow-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">
                Earn by Deploying
              </h3>
              <p className="text-gray-400 text-sm">
                Monetize your AI agent creations
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <Zap className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">
                Multi-Blockchain
              </h3>
              <p className="text-gray-400 text-sm">
                BlockDAG, Solana, Morph networks
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 flex items-center">
              Launch App
              <ArrowRight className="w-5 h-5 ml-2" />
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
                See AgentSphere in Action
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Watch how AgentSphere transforms the way we interact with AI
                through location-based AR experiences.
              </p>
            </div>
            <VideoPlayer videos={homeVideos} className="max-w-6xl mx-auto" />
          </div>

          {/* How It Works */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Deploy
                </h3>
                <p className="text-gray-400">
                  Choose the name & location for your agent
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Test</h3>
                <p className="text-gray-400">Test & Debug in AR preview mode</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Experience
                </h3>
                <p className="text-gray-400">
                  Live Experience with full AR interaction
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
