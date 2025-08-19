import React from "react";
import {
  Ghost,
  Brain,
  Eye,
  Heart,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Shield,
  Play,
} from "lucide-react";
import VideoPlayer from "../VideoPlayer";

const MyGhostSection = () => {
  // My Ghost video collection
  const myGhostVideos = [
    {
      src: "/src/assets/videos/my-ghost/AI_Companion_AR_Experience.mp4",
      title: "AI Companion AR Experience",
      description:
        "Experience your personal AI companion in augmented reality environments",
    },
    {
      src: "/src/assets/videos/my-ghost/AI_Ghost_Companion_Video_Ready.mp4",
      title: "AI Ghost Companion Overview",
      description:
        "Complete overview of the AI Ghost companion system and features",
    },
    {
      src: "/src/assets/videos/my-ghost/AI_Ghost_Offers_Emotional_Support.mp4",
      title: "Emotional Support Features",
      description:
        "How your AI Ghost provides emotional support and companionship",
    },
    {
      src: "/src/assets/videos/my-ghost/AI_Ghost_Video_Confirmation.mp4",
      title: "AI Ghost Confirmation System",
      description:
        "Interactive confirmation and response system of your AI Ghost",
    },
    {
      src: "/src/assets/videos/my-ghost/AI_Ghost_Video_Ready.mp4",
      title: "AI Ghost Ready for Interaction",
      description: "Your AI Ghost ready for daily interactions and assistance",
    },
    {
      src: "/src/assets/videos/my-ghost/AR_Ghost_Video_Ready.mp4",
      title: "AR Ghost in Action",
      description: "See your AR Ghost in real-world environments and scenarios",
    },
    {
      src: "/src/assets/videos/my-ghost/AgentSphere_The_Agentic_Internet (1).mp4",
      title: "AgentSphere Agentic Internet",
      description:
        "Understanding the broader AgentSphere ecosystem and agentic internet",
    },
    {
      src: "/src/assets/videos/my-ghost/Video_Ready_Adaptive_Assistance.mp4",
      title: "Adaptive Assistance Features",
      description: "How your Ghost adapts to provide personalized assistance",
    },
    {
      src: "/src/assets/videos/my-ghost/Video_Style_Guidelines_and_Generation.mp4",
      title: "Style Guidelines and Generation",
      description:
        "Customizing your Ghost's appearance and behavior preferences",
    },
  ];
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-8">
            <Ghost className="w-4 h-4 mr-2" />
            Personal AI Companion
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My Ghost
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Persistent AR companion that follows you, learns from your
            interactions, and provides personalized assistance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25 flex items-center">
              Get My Ghost
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
            <div className="inline-flex items-center px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-6">
              <Play className="w-4 h-4 mr-2" />
              AI Ghost Demonstrations
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              My Ghost in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch how My Ghost learns, adapts, and provides personalized
              assistance in various real-world scenarios.
            </p>
          </div>

          <VideoPlayer videos={myGhostVideos} className="max-w-6xl mx-auto" />
        </div>

        {/* Persistent Companion */}
        <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Ghost className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Your Persistent AR Companion
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My Ghost is always with you, learning from your daily interactions
              and environment to become the perfect personal assistant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/20 rounded-xl p-6 text-center">
              <Eye className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Always Visible</h3>
              <p className="text-gray-400 text-sm">
                See your Ghost through your mobile device camera
              </p>
            </div>
            <div className="bg-black/20 rounded-xl p-6 text-center">
              <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">
                Continuously Learning
              </h3>
              <p className="text-gray-400 text-sm">
                Adapts to your preferences and habits
              </p>
            </div>
            <div className="bg-black/20 rounded-xl p-6 text-center">
              <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">
                Emotionally Aware
              </h3>
              <p className="text-gray-400 text-sm">
                Responds to your mood and emotional state
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Learning Capabilities */}
          <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Learns from Interactions & Environment
            </h3>
            <p className="text-gray-300 mb-6">
              Your Ghost observes your daily routines, preferences, and
              environment to provide increasingly personalized assistance.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Daily routine recognition
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Preference learning
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Environmental awareness
              </li>
            </ul>
          </div>

          {/* Mobile Integration */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Visible Through Mobile Device Camera
            </h3>
            <p className="text-gray-300 mb-6">
              See and interact with your Ghost through your smartphone or tablet
              camera, making it a natural part of your daily life.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                AR camera integration
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Real-time rendering
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Cross-platform compatibility
              </li>
            </ul>
          </div>
        </div>

        {/* Personalized Assistance */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Personalized Assistance Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">📅</span>
              </div>
              <h3 className="text-white font-semibold mb-2">
                Schedule Management
              </h3>
              <p className="text-gray-400 text-sm">
                Reminds you of appointments and important events
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">🗺️</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Navigation Help</h3>
              <p className="text-gray-400 text-sm">
                Guides you to destinations and suggests routes
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">💡</span>
              </div>
              <h3 className="text-white font-semibold mb-2">
                Smart Suggestions
              </h3>
              <p className="text-gray-400 text-sm">
                Recommends activities based on your interests
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">🤝</span>
              </div>
              <h3 className="text-white font-semibold mb-2">
                Emotional Support
              </h3>
              <p className="text-gray-400 text-sm">
                Provides companionship and emotional assistance
              </p>
            </div>
          </div>
        </div>

        {/* User Control */}
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              User-Controlled Visibility & Behavior
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You have complete control over when and how your Ghost appears,
              ensuring privacy and comfort in all situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Visibility Controls
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Public, private, or invisible modes
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Location-based visibility rules
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Time-based appearance schedules
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Quick toggle on/off
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Behavior Settings
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Personality customization
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Interaction frequency control
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Learning rate adjustment
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Privacy level settings
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Adaptive Learning */}
        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Adaptive Learning Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your Ghost becomes more helpful over time, learning from every
              interaction to better understand and assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Observe</h3>
              <p className="text-gray-400">
                Watches your daily patterns and interactions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Learn</h3>
              <p className="text-gray-400">
                Processes information to understand preferences
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Adapt</h3>
              <p className="text-gray-400">
                Adjusts behavior to better serve your needs
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Your Personal AI Companion
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the future of personal assistance with My Ghost - your
              intelligent, adaptive AR companion.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25 flex items-center mx-auto">
              Launch My Ghost
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyGhostSection;
