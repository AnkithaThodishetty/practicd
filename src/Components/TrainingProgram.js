import React, { useRef } from 'react';

const TrainingProgram = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gray-100 py-16">
      <h2 className="text-center text-3xl font-semibold mb-12">Training Programs</h2>
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => handleScroll('left')} className="bg-red-500 text-white p-2 rounded-full">
          ◀
        </button>
        <button onClick={() => handleScroll('right')} className="bg-red-500 text-white p-2 rounded-full">
          ▶
        </button>
      </div>
      <div
        ref={scrollContainerRef}
        className="overflow-x-scroll flex space-x-4 p-4 scrollbar-hidden"
      >
        {/* Training Program Cards */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-none w-60">Program 1</div>
        <div className="bg-white p-6 rounded-lg shadow-md flex-none w-60">Program 2</div>
        <div className="bg-white p-6 rounded-lg shadow-md flex-none w-60">Program 3</div>
        <div className="bg-white p-6 rounded-lg shadow-md flex-none w-60">Program 4</div>
        <div className="bg-white p-6 rounded-lg shadow-md flex-none w-60">Program 5</div>
        <div className="bg-white p-6 rounded-lg shadow-md flex-none w-60">Program 6</div>
        <div className="bg-white p-6 rounded-lg shadow-md flex-none w-60">Program 7</div>
        <div className="bg-white p-6 rounded-lg shadow-md flex-none w-60">Program 8</div>
        <div className="bg-white p-6 rounded-lg shadow-md flex-none w-60">Program 9</div>
        <div className="bg-white p-6 rounded-lg shadow-md flex-none w-60">Program 10</div>
      </div>
      <button
        className="bg-red-500 text-white py-2 px-6 rounded mt-4"
        onClick={() => window.location.href = '/team'}
      >
        See Whole Team
      </button>
    </div>
  );
};

export default TrainingProgram;
