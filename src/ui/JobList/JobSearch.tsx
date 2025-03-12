import { SlidersVertical } from "lucide-react"
import { Input } from '@/components/ui/input';
import { MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";
const JobSearch = () => {
  return (
    <>
    <div className="">
        <div className="pb-3">
        <div className="relative ">
      <Input
        type="search" 
        placeholder="Design" 
        className="pl-10"  
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
    </div>
    <div className="">
        <div className="relative ">
      <Input 
        type="search" 
        placeholder="Location" 
        className="pl-10"  
      />
      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500" />
    </div>
    </div>
    </div>
    <div className="pt-5 flex flex-wrap gap-2 items-center ">
      <Button className=''>
        <Link to='/listing/filter'>
        <SlidersVertical/>
        </Link>
      </Button>
      <Button type='button' variant='outline'>
        Senior Designer
      </Button>
      <Button type='button' variant='outline'>
         Designer
      </Button>
      <Button type='button' variant='outline'>
        Developer
      </Button>
      <Button type='button' variant='outline'>
        Frontend Developer
      </Button>
    </div>
   
    </>
    
  )
}

export default JobSearch
