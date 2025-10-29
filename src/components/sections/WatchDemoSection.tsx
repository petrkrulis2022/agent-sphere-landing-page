import VideoPlayer from "../VideoPlayer";

const WatchDemoSection = () => {
  const videos = [
    {
      src: "/videos/cubepay/AR_Ticket_Confirmation_and_Payment.mp4",
      title: "AR Ticket Payment",
      description: "Buy tickets with instant AR confirmation",
    },
    {
      src: "/videos/cubepay/Hotel_Payment_and_Booking_Confirmation_Video (1).mp4",
      title: "Hotel Booking & Payment",
      description: "Complete hotel bookings with secure payments",
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
    {
      src: "/videos/cubepay/restaurant-payment.mp4",
      title: "Restaurant Demo",
      description: "Real-world restaurant payment flow",
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
          <VideoPlayer videos={videos} className="max-w-6xl mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default WatchDemoSection;
