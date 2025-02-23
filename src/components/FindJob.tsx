import React from 'react';

const FindJob = () => {
  return (
    <div className='container mx-auto p-6'>
      {/* Title */}
      <h2 className='text-2xl font-bold mb-4'>Find Your Job</h2>

      {/* Grid Layout */}
      <div className="grid grid-flow-col grid-rows-3 gap-4">
        
        {/* First box: spans all 3 rows */}
        <div className="row-span-3 bg-blue-400 p-8 flex flex-col items-center justify-center rounded-lg shadow-md">
          <h1 className='text-3xl font-bold text-black'>44.5k</h1>
          <p className='text-black'>Remote Jobs</p>
        </div>

        {/* Second box: spans 2 columns */}
        <div className="col-span-2 bg-[#BEAFFE] p-8 flex flex-col items-center justify-center rounded-lg shadow-md">
          <h1 className='text-3xl font-bold text-black'>35k</h1>
          <p className='text-black'>Full-time Jobs</p>
        </div>

        {/* Third box: spans 2 columns & 2 rows */}
        <div className="col-span-2 row-span-2 bg-[#FFD6AD] p-8 flex flex-col items-center justify-center rounded-lg shadow-md">
          <h1 className='text-3xl font-bold text-black'>15k</h1>
          <p className='text-black'>Freelance Jobs</p>
        </div>

      </div>
    </div>
  );
};

export default FindJob;
