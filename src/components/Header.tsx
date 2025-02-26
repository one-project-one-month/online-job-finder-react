import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 w-full'>
      <h1 className='text-2xl font-bold'>Hello <br /> Orlando Diggs</h1>
      <img src="/profile.jpg" alt="" className=' w-10 h-10 rounded-full
      '/>
    </div>
  )
}

export default Header
