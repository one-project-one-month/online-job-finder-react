import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 

const FilterSelect = () => {
  return (
    <>
    <div className="">
    <div className="">
      <h1 className="text-lg font-medium my-2 " >Experience</h1>
      <div className="mt-3 mb-6 mx-3">
      <Select >
      <SelectTrigger className="">
        <SelectValue placeholder="Select experience" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="">
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="noExperience" className="">No Experience</SelectItem>
          <SelectItem value="less">Less than a year</SelectItem>
          <SelectItem value="onetoThree">1-3 years</SelectItem>
          <SelectItem value="thresstofive">3-5 years</SelectItem>
          <SelectItem value="more">More than 10 years</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
      </div>
      </div>
      <div className="">
      <h1 className="text-lg font-medium my-2 " >Location</h1>
      <div className=" mb-6 mx-3">
      <Select>
      <SelectTrigger className="">
        <SelectValue placeholder="Select location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
          <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
          <SelectItem value="west">
            Western European Summer Time (WEST)
          </SelectItem>
          <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
          <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
          <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
          <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
          <SelectItem value="ist_indonesia">
            Indonesia Central Standard Time (WITA)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectItem value="awst">
            Australian Western Standard Time (AWST)
          </SelectItem>
          <SelectItem value="acst">
            Australian Central Standard Time (ACST)
          </SelectItem>
          <SelectItem value="aest">
            Australian Eastern Standard Time (AEST)
          </SelectItem>
          <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
          <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectItem value="art">Argentina Time (ART)</SelectItem>
          <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
          <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
          <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
      </div>
      </div>
    </div>
    </>
    
  );
};
export default FilterSelect;
