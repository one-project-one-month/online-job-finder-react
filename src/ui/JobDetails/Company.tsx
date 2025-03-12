import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Company = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const galleryImages = [
        '/job1.png',
        '/job1.png',
        
      ];
  return (
    <div className='p-6'>

        <div>
            <h1 className='text-xl font-bold'>About Company</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil blanditiis temporibus odio voluptates ex recusandae exercitationem quam? Commodi inventore ratione, fugit eveniet numquam sequi saepe nam reiciendis dignissimos at harum.</p>
        </div>

        <h1 className='text-xl font-bold'>Website</h1>
        <Link to="/">https://www.google.com</Link>

        <h1 className='text-xl font-bold'>Industry</h1>
        <p>Internet product</p>

        <h1 className='text-xl font-bold'>Employee size</h1>
        <p>132,121 Employees</p>

        <h1 className='text-xl font-bold'>Head office</h1>
        <p>Mountain View, California, Amerika Serikat</p>

        <h1 className='text-xl font-bold'>Company Gallery</h1>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-2'>
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className='relative cursor-pointer'
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <img
              src={image} alt={`Gallery ${index + 1}`}
              className='w-full h-auto rounded-lg shadow-md'
            />
            {index ===1 && (
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg'>
                <span className='text-white font-bold'>+5 pictures</span>
              </div>
            )}
          </div>
        ))}
      </div>

        



    </div>
    
  )
}

export default Company
