import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  SkipBack,
  SkipForward,
} from "lucide-react";

interface VideoPlayerProps {
  videos: Array<{
    src: string;
    title: string;
    description: string;
  }>;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videos,
  className = "",
}) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentVideo = videos[currentVideoIndex];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
    };
  }, [currentVideoIndex]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = (parseFloat(e.target.value) / 100) * duration;
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const previousVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  return (
    <div
      className={`bg-black rounded-2xl overflow-hidden shadow-2xl ${className}`}
    >
      {/* Video Container */}
      <div className="relative aspect-video bg-black">
        <video
          ref={videoRef}
          src={currentVideo.src}
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={nextVideo}
        />

        {/* Video Controls Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
          {/* Progress Bar */}
          <div className="px-6 mb-4">
            <input
              type="range"
              min="0"
              max="100"
              value={duration ? (currentTime / duration) * 100 : 0}
              onChange={handleSeek}
              className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-white text-sm mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between px-6 pb-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={previousVideo}
                className="text-white hover:text-green-400 transition-colors"
              >
                <SkipBack className="w-6 h-6" />
              </button>

              <button
                onClick={togglePlay}
                className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </button>

              <button
                onClick={nextVideo}
                className="text-white hover:text-green-400 transition-colors"
              >
                <SkipForward className="w-6 h-6" />
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleMute}
                className="text-white hover:text-green-400 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>

              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-green-400 transition-colors"
              >
                <Maximize className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-6 bg-gradient-to-r from-gray-900 to-black">
        <h3 className="text-xl font-bold text-white mb-2">
          {currentVideo.title}
        </h3>
        <p className="text-gray-300 mb-4">{currentVideo.description}</p>

        {/* Video Navigation */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Video {currentVideoIndex + 1} of {videos.length}
          </div>

          <div className="flex space-x-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentVideoIndex(index);
                  setIsPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentVideoIndex
                    ? "bg-green-500 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
