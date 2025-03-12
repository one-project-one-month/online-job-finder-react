import JobCard from '@/ui/JobList/JobCard';
import JobSearch from '@/ui/JobList/JobSearch';
const ListingPage = () => {
  return (
    <>
    <div className="m-4 container-fluid">
    <JobSearch/>
    <JobCard/>
    </div>
    </>
    
  )
}

export default ListingPage
