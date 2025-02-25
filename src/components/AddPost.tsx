import React from 'react'

const AddPost = () => {
  return (
    <div className='flex flex-col justify-between w-full'>
    <h1 className='text-2xl'>Add Post</h1>
    <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img className="mx-auto block h-12 rounded-full sm:mx-0 sm:shrink-0" src="/profile.jpg" alt="" />
        <div className="">
            <div className="space-y-0.5">
            <p className="text-md font-semibold text-black">Orlando Diggs</p>
            <p className="font-medium text-gray-500">California, USA</p>
            </div>
        </div>
    </div>


      <form>
  <div className="space-y-12">
    <div className="border-b border-gray-900/10 pb-12">
      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-5">
        <div className="sm:col-span-4">
          <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">Post Title</label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input type="text" name="username" id="username" className="block w-full min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Write the title of your post here."/>
            </div>
          </div>
        </div>
    </div>
    <div className="col-span-full">
          <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">Description</label>
          <div className="mt-2">
            <textarea name="about" id="about" rows="3"
             className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 
             focus:outline-indigo-600 sm:text-sm/6"
             placeholder='What do you want to talk about?'></textarea>
          </div>
        </div>
        </div>
        </div>
        </form>
        </div>
  )
}

export default AddPost
