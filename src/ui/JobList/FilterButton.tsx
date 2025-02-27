import { Button } from '@/components/ui/button';
const FilterButton = () => {
  return (
    <>
    <div className="my-6">
    <h1 className="text-lg font-medium my-2 " >Job Type</h1>
       <div className=" flex flex-wrap gap-3 items-center mx-3 ">
      <Button type='button' variant='outline' className='font-normal'>
        Internship
      </Button>
      <Button type='button' variant='outline' className='font-normal text-white bg-orange-600'>
         Part Time
      </Button>
      <Button type='button' variant='outline' className='font-normal'>
        Full Time
      </Button>
    </div>
    </div>
    <div className="my-6">
    <h1 className="text-lg font-medium my-2 " >Position Level</h1>
       <div className=" flex flex-wrap gap-3 items-center mx-3">
      <Button type='button' variant='outline' className='font-normal'>
        Entry-Level
      </Button>
      <Button type='button' variant='outline' className='font-normal '>
        Junior
      </Button>
      <Button type='button' variant='outline' className='font-normal text-white bg-orange-600'>
        Senior
      </Button>
      <Button type='button' variant='outline' className='font-normal '>
        Leader
      </Button>
      <Button type='button' variant='outline' className='font-normal'>
        Manager
      </Button>
    </div>
    </div>
     
    </>
 
  )
}

export default FilterButton