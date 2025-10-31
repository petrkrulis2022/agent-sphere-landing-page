import { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";

const DeckSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSpecial, setShowSpecial] = useState(false);

  useEffect(() => {
    // Flicker between "Spatial" and "Special" every 3 seconds for 500ms
    const interval = setInterval(() => {
      setShowSpecial(true);
      setTimeout(() => {
        setShowSpecial(false);
      }, 500); // Show "Special" for 500ms
    }, 3000); // Every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "Spatial - Your Augmented FinApp",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <h2
            className={`text-8xl font-bold mb-4 transition-all duration-300 ${
              showSpecial
                ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent italic -rotate-3 scale-110"
                : "bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
            }`}
          >
            {showSpecial ? "Special" : "Spatial"}
          </h2>
          <p className="text-3xl text-gray-300 mb-8">Your Augmented FinApp</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-5xl mb-2">💎</div>
              <p className="text-sm">Enter Spatial Bank</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">🌐</div>
              <p className="text-sm">AgentSphere</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">📱</div>
              <p className="text-sm">AR Viewer</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">⚡</div>
              <p className="text-sm">CubePay</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "World's First Spatial Payment Terminal Platform",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-6xl md:text-7xl font-bold mb-4">
              <span className="text-white">World's First </span>
              <span
                className={`transition-all duration-300 ${
                  showSpecial
                    ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent italic -rotate-3 scale-110 inline-block"
                    : "bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent inline-block"
                }`}
              >
                {showSpecial ? "Special" : "Spatial"}
              </span>
              <span className="text-white"> Payment</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Terminal
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Pay with crypto, fiat, or voice—all from one AR cube. No wallet
              switching. No complexity. Just rotate, select, and pay. Your
              ticket to Spatial Bank.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 w-full max-w-5xl">
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-950/30 p-6 rounded-xl border border-green-500/20 text-center">
              <div className="text-5xl mb-3">📦</div>
              <h3 className="text-lg font-bold mb-2 text-green-400">
                3D Payment Cubes
              </h3>
              <p className="text-sm text-gray-400">
                Floating spatial terminals in augmented reality
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-950/30 p-6 rounded-xl border border-purple-500/20 text-center">
              <div className="text-5xl mb-3">💳</div>
              <h3 className="text-lg font-bold mb-2 text-purple-400">
                AR QR Payments
              </h3>
              <p className="text-sm text-gray-400">
                Instant scanning and payment processing
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-950/30 p-6 rounded-xl border border-yellow-500/20 text-center">
              <div className="text-5xl mb-3">🔒</div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400">
                Blockchain Security
              </h3>
              <p className="text-sm text-gray-400">
                Enterprise-grade payment protection
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-950/30 p-6 rounded-xl border border-blue-500/20 text-center">
              <div className="text-5xl mb-3">⚡</div>
              <h3 className="text-lg font-bold mb-2 text-blue-400">
                Lightning Fast
              </h3>
              <p className="text-sm text-gray-400">
                Sub-second transaction processing
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "How Cube Pay Works",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center mb-8">
            Revolutionary spatial payment technology that transforms how you pay
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-teal-900/50 to-teal-950/50 p-8 rounded-2xl border border-teal-500/20">
              <div className="text-5xl mb-4 text-center">1</div>
              <h3 className="text-2xl font-bold mb-3 text-teal-400">
                Open Cube Pay
              </h3>
              <p className="text-gray-300">
                Launch the app or connect via Base App for instant onboarding
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/50 to-pink-950/50 p-8 rounded-2xl border border-pink-500/20">
              <div className="text-5xl mb-4 text-center">2</div>
              <h3 className="text-2xl font-bold mb-3 text-pink-400">
                Choose Your Method
              </h3>
              <p className="text-gray-300">
                Rotate the AR cube to select: Crypto, Bank QR, Virtual Card, or
                Voice AI
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-950/50 p-8 rounded-2xl border border-purple-500/20">
              <div className="text-5xl mb-4 text-center">3</div>
              <h3 className="text-2xl font-bold mb-3 text-purple-400">
                Pay Instantly
              </h3>
              <p className="text-gray-300">
                Blockchain-verified payment with real-time confirmation. Works
                with any merchant.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Why Cube Pay?",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center mb-8">
            One platform that serves users, merchants, and AI agents with
            revolutionary spatial payment technology
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-950/30 p-6 rounded-xl border border-green-500/20">
              <h3 className="text-xl font-bold mb-3 text-green-400">
                For Users
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Pay with Crypto or Fiat—No Need to Choose</li>
                <li>✓ One App for Base, Solana, Ethereum, Hedera, and More</li>
                <li>✓ Voice Payments: Just Say "Pay $20 to the Coffee Shop"</li>
                <li>✓ Easy Onboarding via Base App—No Seed Phrases</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-950/30 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-bold mb-3 text-blue-400">
                For Merchants
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Accept Crypto and Fiat with One Integration</li>
                <li>✓ Card Details Never Touch Your Servers</li>
                <li>
                  ✓ Dynamic Pricing with Automatic Crypto-to-Fiat Conversion
                </li>
                <li>
                  ✓ Virtual Terminal Interface for Secure, Compliant Payments
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Why Onboard with Cube Pay?",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center mb-8">
            Join thousands who started their crypto journey with Cube Pay. No
            complexity, no confusion—just simple, spatial payments that work for
            you.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-950/30 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-bold mb-3 text-blue-400">
                For Complete Beginners
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>No technical jargon—just simple payment options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>
                    Start with familiar bank payments, explore crypto later
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Voice AI guides you through every step</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-950/30 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold mb-3 text-purple-400">
                For Crypto-Curious
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Connect your Base wallet and start immediately</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>See crypto and fiat side-by-side in one interface</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>
                    Transparent conversion rates before every transaction
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-teal-950/30 p-6 rounded-xl border border-cyan-500/20">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">
                For Multi-Chain Users
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>
                    One interface for Base, Solana, Ethereum, Hedera, Starknet
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>Automatic cross-chain routing—no manual bridging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>
                    Voice payments across all chains with natural language
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA section */}
          <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Discover Crypto?
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Join thousands who started their crypto journey with Cube Pay. No
              complexity, no confusion—just simple, spatial payments that work
              for you.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
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
      ),
    },
    {
      title: "Advanced Privacy Protection",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center mb-8">
            Military-grade privacy features ensure your financial activities
            remain completely confidential
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-950/30 p-6 rounded-xl border border-purple-500/20">
              <div className="text-5xl mb-4">�</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">
                Hidden Transaction Amounts
              </h3>
              <p className="text-gray-300">
                Transaction values are encrypted and only visible to sender and
                receiver. Blockchain observers can verify transfers occur
                without knowing amounts sent.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-rose-950/30 p-6 rounded-xl border border-red-500/20">
              <div className="text-5xl mb-4">🔑</div>
              <h3 className="text-xl font-bold mb-3 text-red-400">
                Private Keys, Private Life
              </h3>
              <p className="text-gray-300">
                Your private keys never leave your device. Complete control over
                your funds with no third-party access or surveillance.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-950/30 p-6 rounded-xl border border-blue-500/20">
              <div className="text-5xl mb-4">�</div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">
                Anonymous Wallet Addresses
              </h3>
              <p className="text-gray-300">
                Generate infinitely stealth addresses that can be linked to your
                identity or other transactions. Fresh address for every payment.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/30 to-teal-950/30 p-6 rounded-xl border border-cyan-500/20">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">
                Cross-Border Privacy
              </h3>
              <p className="text-gray-300">
                Send and receive private payments globally without geographic
                restrictions, KYC, or surveillance.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "For AI Agents",
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-900/30 to-indigo-950/30 p-6 rounded-xl border border-purple-500/20">
            <div className="text-5xl mb-4">�</div>
            <h3 className="text-xl font-bold mb-3 text-purple-400">
              Agentic Virtual Card (AVC) for Autonomous Payments
            </h3>
            <p className="text-gray-300">
              AI agents get ephemeral payment cards with spending limits and
              expiration rules. Authorize once, agent pays autonomously within
              defined parameters.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-900/30 to-rose-950/30 p-6 rounded-xl border border-pink-500/20">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-pink-400">
              &lt;500ms Crypto-to-Fiat Conversion for Real-World Commerce
            </h3>
            <p className="text-gray-300">
              Lightning-fast conversion enables agents to pay traditional
              merchants with crypto. Agent sends USDC, merchant receives
              fiat—all in under half a second.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-950/30 p-6 rounded-xl border border-blue-500/20">
            <div className="text-5xl mb-4">�</div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">
              Support for x402, Google A2P/A2A, OpenAI ACP Protocols
            </h3>
            <p className="text-gray-300">
              Native integration with emerging agent payment standards. CubePay
              speaks the language of autonomous commerce—HTTP 402,
              Agent-to-Person, Agent-to-Agent payments.
            </p>
          </div>
          <div className="bg-gradient-to-br from-violet-900/30 to-purple-950/30 p-6 rounded-xl border border-violet-500/20">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-3 text-violet-400">
              HTLC Escrow for Trustless Agent-to-Agent Transactions
            </h3>
            <p className="text-gray-300">
              Hash Time Locked Contracts enable agents to transact without
              trust. Payment released only when conditions are cryptographically
              proven—no intermediaries needed.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Revolutionary AR Banking Features",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center mb-8">
            Banking reimagined for the spatial computing era
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-950/30 p-6 rounded-xl border border-blue-500/20">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">
                Global AR ATM Network
              </h3>
              <p className="text-gray-300">
                Access virtual ATMs anywhere in the world through AR. Withdraw
                cash or crypto at any location with Spatial Bank presence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-950/30 p-6 rounded-xl border border-purple-500/20">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">
                AR Investment Dashboard
              </h3>
              <p className="text-gray-300">
                Visualize your portfolio in 3D. Track stocks, crypto, and assets
                with interactive AR charts and real-time market data.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-950/30 p-6 rounded-xl border border-green-500/20">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-xl font-bold mb-3 text-green-400">
                Spatial Payment Cards
              </h3>
              <p className="text-gray-300">
                Generate virtual payment cards in AR space. No physical card
                needed—just project your card when you need it.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-rose-950/30 p-6 rounded-xl border border-pink-500/20">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-xl font-bold mb-3 text-pink-400">
                Virtual Branch Access
              </h3>
              <p className="text-gray-300">
                Visit Spatial Bank branches in AR from anywhere. Speak with AI
                advisors and access full banking services virtually.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Banking Made Simple with AR",
      content: (
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center mb-8">
            Open your Spatial Bank account and start banking in augmented
            reality
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-teal-400">
                Download Spatial Bank
              </h3>
              <p className="text-sm text-gray-400">
                Get the Spatial Bank AR Banking app on your device
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-400">
                Create Account
              </h3>
              <p className="text-sm text-gray-400">
                Quick verification with biometric setup
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-400">
                Enter AR Mode
              </h3>
              <p className="text-sm text-gray-400">
                Launch AR interface and see your financial world
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-400">
                Start Banking
              </h3>
              <p className="text-sm text-gray-400">
                Manage accounts, pay, invest—all in AR
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-cyan-400 mb-4">
              Ready for AR Banking?
            </p>
            <p className="text-lg text-gray-300">
              Join thousands already banking in augmented reality with Spatial
              Bank
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "The Future is Printable",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-center mb-4">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              And the best part?
            </h2>
            <p className="text-2xl md:text-3xl text-gray-200 mb-4 max-w-4xl mx-auto leading-relaxed font-semibold">
              Printable AR glasses on a 3D printer are today's reality.
            </p>
            <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto">
              Just for viewing at the moment. But the technology tomorrow...
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-500/30">
            <img
              src="/images/ar-glasses/3d_printed_ar_glasses.webp"
              alt="3D Printed AR Glasses"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          <div className="text-center mt-4">
            <p className="text-lg text-cyan-400 font-semibold animate-pulse">
              🚀 The future of spatial computing is being printed right now
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Get Started Today",
      content: (
        <div
          className="flex flex-col items-center justify-center h-full text-center cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); // Prevent slide advance
            // Navigate to watch-demo section
            window.location.hash = "#watch-demo";
          }}
        >
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
            Join the Future of Finance
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl">
            Experience the world's first spatial payment terminal platform. Pay
            with crypto, fiat, or voice—all from one AR cube.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-6 rounded-xl font-semibold text-xl transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25">
              Watch Demo
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-6 rounded-xl font-semibold text-xl transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
              Launch App
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Click anywhere on this slide to watch the demo
          </p>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Slide Container - Click anywhere to advance */}
        <div
          onClick={nextSlide}
          className="relative bg-gradient-to-br from-slate-900/80 via-blue-950/80 to-slate-900/80 rounded-3xl border border-blue-500/20 p-12 min-h-[600px] flex flex-col cursor-pointer"
        >
          {/* Slide Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {slides[currentSlide].title}
          </h2>

          {/* Slide Content */}
          <div className="flex-1 flex items-center justify-center">
            {slides[currentSlide].content}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the slide's onClick
                prevSlide();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all duration-200 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the slide's onClick
                    setCurrentSlide(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-12 bg-blue-500"
                      : "w-2 bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Empty div to maintain spacing */}
            <div className="w-14"></div>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6 text-gray-400 text-sm">
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeckSection;
