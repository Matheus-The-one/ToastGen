import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-black">
      <div className="absolute inset-0 bg-comic-pattern opacity-5"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen text-white px-4 py-16 max-w-7xl mx-auto">
        {/* Left side with grape character */}
        <div className="md:w-1/2 mb-8 md:mb-0 relative">
          <div className="animate-bounce-slow">
            <Image
              src="/images/tamada.png"
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
            <span className="block transform hover:scale-110 transition duration-300 text-purple-300">თამადა</span>
            <span className="block transform hover:scale-110 transition duration-300 text-purple-200">VS</span>
            <span className="block transform hover:scale-110 transition duration-300 text-purple-100">კომპიუტერი</span>
          </h1>
          
          <p className="mb-8 text-lg md:text-xl max-w-2xl animate-pulse texტ-white comic-text-outline">
            შეეჯიბრე ჩვენს ხელოვნურ ინტელექტს და გაივარჯიშე შენი სათამადო უნარები
          </p>
          
          <button className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full hover:from-purple-700 hover:to-purple-900 transition duration-3000 shadow-lg animate-pulse transform hover:scale-105 font-bold text-lg md:text-xl comic-button">
            დაწყება
          </button>
        </div>
      </div>
      
      
     
      
    </div>
  );
};

export default page;