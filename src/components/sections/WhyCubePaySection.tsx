import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Store,
  Bot,
  Wallet,
  Shield,
  Zap,
  Globe,
  CreditCard,
  Code,
} from "lucide-react";
import VideoPlayer from "../VideoPlayer";

const WhyCubePaySection = () => {
  const videos = [
    {
      src: "/videos/cubepay/bank-qr-payment.mp4",
      title: "Bank QR Payments",
      description: "Use QR codes for instant bank payments",
    },
    {
      src: "/videos/cubepay/Virtual_Card_Contactless_Payment_Video.mp4",
      title: "Virtual Card Payments",
      description: "Contactless virtual card payment experience",
    },
    {
      src: "/videos/cubepay/AR_Agent_Discovery_Video_Generated.mp4",
      title: "AR Agent Discovery",
      description: "AI agents help discover payment options in AR",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Why Cube Pay?
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            One platform that serves users, merchants, and AI agents with
            revolutionary spatial payment technology
          </p>
        </div>

        {/* For Users */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Users className="w-12 h-12 text-green-400 mr-4" />
            <h2 className="text-4xl font-bold text-white">For Users</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Pay with Crypto or Fiat—No Need to Choose
                  </h3>
                  <p className="text-gray-300">
                    Seamlessly switch between crypto and traditional payments.
                    Use USDC, ETH, bank cards, or virtual cards—all from one
                    spatial interface. No app switching, no complexity.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    One App for Base, Solana, Ethereum, Hedera, and More
                  </h3>
                  <p className="text-gray-300">
                    Multi-chain payments made simple. Rotate the cube to access
                    any blockchain—automatic cross-chain routing handles the
                    complexity for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Voice Payments: Just Say "Pay $20 to the Coffee Shop"
                  </h3>
                  <p className="text-gray-300">
                    Natural language payment commands. No typing, no
                    tapping—just speak and pay. Voice AI understands amounts,
                    merchants, and payment methods automatically.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Easy Onboarding via Base App—No Seed Phrases
                  </h3>
                  <p className="text-gray-300">
                    Connect your Base wallet instantly or create a new one with
                    DEKS technology. No seed phrases to write down, no technical
                    knowledge required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* For Merchants */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Store className="w-12 h-12 text-blue-400 mr-4" />
            <h2 className="text-4xl font-bold text-white">For Merchants</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Accept Crypto and Fiat with One Integration
                  </h3>
                  <p className="text-gray-300">
                    One API integration handles all payment methods. Accept
                    Bitcoin, USDC, credit cards, bank transfers—customers
                    choose, you receive payment confirmation instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Card Details Never Touch Your Servers
                  </h3>
                  <p className="text-gray-300">
                    Virtual Terminal Interface means you never handle sensitive
                    card data. Massive PCI DSS scope reduction—lower compliance
                    costs, zero data breach liability.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Dynamic Pricing with Automatic Crypto-to-Fiat Conversion
                  </h3>
                  <p className="text-gray-300">
                    Set prices in your local currency—customers can pay with
                    crypto at real-time conversion rates. You receive fiat, they
                    pay with USDC. Everyone wins.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Virtual Terminal Interface for Secure, Compliant Payments
                  </h3>
                  <p className="text-gray-300">
                    Payment requests route to user terminals—not your servers.
                    Get confirmation tokens, not card numbers. Security by
                    architecture, not by afterthought.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* For AI Agents */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Bot className="w-12 h-12 text-purple-400 mr-4" />
            <h2 className="text-4xl font-bold text-white">For AI Agents</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Agentic Virtual Card (AVC) for Autonomous Payments
                  </h3>
                  <p className="text-gray-300">
                    AI agents get ephemeral payment cards with spending limits
                    and expiration rules. Authorize once, agent pays
                    autonomously within defined parameters.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    &lt;500ms Crypto-to-Fiat Conversion for Real-World Commerce
                  </h3>
                  <p className="text-gray-300">
                    Lightning-fast conversion enables agents to pay traditional
                    merchants with crypto. Agent sends USDC, merchant receives
                    fiat—all in under half a second.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Support for x402, Google A2P/A2A, OpenAI ACP Protocols
                  </h3>
                  <p className="text-gray-300">
                    Native integration with emerging agent payment standards.
                    Cube Pay speaks the language of autonomous commerce—HTTP
                    402, Agent-to-Person, Agent-to-Agent payments.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    HTLC Escrow for Trustless Agent-to-Agent Transactions
                  </h3>
                  <p className="text-gray-300">
                    Hash Time Locked Contracts enable agents to transact without
                    trust. Payment released only when conditions are
                    cryptographically proven—no intermediaries needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
            <Users className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Users Love It
            </h3>
            <p className="text-gray-300 mb-4">
              One app for all payments. Voice commands. Multi-chain support.
              Zero complexity.
            </p>
            <ul className="text-left space-y-2">
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                Crypto + fiat unified
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                Voice AI payments
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                No seed phrases (DEKS)
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
            <Store className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Merchants Win
            </h3>
            <p className="text-gray-300 mb-4">
              Accept everything. Protect customer data. Reduce compliance costs.
              Instant settlement.
            </p>
            <ul className="text-left space-y-2">
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                One API, all methods
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                PCI DSS scope reduction
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                Dynamic crypto pricing
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-8 text-center">
            <Bot className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Agents Thrive
            </h3>
            <p className="text-gray-300 mb-4">
              Autonomous payments. Protocol support. Trustless escrow.
              Real-world commerce.
            </p>
            <ul className="text-left space-y-2">
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                Agentic Virtual Cards
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                &lt;500ms conversion
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                HTLC escrow
              </li>
            </ul>
          </div>
        </div>

        {/* Video Demonstrations */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              See Why Users, Merchants & Agents Love CubePay
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch real demonstrations across all use cases
            </p>
          </div>
          <VideoPlayer videos={videos} className="max-w-6xl mx-auto" />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border border-green-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Payments?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're a user, merchant, or building AI agents—Cube Pay
              has you covered
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 flex items-center">
                Launch Cube Pay
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5">
                For Merchants
              </button>
              <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/5">
                For Developers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCubePaySection;
