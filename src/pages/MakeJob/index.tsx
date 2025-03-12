import MakeJob from '@/components/MakeJob';
import React from 'react'
import { IoMdClose } from "react-icons/io";

const index = () => {

  return (
    <div className='w-full'>
      <div className="relative flex justify-between p-4">
            <IoMdClose />
            <h1 className="text-orange-400">
              Post
            </h1>
           
      </div>
     
      <h1 className='text-xl p-4'>Add a Post</h1>
      <MakeJob/>

      
           
    </div>
  )
}

export default index
