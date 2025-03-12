import ApplyButton from '@/ui/JobList/ApplyButton';
import FilterButton from '@/ui/JobList/FilterButton';
import FilterRadio from '@/ui/JobList/FilterRadio';
import FilterRange from '@/ui/JobList/FilterRange';
import FilterSelect from '@/ui/JobList/FilterSelect';
import FilterTitle from '@/ui/JobList/FilterTitle';


const JobFilter = () => {
  return (
    <div className="container p-5 ">
        <FilterTitle/>
        <h1 className="text-lg font-medium my-2 " >Filter Jobs</h1> 
        <div className="m-2">
          <FilterRadio/>
          <FilterButton/>
          <FilterSelect/>
          <FilterRange/>
        </div>
        <ApplyButton/>
    </div>
  )
}

export default JobFilter