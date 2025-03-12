import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
 
const FilterRadio = () => {
  return (
    <>
    <div>
     <h1 className="text-lg font-medium my-2 " >Last Update</h1>
     <div className="mb-6 mx-2">
     <RadioGroup defaultValue="lastMonth" className="mt-3">
      <div className="flex items-center space-x-4 mt-1">
        <RadioGroupItem value="recent" id="r1" />
        <Label htmlFor="r1" className="font-normal">Recent</Label>
      </div>
      <div className="flex items-center space-x-4 mt-1">
        <RadioGroupItem value="lastWeek" id="r2" />
        <Label htmlFor="r2" className="font-normal">Last Week</Label>
      </div>
      <div className="flex items-center space-x-4 mt-1">
        <RadioGroupItem value="lastMonth" id="r3" />
        <Label htmlFor="r3" className="font-normal">Last Month</Label>
      </div>
      <div className="flex items-center space-x-4 mt-1">
        <RadioGroupItem value="anyTime" id="r4" />
        <Label htmlFor="r4" className="font-normal">Any Time</Label>
      </div>
    </RadioGroup>
     </div>
    </div>
    <div>
     <h1 className="text-lg font-medium my-2 " >Type of workspace</h1>
     <div className="mb-6 mx-3">
     <RadioGroup defaultValue="hybrid" className="mt-3">
      <div className="flex items-center space-x-4 mt-1">
        <RadioGroupItem value="onSite" id="r1" />
        <Label htmlFor="r1" className="font-normal">On-site</Label>
      </div>
      <div className="flex items-center space-x-4 mt-1">
        <RadioGroupItem value="hybrid" id="r2" />
        <Label htmlFor="r2" className="font-normal">Hybrid</Label>
      </div>
      <div className="flex items-center space-x-4 mt-1">
        <RadioGroupItem value="remote" id="r3" />
        <Label htmlFor="r3" className="font-normal">Remote</Label>
      </div>
    </RadioGroup>
     </div>
    </div>
    </>
    
  )
}

export default FilterRadio