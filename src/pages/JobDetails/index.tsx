import React, { useState } from 'react'
import Description from '@/ui/JobDetails/Description';
import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button';
import { IoBookmarkOutline } from "react-icons/io5";
import Company from '@/ui/JobDetails/company';

const index = () => {
  const {id}= useParams();
  const [view,setView]= useState('description')
  return (
    <div className=' '>
      {/* Header */}

      <div className="bg-white shadow-lg rounded-xl p-6  mt-4 flex flex-col items-center">
      <img
          src="/job.png" // Replace with actual logo
          alt="Company Logo"
          className="w-16 h-16 mb-2"
        />
      <h1>UI/UX Designer</h1>
      <div className="flex gap-2 text-sm mt-1">
        <p>Google</p>
        <span>•</span>
        <p>California</p>
        <span>•</span>
        <p>1 day ago</p>
      </div>
      </div>

      <div className="flex justify-between gap-2 items-center mt-4 border-b border-gray-200 pb-2 px-6">
        <Button onClick={
          ()=>setView('description')
        } className='bg-[#130160] w-full'>Description</Button>
        <Button onClick={
          ()=>setView('company')
        } className='bg-[#D6CDFE] w-full'>Company</Button>
      </div>



      {/* Description or Company */}
      {/* <Description/> */}
        {view==='description'? <Description/> : <Company/>}
      {/* Company */}

     
      

      {/* Save Button and apply */}
      <div className="gap-4 p-6 my-auto mt-4 flex justify-between items-center">
        <Link to="/chat" >
            <IoBookmarkOutline className="w-6 h-6" />
        </Link>
        <Button className='bg-[#130160] w-full'>Apply Now</Button>

      </div>
    
      
    </div>
  )
}

export default index
