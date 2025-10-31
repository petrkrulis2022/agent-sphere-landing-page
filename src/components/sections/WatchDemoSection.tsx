import { useEffect, useState } from "react";
import VideoPlayer from "../VideoPlayer";

const WatchDemoSection = () => {
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    // Check if we just navigated here (e.g., from the deck)
    // Set autoPlay to true briefly when the section loads
    const timer = setTimeout(() => {
      setAutoPlay(true);
      // Reset after a short delay to prevent auto-play on subsequent visits
      setTimeout(() => setAutoPlay(false), 1000);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const videos = [
    {
      src: "/videos/cubepay/AR_Ticket_Confirmation_and_Payment.mp4",
      title: "AR Ticket Payment",
      description: "Buy tickets with instant AR confirmation",
    },
    {
      src: "/videos/cubepay/AR_QR_Payment_Video_Storyboard.mp4",
      title: "QR Payment Flow",
      description: "Step-by-step QR code payment process",
    },
    {
      src: "/videos/cubepay/AR_Payment_Journey_Video_Prompts.mp4",
      title: "AR Payment Journey",
      description: "Complete AR payment experience walkthrough",
    },
    {
      src: "/videos/cubepay/AR_Restaurant_Payment_Confirmation.mp4",
      title: "Restaurant Payment",
      description: "Dining payment confirmation in AR",
    },
    // Videos from Onboard Crypto section
    {
      src: "/videos/cubepay/Crypto_On_Off_Ramp_Video_Generation.mp4",
      title: "Crypto On/Off Ramp",
      description: "Seamlessly convert between crypto and fiat with ease",
    },
    {
      src: "/videos/cubepay/AR_Bus_Agent_Video_Generation.mp4",
      title: "AR Agent Assistance",
      description: "AI agents guide you through your crypto journey",
    },
    // Video 2 from Why Cube Pay section
    {
      src: "/videos/cubepay/Virtual_Card_Contactless_Payment_Video.mp4",
      title: "Virtual Card Payments",
      description: "Contactless virtual card payment experience",
    },
    // Videos 1 and 2 from Private Payments section
    {
      src: "/videos/cubepay/E_shop_Payment_with_Virtual_Card.mp4",
      title: "E-shop Virtual Card Payment",
      description: "Shop online securely with virtual cards",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Watch CubePay in Action
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            See how CubePay transforms payments with augmented reality and
            spatial terminals
          </p>
        </div>

        {/* Video Demonstrations */}
        <div className="mb-20">
          <VideoPlayer
            videos={videos}
            className="max-w-6xl mx-auto"
            autoPlay={autoPlay}
          />
        </div>
      </div>
    </section>
  );
};

export default WatchDemoSection;
