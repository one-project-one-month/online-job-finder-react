import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"

import { Slider } from "@/components/ui/slider"; 

const FilterRange = () => {
    const [value, setValue] = React.useState<number>(0); 

    // Function to format value as currency
    const formatCurrency = (value: number) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);
    };
  
  return (
    <>
    <div className="mb-5">
    <div className=" mx-auto space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium">Salary</span>
        <span className="text-lg font-medium">{formatCurrency(value)}</span>
      </div>

      <Slider
        value={[value]}
        onValueChange={(newValue) => setValue(newValue[0])}
        min={0}
        max={10000} 
        step={1}
        className="w-full text-orange-600 bg-slate-50"
      >
        {/* <div className="flex justify-between text-lg bg-red-600">
          <span>0</span>
          <span>10,000</span>
        </div> */}
      </Slider>
    </div>
    </div>
     <h1 className="text-lg font-medium mb-3 " >Specialization</h1>
    <div className=' flex flex-col gap-4 mx-3'>
        <div className="flex items-center space-x-3">
            <Checkbox id="terms" />
            <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Design
            </label>
        </div>
        <div className="flex items-center space-x-3">
            <Checkbox id="terms" />
            <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Finance
            </label>
        </div>
        <div className="flex items-center space-x-3">
            <Checkbox id="terms" />
            <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Education
            </label>
        </div>
        <div className="flex items-center space-x-3">
            <Checkbox id="terms" />
            <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Health
            </label>
        </div>
        <div className="flex items-center space-x-3">
            <Checkbox id="terms" />
            <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
               Hospitaility
            </label>
        </div>
        <div className="flex items-center space-x-3">
            <Checkbox id="terms" />
            <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Programmer
            </label>
        </div>
    </div>
    </>
    
  )
}

export default FilterRange