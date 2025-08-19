import React from "react";
import {
  Shield,
  Camera,
  Wifi,
  Brain,
  ArrowRight,
  CheckCircle,
  Home,
  AlertTriangle,
  Image,
} from "lucide-react";
import ImageGallery from "../ImageGallery";

const HomeSecuritySection = () => {
  // Home Security image collection
  const homeSecurityImages = [
    {
      src: "/videos/home-security/home_security_system_1.png",
      title: "Comprehensive Home Security Overview",
      description:
        "Complete multi-agent security system protecting all areas of your home",
    },
    {
      src: "/videos/home-security/home_security_system_2.png",
      title: "Agent Network Deployment",
      description:
        "Strategic placement of security agents throughout your property",
    },
    {
      src: "/videos/home-security/home_security_system_3.png",
      title: "Integrated Security Dashboard",
      description:
        "Central command interface for monitoring all security agents",
    },
    {
      src: "/videos/home-security/Gemini_Generated_Image_51kdni51kdni51kd.png",
      title: "Advanced Security Visualization",
      description:
        "AI-powered security monitoring and threat detection systems",
    },
  ];
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-8">
            <Shield className="w-4 h-4 mr-2" />
            Multi-Agent Security System
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Home Security
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Distributed agent network throughout your home with central
            coordination and smart device integration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 flex items-center">
              Secure Home
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
              <Image className="w-4 h-4 mr-2" />
              Security System Visualizations
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Home Security Systems
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our advanced multi-agent security systems and see how they
              protect your home with intelligent monitoring.
            </p>
          </div>

          <ImageGallery
            images={homeSecurityImages}
            className="max-w-6xl mx-auto"
          />
        </div>

        {/* Distributed Network */}
        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Home className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Distributed Agent Network Throughout Home
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deploy intelligent security agents in every room, creating a
              comprehensive protection network that adapts to your home's unique
              layout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-black/20 rounded-xl p-6 text-center">
              <Camera className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">
                Living Room Agent
              </h3>
              <p className="text-gray-400 text-sm">
                Main area monitoring and visitor detection
              </p>
            </div>
            <div className="bg-black/20 rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">
                Entry Point Agent
              </h3>
              <p className="text-gray-400 text-sm">
                Door and window security monitoring
              </p>
            </div>
            <div className="bg-black/20 rounded-xl p-6 text-center">
              <Wifi className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Perimeter Agent</h3>
              <p className="text-gray-400 text-sm">
                Outdoor surveillance and early warning
              </p>
            </div>
            <div className="bg-black/20 rounded-xl p-6 text-center">
              <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Central Manager</h3>
              <p className="text-gray-400 text-sm">
                Coordinates all agents and responses
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Central Coordination */}
          <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Central Manager Agent Coordination
            </h3>
            <p className="text-gray-300 mb-6">
              A master AI agent coordinates all security agents, analyzing
              patterns and orchestrating responses across your entire home.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Real-time agent communication
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Centralized threat analysis
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                Coordinated response protocols
              </li>
            </ul>
          </div>

          {/* Smart Integration */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Camera, Sensor & Smart Device Integration
            </h3>
            <p className="text-gray-300 mb-6">
              Seamlessly integrates with existing security cameras, motion
              sensors, and smart home devices for comprehensive protection.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Multi-camera coordination
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Motion and door sensors
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                Smart lock integration
              </li>
            </ul>
          </div>
        </div>

        {/* Threat Assessment */}
        <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Real-Time Threat Assessment
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI analyzes multiple data streams to identify genuine
              threats and minimize false alarms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Detection Capabilities
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                  Intruder identification
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                  Unusual activity patterns
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                  Environmental hazards
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                  Emergency situations
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Response Actions
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                  Instant mobile alerts
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                  Emergency service contact
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                  Automated security measures
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-3" />
                  Evidence collection
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Adaptive Learning */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Adaptive Learning from Patterns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Pattern Recognition
              </h3>
              <p className="text-gray-400">
                Learns your family's daily routines, visitor patterns, and
                normal household activities to distinguish between normal and
                suspicious behavior.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                False Alarm Reduction
              </h3>
              <p className="text-gray-400">
                Continuously improves accuracy by learning from false positives,
                reducing unnecessary alerts while maintaining security
                effectiveness.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Predictive Security
              </h3>
              <p className="text-gray-400">
                Anticipates potential security risks based on learned patterns
                and environmental factors, enabling proactive protection
                measures.
              </p>
            </div>
          </div>
        </div>

        {/* Smart Device Integration */}
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Smart Device Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Works seamlessly with your existing smart home ecosystem to create
              a unified security experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-black/20 rounded-xl p-4 text-center">
              <h4 className="text-white font-semibold mb-1">Smart Locks</h4>
              <p className="text-gray-400 text-xs">
                Automated locking/unlocking
              </p>
            </div>
            <div className="bg-black/20 rounded-xl p-4 text-center">
              <h4 className="text-white font-semibold mb-1">Lighting</h4>
              <p className="text-gray-400 text-xs">
                Automated lighting control
              </p>
            </div>
            <div className="bg-black/20 rounded-xl p-4 text-center">
              <h4 className="text-white font-semibold mb-1">Thermostats</h4>
              <p className="text-gray-400 text-xs">Climate-based alerts</p>
            </div>
            <div className="bg-black/20 rounded-xl p-4 text-center">
              <h4 className="text-white font-semibold mb-1">Speakers</h4>
              <p className="text-gray-400 text-xs">
                Audio alerts and deterrents
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Secure Your Home with AI Agents
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Deploy an intelligent, adaptive security network that learns and
              evolves to protect what matters most.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 flex items-center mx-auto">
              Launch Home Security
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSecuritySection;
