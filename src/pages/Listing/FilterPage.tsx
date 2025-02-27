import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';
import { useState } from 'react';

const JobFilter = () => {
  return (
    <div className="container p-5 ">
      <div className="row">
        <div className="col-span-12">
        <div className="col flex  items-center text-center">
        <div className='' >
          <MoveLeft size={25}  />
        </div>
          <h1 className='text-center w-full font-semibold text-2xl'>Filter</h1>
          </div>
        </div>
      </div>
      <div className="m-5">
        <h4 className='text-xl'>Last Update</h4>
        <div className="flex flex-wrap gap-4 m-3">
          <Button>All</Button>
          <Button>Remote</Button>
          <Button>Full Time</Button>
          <Button>Part Time</Button>
        </div>
      </div>
    </div>
  )
}

export default JobFilter