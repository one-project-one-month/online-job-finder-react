import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
const FilterTitle = () => {
  return (
    <div className="row">
        <div className="col-span-12">
        <div className="col flex  items-center text-center">
        <div className='' >
          <Link to='/listing'>
          <Button className='rounded-full px-3 py-5 ' variant='outline'>
          <MoveLeft size={25}  />
          </Button>
          
          </Link>
          
        </div>
          <h1 className='text-center w-full font-semibold text-2xl'>Filter</h1>
          </div>
        </div>
      </div>
  )
}

export default FilterTitle