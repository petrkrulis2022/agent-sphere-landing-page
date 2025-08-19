import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageGalleryProps {
  images: Array<{
    src: string;
    title: string;
    description: string;
  }>;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  className = "",
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentImage = images[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`bg-black rounded-2xl overflow-hidden shadow-2xl ${className}`}
      >
        {/* Main Image Display */}
        <div
          className="relative aspect-video bg-black cursor-pointer"
          onClick={openModal}
        >
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />

          {/* Navigation Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
            <button
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              className="text-white hover:text-green-400 transition-colors p-4"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="text-white hover:text-green-400 transition-colors p-4"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Image Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
            <h3 className="text-xl font-bold text-white mb-2">
              {currentImage.title}
            </h3>
            <p className="text-gray-200 text-sm">{currentImage.description}</p>
          </div>
        </div>

        {/* Image Info and Navigation */}
        <div className="p-6 bg-gradient-to-r from-gray-900 to-black">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">
              Image {currentImageIndex + 1} of {images.length}
            </div>

            <div className="flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-orange-500 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="mt-4 flex space-x-2 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentImageIndex
                    ? "border-orange-500 scale-110"
                    : "border-white/20 hover:border-white/40"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-red-400 transition-colors bg-black/50 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="w-full h-full object-contain rounded-lg"
            />

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-lg">
              <h3 className="text-2xl font-bold text-white mb-2">
                {currentImage.title}
              </h3>
              <p className="text-gray-200">{currentImage.description}</p>
            </div>

            {/* Modal Navigation */}
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors bg-black/50 rounded-full p-3"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors bg-black/50 rounded-full p-3"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
