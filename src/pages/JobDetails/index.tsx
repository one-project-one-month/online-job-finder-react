import React, { useState } from 'react'
import Description from '@/ui/JobDetails/Description'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { IoBookmarkOutline } from 'react-icons/io5'
import Company from '@/ui/JobDetails/Company'

const index = () => {
  const { id } = useParams()
  const [view, setView] = useState('description')
  return (
    <div className="">
      {/* Header */}

      <div className="mt-4 flex flex-col items-center rounded-xl bg-white p-6 shadow-lg">
        <img
          src="/job.png" // Replace with actual logo
          alt="Company Logo"
          className="mb-2 h-16 w-16"
        />
        <h1>UI/UX Designer</h1>
        <div className="mt-1 flex gap-2 text-sm">
          <p>Google</p>
          <span>•</span>
          <p>California</p>
          <span>•</span>
          <p>1 day ago</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 border-b border-gray-200 px-6 pb-2">
        <Button
          onClick={() => setView('description')}
          className="w-full bg-[#130160]"
        >
          Description
        </Button>
        <Button
          onClick={() => setView('company')}
          className="w-full bg-[#D6CDFE]"
        >
          Company
        </Button>
      </div>

      {/* Description or Company */}
      {/* <Description/> */}
      {view === 'description' ? <Description /> : <Company />}
      {/* Company */}

      {/* Save Button and apply */}
      <div className="my-auto mt-4 flex items-center justify-between gap-4 p-6">
        <Link to="/chat">
          <IoBookmarkOutline className="h-6 w-6" />
        </Link>
        <Button className="w-full bg-[#130160]">Apply Now</Button>
      </div>
    </div>
  )
}

export default index
