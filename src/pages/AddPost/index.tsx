import AddPost from "@/components/AddPost";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";
const AddPage = () => {
  return <div className="w-full">
    {/* Header */}
    <div className='relative flex justify-between items-center p-4'>
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
