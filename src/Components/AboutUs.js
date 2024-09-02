import React from 'react';
import ReactPlayer from 'react-player';

const AboutUs = () => {
  const handleLearnMoreClick = () => {
    alert('Clicked from about us section');
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap items-start justify-between mb-12">
        {/* About Us Video */}
        <div className="w-full md:w-5/12 p-4">
          <div className="border-4 border-red-500 p-1">
            <ReactPlayer
              url="https://youtu.be/IpUQElrETw4?feature=shared"
              controls
              width="100%"
              height="auto"
            />
          </div>
        </div>
        {/* About Us Text */}
        <div className="w-full md:w-6/12 p-4">
          <h2 className="text-3xl font-bold text-red-500 mb-4">About Us</h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur. Arcu amet volutpat a rhoncus morbi iaculis ultricies lobortis. Laoreet amet urna venenatis at. Diam fames senectus feugiat est gravida bibendum. Rhoncus donec justo aliquam a blandit tellus elit consectetur convallis.
          </p>
          <button
            className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-700"
            onClick={handleLearnMoreClick}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between">
        {/* Why Choose Us Video */}
        <div className="w-full md:w-5/12 p-4">
          <div className="border-4 border-red-500 p-1">
            <ReactPlayer
              url="https://youtu.be/eaRQF-7hhmo?feature=shared"
              controls
              width="100%"
              height="auto"
            />
          </div>
        </div>
        {/* Why Choose Us Text */}
        <div className="w-full md:w-6/12 p-4">
          <h2 className="text-3xl font-bold text-red-500 mb-4">Why Choose Us?</h2>
          <ul className="text-gray-700 list-disc pl-5 space-y-4">
            <li><strong>Consultations with Expert:</strong> Lorem ipsum dolor sit amet consectetur.</li>
            <li><strong>Best Workout Facilities:</strong> Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
