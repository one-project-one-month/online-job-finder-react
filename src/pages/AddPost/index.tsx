import AddPost from "@/components/AddPost";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";
const AddPage = () => {
  return <div>
    {/* Header */}
    <div className='flex justify-between items-center w-full'>
      <IoIosArrowRoundBack />
      <h1 className="text-orange-400">
        Post
      </h1>
    </div>

    {/* Add Post */}

    {/* Post Author */}
     <AddPost/>



  </div>
}

export default AddPage
