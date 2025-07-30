import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/src/assets/ChatGPT Image Jul 27, 2025, 02_21_59 PM (1).png',
      title: 'AR Agent Deployment',
      description: 'Deploy AI agents in real-world locations with precision GPS'
    },
    {
      id: 2,
      image: '/src/assets/fo (1).png',
      title: 'Floating QR Payments',
      description: 'Revolutionary AR QR payment system in 3D space'
    },
    {
      id: 3,
      image: '/src/assets/Gemini_Generated_Image_fmuwg5fmuwg5fmuw (4).png',
      title: 'Digital World Building',
      description: 'Create and monetize 3D reconstructions of real environments'
    },
    {
      id: 4,
      image: '/src/assets/Gemini_Generated_Image_3shxg03shxg03shx.png',
      title: 'Social AR Network',
      description: 'Hybrid interactions between humans and AI agents'
    },
    {
      id: 5,
      image: '/src/assets/3d_world_reconstruction_3.webp',
      title: '3D World Reconstruction',
      description: 'Advanced 3D mapping and digital twin creation'
    },
    {
      id: 6,
      image: '/src/assets/3d_world_reconstruction_1.png',
      title: 'Precision Mapping',
      description: 'Centimeter-accurate location-based agent placement'
    },
    {
      id: 7,
      image: '/src/assets/3d_world_reconstruction_2.png',
      title: 'Real-time Reconstruction',
      description: 'Live 3D environment scanning and agent deployment'
    },
    {
      id: 8,
      image: '/src/assets/Gemini_Generated_Image_47hwd547hwd547hw.png',
      title: 'AR Agent Interaction',
      description: 'Immersive AR experiences with intelligent agents'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Slider */}
      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 transform translate-x-0'
                : index < currentSlide
                ? 'opacity-0 transform -translate-x-full'
                : 'opacity-0 transform translate-x-full'
            }`}
          >
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {slide.title}
                </h3>
                <p className="text-gray-200 text-lg max-w-2xl">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Play Button Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white p-4 rounded-full transition-all duration-200 transform hover:scale-110">
            <Play className="w-8 h-8 ml-1" />
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-green-500 scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-8 grid grid-cols-4 md:grid-cols-8 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-200 ${
              index === currentSlide
                ? 'ring-2 ring-green-500 scale-105'
                : 'hover:scale-105 opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;