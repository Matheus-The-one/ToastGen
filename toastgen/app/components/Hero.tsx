import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-violet-600 via-purple-900 to-indigo-900">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 py-16">
        <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold text-center animate-fade-in-down text-purple-100 leading-tight">
          Discover the Art of <br className="hidden sm:block" />Georgian Wine
        </h1>
        
        <p className="mb-8 text-lg md:text-xl text-center max-w-2xl animate-fade-in-up text-purple-200">
          Immerse yourself in centuries of tradition and taste the essence of Georgia's rich winemaking heritage.
        </p>
        
        <div className="relative w-full max-w-md animate-fade-in-up mb-8">
          <input 
            type="text" 
            placeholder="Enter your favorite wine..."
            className="w-full px-6 py-4 text-lg text-purple-900 bg-purple-100 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full hover:from-purple-700 hover:to-indigo-700 transition duration-300 shadow-md">
            Generate
          </button>
        </div>

        <div className="flex space-x-4 animate-fade-in-up">
          <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-violet-900 transition duration-300 shadow-md">
            Explore Wines
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-900 transition duration-300 shadow-md">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="absolute top-1/4 right-0 w-1/4 md:w-1/5 animate-float-delayed hidden md:block">
        <Image src="/wine1.png" alt="Wine Glass" width={200} height={200} className="w-full bg-none rounded-full filter drop-shadow-lg" />
      </div>
      
      
      
      <div className="absolute top-1/3 left-1/4 w-16 h-16 animate-pulse hidden lg:block">
        <div className="w-full h-full bg-purple-400 rounded-full opacity-50"></div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 animate-bounce hidden lg:block">
        <div className="w-full h-full border-4 border-purple-300 rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default Hero;