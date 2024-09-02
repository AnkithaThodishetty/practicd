import React from 'react';

const MainSection = () => {
  return (
    <main className="relative flex items-center justify-between h-screen bg-gradient-to-r from-black to-gray-800 px-10">
      <div className="text-white max-w-lg z-10">
        <h1 className="text-4xl font-bold leading-tight mb-4">
          Take care of your <span className="text-red-500">body.</span> It's the only place you have to <span className="text-red-500">live.</span>
        </h1>
        <button
          onClick={() => window.location.href = '/register'}
          className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 mt-4"
        >
          Join With Us
        </button>
      </div>
      <div className="flex justify-center items-center h-full pr-10 z-0">
        <img
          src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Gym Model"
          className="h-5/6 w-auto object-contain"
        />
      </div>
    </main>
  );
};

export default MainSection;
