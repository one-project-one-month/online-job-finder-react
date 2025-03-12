import { Button } from '@/components/ui/button'
import React from 'react'

const Description = () => {
  return (
    <div className='p-6'>
      {/* description */}
      <div className="mb-2">
        <h1>Job Description</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sed, dolorum, mollitia velit ipsam repellat at nulla, aliquid eligendi laboriosam earum quis molestiae harum minima adipisci. Porro saepe amet corporis!
        </p>
        <Button>Read more</Button>
      </div>

      {/* Requirements */}
      <div className='mb-2'>
        <h1 className='text-xl font-bold'>Requirements</h1>
        <ul className='list-disc'>
          <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
          <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur & adipisci velit.</li>
          <li>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
          </li>
        </ul>
      </div>

      {/* location */}
      <div className='mb-2'>
          <h1 className='text-xl font-bold'>Location</h1>
          <p>Overlook Avenue, Belleville, NJ, USA</p>
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.41941558468182!3d37.77492997975921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1633023222539!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      </div>

      {/* Information */}
      <div className="">
        <h1 className='text-xl font-bold'>Informations</h1>

        <div className="item  pb-2 border-b-gray-200 border-b-2">
          <h1 className='text-lg font-semibold'>Position</h1>
          <p>Senior Designer</p>
        </div>

        <div className="item  pb-2 border-b-gray-200 border-b-2">
          <h1 className='text-lg font-semibold'>Position</h1>
          <p>Senior Designer</p>
        </div>
      </div>

      {/* Facilities and others */}
      <div className="">
        <h1 className='text-xl font-bold'>Facilities and Otheres</h1>
        <ul className='list-disc'>
          <li>Medical</li>
          <li>Dental</li>
          <li>Technical Cartification</li>
          <li>Meal Allowance</li>
          <li>Transport Allowance</li>
          <li>Regular Hours</li>
          <li>Mondays-Fridays</li>
        </ul>
        
      </div>


    </div>
  )
}

export default Description
      