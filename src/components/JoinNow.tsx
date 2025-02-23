import React from 'react';
import { Button } from './ui/button';

const JoinNow = () => {
  return (
    <div className='bg-[#130160] flex items-center w-full p-8 rounded-lg relative'>
      {/* Text Content */}
      <div className="flex-1">
        <h1 className='text-2xl text-white mb-4'>
          50% Off <br /> take any courses
        </h1>
        <Button className='bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500'>
          Join Now
        </Button>
      </div>

      {/* Image */}
      <div className="relative">
        <img src="/img1.png" alt="Join Now" className='h-[200px] object-contain' />
      </div>
    </div>
  );
}

export default JoinNow;
