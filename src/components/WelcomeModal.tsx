import { useState, useEffect } from "react";

interface WelcomeModalProps {
  onClose: () => void;
}

type VoteOption = "yes" | "maybe" | "no" | "nonsense";

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // For now, we'll use the one image you provided, repeated
  // You can add more images to /public/faces/ folder later
  const faceImages = Array.from({ length: 12 }, (_, i) => {
    // Using PNG images uploaded to /public/faces/
    return `/faces/face-${i + 1}.png`;
  });

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % faceImages.length);
    }, 800); // 0.8 seconds per image for smooth, quick flow

    return () => clearInterval(interval);
  }, [faceImages.length]);

  // Fade in animation on mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleVote = (vote: VoteOption) => {
    // Store vote in localStorage
    localStorage.setItem("spatia-user-vote", vote);
    localStorage.setItem("spatia-vote-timestamp", new Date().toISOString());

    // Start exit animation
    setIsExiting(true);
    setTimeout(() => {
      onClose();
    }, 300); // Match the fade-out duration
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible && !isExiting
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={() => handleVote("nonsense")}
      ></div>

      {/* Modal Content */}
      <div
        className={`relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto border border-blue-500/30 transition-transform duration-300 ${
          isVisible && !isExiting ? "scale-100" : "scale-95"
        }`}
      >
        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Carousel and Heading */}
            <div>
              {/* Carousel Section */}
              <div className="mb-6">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-500/50 shadow-lg shadow-blue-500/30">
                  {faceImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`User ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        index === currentImageIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      onError={(e) => {
                        // Fallback to a placeholder if image doesn't exist
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23334155'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%2394a3b8' font-size='60'%3E👤%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  ))}
                </div>

                {/* Carousel indicators */}
                <div className="flex justify-center gap-1.5 mt-3">
                  {faceImages.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "w-8 bg-blue-500"
                          : "w-1.5 bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Who Are Users In The Near Future?
              </h1>

              {/* Subheading */}
              <p className="text-lg text-center text-gray-300 mb-2">
                We come from every corner of the world.
              </p>
              <p className="text-base text-center text-gray-400 mb-4">
                We may look different, but we share something:
              </p>

              {/* Bullet Points */}
              <div className="space-y-2 mb-4 max-w-md mx-auto">
                {[
                  "We are human",
                  "We live in augmented reality",
                  "We value freedom",
                  "We use crypto",
                  "We trust AI agents with daily tasks",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Formula and Voting */}
            <div>
              {/* Formula */}
              <div className="text-center mb-6">
                <div className="text-3xl md:text-4xl mb-3 flex items-center justify-center gap-2 flex-wrap">
                  <span>👤</span>
                  <span className="text-gray-500">+</span>
                  <span>🥽</span>
                  <span className="text-gray-500">+</span>
                  <span>₿</span>
                  <span className="text-gray-500">+</span>
                  <span>🤖</span>
                  <span className="text-gray-500">=</span>
                  <span>🌍</span>
                </div>
                <div className="text-xs md:text-sm text-gray-400 flex items-center justify-center gap-3 flex-wrap mb-6">
                  <span>Human</span>
                  <span>AR</span>
                  <span>Crypto</span>
                  <span>Agents</span>
                  <span className="font-semibold text-blue-400">
                    New Finance
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-700 my-6"></div>

              {/* Question */}
              <p className="text-xl md:text-2xl text-center text-gray-200 mb-6 font-medium">
                Do you believe this is the future of finance?
              </p>

              {/* Voting Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleVote("yes")}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-green-500/50 text-sm md:text-base"
                >
                  Yes, I agree
                </button>
                <button
                  onClick={() => handleVote("maybe")}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 text-sm md:text-base"
                >
                  Maybe
                </button>
                <button
                  onClick={() => handleVote("no")}
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-orange-500/50 text-sm md:text-base"
                >
                  No
                </button>
                <button
                  onClick={() => handleVote("nonsense")}
                  className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-slate-500/50 text-sm md:text-base"
                >
                  This is nonsense
                </button>
              </div>

              {/* Skip link */}
              <div className="text-center mt-4">
                <button
                  onClick={() => handleVote("nonsense")}
                  className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Skip this survey
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
