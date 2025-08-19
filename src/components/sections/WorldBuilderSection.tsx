import React from "react";
import {
  Globe,
  Coins,
  Building,
  Users,
  ArrowRight,
  CheckCircle,
  Zap,
  Play,
} from "lucide-react";
import VideoPlayer from "../VideoPlayer";

const WorldBuilderSection = () => {
  // Digital World Builder video collection
  const worldBuilderVideos = [
    {
      src: "/videos/digital-world-builder/AgentSphere_D_World_Building.mp4",
      title: "AgentSphere 3D World Building",
      description:
        "Complete overview of the 3D world building system and its capabilities",
    },
    {
      src: "/videos/digital-world-builder/Digital_Twin_for_Retail_Insights.mp4",
      title: "Digital Twin for Retail Insights",
      description:
        "How digital twins provide valuable insights for retail businesses",
    },
    {
      src: "/videos/digital-world-builder/Digital_Twins_Collaborative_Persistent_Decentralized.mp4",
      title: "Collaborative Persistent Digital Twins",
      description:
        "Decentralized approach to collaborative digital twin creation",
    },
  ];
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-8">
            <Globe className="w-4 h-4 mr-2" />
            Earn by Building 3D World
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Digital World Builder
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Scan and reconstruct environments in 3D. Create persistent digital
            twins and monetize your 3D mapping contributions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center">
              Start Building
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
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Play className="w-4 h-4 mr-2" />
              3D World Building Demonstrations
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              See World Building in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch how our AI-powered system creates detailed 3D
              reconstructions and collaborative digital twins.
            </p>
          </div>

          <VideoPlayer
            videos={worldBuilderVideos}
            className="max-w-6xl mx-auto"
          />
        </div>

        {/* Earning Opportunity */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Coins className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Earn by Building 3D World
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get rewarded for your contributions to the global 3D map. Every
              scan, every reconstruction, every digital twin you create earns
              you tokens.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-black/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                  $0.10
                </h3>
                <p className="text-white font-semibold mb-1">
                  Per Square Meter
                </p>
                <p className="text-gray-400 text-sm">Basic 3D reconstruction</p>
              </div>
              <div className="bg-black/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                  $0.25
                </h3>
                <p className="text-white font-semibold mb-1">
                  High-Detail Scan
                </p>
                <p className="text-gray-400 text-sm">Premium quality mapping</p>
              </div>
              <div className="bg-black/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                  $1.00
                </h3>
                <p className="text-white font-semibold mb-1">Digital Twin</p>
                <p className="text-gray-400 text-sm">
                  Complete environment replica
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* 3D Reconstruction */}
          <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              AI-Powered 3D Reconstruction
            </h3>
            <p className="text-gray-300 mb-6">
              Advanced AI agents scan and reconstruct environments with
              millimeter precision, creating detailed 3D models.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Real-time 3D scanning
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Millimeter precision mapping
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Automated mesh generation
              </li>
            </ul>
          </div>

          {/* Collaborative Building */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Collaborative World Building
            </h3>
            <p className="text-gray-300 mb-6">
              Work together with other builders to create comprehensive digital
              twins of entire neighborhoods and cities.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Multi-user collaboration
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Shared contribution rewards
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Quality verification system
              </li>
            </ul>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How Digital World Building Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Scan Environment
              </h3>
              <p className="text-gray-400">
                Use your device to scan real-world locations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                AI Processing
              </h3>
              <p className="text-gray-400">
                AI agents process and reconstruct 3D models
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Quality Check
              </h3>
              <p className="text-gray-400">
                Community verifies and validates your work
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Earn Rewards
              </h3>
              <p className="text-gray-400">
                Get paid for your 3D mapping contributions
              </p>
            </div>
          </div>
        </div>

        {/* Digital Twin Benefits */}
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Create Persistent Digital Twins
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build lasting digital replicas that serve as foundations for AR
              experiences, virtual meetings, and agent deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Use Cases</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <Zap className="w-5 h-5 text-green-400 mr-3" />
                  AR agent deployment locations
                </li>
                <li className="flex items-center text-gray-300">
                  <Zap className="w-5 h-5 text-green-400 mr-3" />
                  Virtual meeting spaces
                </li>
                <li className="flex items-center text-gray-300">
                  <Zap className="w-5 h-5 text-green-400 mr-3" />
                  Gaming and entertainment
                </li>
                <li className="flex items-center text-gray-300">
                  <Zap className="w-5 h-5 text-green-400 mr-3" />
                  Educational simulations
                </li>
                <li className="flex items-center text-gray-300">
                  <Zap className="w-5 h-5 text-green-400 mr-3" />
                  Real estate visualization
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Technology</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Decentralized 3D data storage
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Blockchain-verified ownership
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Cross-platform compatibility
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Real-time updates
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Persistent data integrity
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Building the Digital World
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of builders creating the foundation of the Agentic
              Internet. Start earning today.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center mx-auto">
              Launch World Builder
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldBuilderSection;
