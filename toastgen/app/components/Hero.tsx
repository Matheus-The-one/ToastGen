import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-black">
      <div className="absolute inset-0 bg-comic-pattern opacity-5"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen text-white px-4 py-16 max-w-7xl mx-auto">
        {/* Left side with grape character */}
        <div className="md:w-1/2 mb-8 md:mb-0 relative">
          <div className="animate-bounce-slow">
            <Image
              src="/images/grapee.png"
              alt="Grape Character"
              width={600}
              height={600}
              className="filter drop-shadow-xl max-w-full h-auto"
            />
          </div>
          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 rotate-12">
            <span className="text-4xl md:text-6xl animate-pulse">🍇</span>
          </div>
        </div>
        
        {/* Right side with text and CTA */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold leading-tight text-shadow-pop">
            <span className="block transform hover:scale-110 transition duration-300 text-purple-300">აღმოაჩინე</span>
            <span className="block transform hover:scale-110 transition duration-300 text-purple-200">სადღეგრძელოები</span>
            <span className="block transform hover:scale-110 transition duration-300 text-purple-100">DgeGrdzelze</span>
          </h1>
          
          <p className="mb-8 text-lg md:text-xl max-w-2xl animate-pulse text-purple-200 comic-text-outline">
            ავტირთე, შეაფასე, ისწავლე, დააგენერირე, შეიყვარე ქართული სადღეგრძელოები ჩვენს პლათფორმაზე
          </p>
          
          <button className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full hover:from-purple-700 hover:to-purple-900 transition duration-300 shadow-lg animate-pulse transform hover:scale-105 font-bold text-lg md:text-xl comic-button">
            შექმენი სადღეგრძელო
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 animate-spin-slow hidden md:block">
        <Image src="/wine1.png" alt="Wine Glass" width={100} height={100} className="filter invert" />
      </div>
      
      <div className="absolute bottom-10 left-10 animate-bounce-slow hidden md:block">
        <Image src="/wine1.png" alt="Wine Bottle" width={80} height={200} className="filter invert" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 70C840 80 960 100 1080 110C1200 120 1320 120 1380 120H1440V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="rgba(139,92,246,0.2)"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;