import React from 'react'
import { company_logos } from '../assets/assets'

const TrustedBy = () => {
  return (
    <div className='flex flex-col items-center space-y-5'>
        
        <h1>Trusted by leading companies</h1>
        <div className='flex items-center justify-center gap-4 p-4'>
            
            {company_logos.map((logo, index) => (
          <img key={index} src={logo} className='w-24' />
        ))} 
        
        
        </div>
    </div>
  )
}

export default TrustedBy