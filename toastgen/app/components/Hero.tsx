import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      
      
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-white px-4">
        <h1 className="mb-6 text-4xl md:text-6xl font-bold text-center animate-fade-in-down text-purple-100">
          Discover the Art of Georgian Wine
        </h1>
        
        <p className="mb-8 text-lg md:text-xl text-center max-w-2xl animate-fade-in-up text-purple-200">
          Immerse yourself in centuries of tradition and taste the essence of Georgia's rich winemaking heritage.
        </p>
        
        <div className="relative w-full max-w-md animate-fade-in-up">
          <input 
            type="text" 
            placeholder="Enter your favorite wine..."
            className="w-full px-6 py-4 text-lg text-purple-900 bg-purple-100 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full hover:from-purple-700 hover:to-indigo-700 transition duration-300 shadow-md">
            Generate
          </button>
        </div>
      </div>
      
      <div className="absolute top-1/4 right-0 w-1/4 md:w-1/5 animate-float-delayed hidden md:block">
        <img src="/wine1.png" alt="Wine Glass" width={30} height={30} className="w-full bg-none rounded-full filter drop-shadow-lg" />
      </div>
      
      
    
    </div>
  );
};

export default Hero;