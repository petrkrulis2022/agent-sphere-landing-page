import React from 'react';
import { Users, Video, Shield, Coins, ArrowRight, CheckCircle, Camera, MessageSquare } from 'lucide-react';

const SocialARSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
            <Users className="w-4 h-4 mr-2" />
            Hybrid Social Network of Humans and Agents
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Social AR Network
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Bridge physical and digital worlds. Students deploy AI agents on campus for hybrid human-AI interactions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center">
              Join Network
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Campus Deployment */}
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Students Deploy AI Agents on Campus</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your campus into a hybrid social space where AI agents interact with students in real-world locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/20 rounded-xl p-6 text-center">
              <MessageSquare className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Study Buddy Agents</h3>
              <p className="text-gray-400 text-sm">AI tutors stationed in library locations</p>
            </div>
            <div className="bg-black/20 rounded-xl p-6 text-center">
              <Camera className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Event Photographers</h3>
              <p className="text-gray-400 text-sm">AI agents capturing campus moments</p>
            </div>
            <div className="bg-black/20 rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Safety Assistants</h3>
              <p className="text-gray-400 text-sm">Emergency response and guidance agents</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Hybrid Interactions */}
          <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Hybrid Human-AI Interactions</h3>
            <p className="text-gray-300 mb-6">
              Seamless conversations between students and AI agents in physical spaces, creating new forms of social interaction.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Natural conversation flow
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Context-aware responses
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Multi-modal communication
              </li>
            </ul>
          </div>

          {/* Live Streaming */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Live Streaming with Agent Takeover</h3>
            <p className="text-gray-300 mb-6">
              Stream your campus experiences while AI agents can take over to provide additional context and information.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Real-time streaming
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                AI commentary and insights
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Interactive viewer engagement
              </li>
            </ul>
          </div>
        </div>

        {/* Avatar Privacy */}
        <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Avatar-Based Privacy Protection</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Maintain your privacy while engaging socially through customizable avatars and controlled visibility settings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Privacy Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                  Customizable avatar appearance
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                  Selective information sharing
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                  Anonymous interaction modes
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                  Granular visibility controls
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Safety Measures</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                  Content moderation AI
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                  Harassment prevention
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                  Emergency alert system
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                  Community reporting tools
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Auras Currency */}
        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Coins className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Blockchain-Based Auras Currency</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Earn and spend Auras for social interactions, agent services, and premium features within the network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/20 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Earn Auras</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Deploy helpful agents</li>
                <li>• Positive interactions</li>
                <li>• Content creation</li>
                <li>• Community contributions</li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Spend Auras</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Premium agent features</li>
                <li>• Custom avatar items</li>
                <li>• Priority interactions</li>
                <li>• Exclusive events</li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Trade Auras</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Peer-to-peer transfers</li>
                <li>• Marketplace trading</li>
                <li>• Gift to friends</li>
                <li>• Charity donations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Join the Social AR Revolution</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with humans and AI agents in a new kind of social network that bridges physical and digital worlds.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center mx-auto">
              Launch Social AR
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialARSection;