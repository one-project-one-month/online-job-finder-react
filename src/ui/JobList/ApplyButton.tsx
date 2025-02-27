import { Button } from '@/components/ui/button'
import React from 'react'

const ApplyButton = () => {
  return (
    <div className="fixed bottom-0 left-1/2 px-3 transform -translate-x-1/2 w-full max-w-screen-md bg-gray-50 rounded-t-lg shadow-lg py-3 gap-2 flex justify-between md:w-4.8/5 lg:w-full lg:max-w-screen-lg xl:w-1/2">
    <div className="w-4/12 sm:w-5/12 md:w-4/12 my-auto ">
      <Button className="w-full bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100">
        Reset
      </Button>
    </div>
    <div className="w-8/12 sm:w-7/12 md:w-8/12 my-auto">
      <Button className="w-full bg-blue-950 text-white rounded-lg hover:bg-blue-900">
        Apply Now
      </Button>
    </div>
  </div>


  
  )
}

export default ApplyButton