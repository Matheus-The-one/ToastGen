import React from 'react';
import { FaExclamationCircle, FaLock, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const UploadCard: React.FC = () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 p-4 overflow-hidden">
      {/* Image on the left */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <img src='/images/comic.png' className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" alt="Comic illustration" />
      </div>

      {/* Upload form on the right */}
      <div className="w-full md:w-1/2">
        <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md mx-auto border border-purple-600">
          <div className="absolute top-0 left-0 w-full h-full bg-purple-600 opacity-20 mix-blend-multiply animate-pulse-slow"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-indigo-600 opacity-20 mix-blend-multiply animate-pulse-slow-reverse"></div>
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500 rounded-full opacity-10 animate-spin-slow"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-indigo-500 rounded-full opacity-10 animate-spin-slow-reverse"></div>

          <h2 className="text-4xl font-extrabold mb-8 text-center text-purple-400 drop-shadow-md">ატვირთე შენი სადღეგრძელო</h2>
          <form className="space-y-6 relative">
            <div>
              <label className="block text-sm font-medium mb-2 text-violet-300">სახელი</label>
              <div className="relative">
                <FaExclamationCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
                <input type="text" className="w-full bg-gray-800 rounded-xl p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-700"/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-violet-300">კატეგორია</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
                <select className="w-full bg-gray-800 rounded-xl p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-700">
                  <option>მეგობრობა</option>
                  <option>ოჯახი</option>
                  <option>სიყვარული</option>
                  <option>სამუშაო</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-violet-300">წინასიტყვაობა</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
                <input 
                  type="text" 
                  placeholder="თუ წინასიტყვაობა აქვს" 
                  className="w-full bg-gray-800 rounded-xl p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-700 placeholder-gray-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-violet-300">სადღეგრძელო</label>
              <div className="relative">
                <FaFileAlt className="absolute left-3 top-3 text-purple-400" />
                <textarea 
                  placeholder="დაამატე სადღეგრძელო" 
                  className="w-full bg-gray-800 rounded-xl p-3 pl-10 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-700 placeholder-gray-500"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-xl transition duration-300 ease-in-out border border-purple-600">
                დახურვა
              </button>
              <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-xl transition duration-300 ease-in-out">
                ატვირთვა
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadCard;