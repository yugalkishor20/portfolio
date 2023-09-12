import React from 'react'
import project1 from '../assets/image1.jpeg'
import project2 from '../assets/image2.jpeg'
import project3 from '../assets/image3.jpeg'
import project4 from '../assets/image4.jpeg'

const Portfolio = () => {

  const portfolios = [
    {
      id:1,
      src:project1
    },
    {
      id:2,
      src:project2
    },
    {
      id:3,
      src:project3
    },
    {
      id:4,
      src:project4
    },
  ]

  return (
   

    <div name='portfolio' className='bg bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20 h-fit'>
      <div className='max-w-screen-lg p-4 flex flex-col mx-auto justify-center w-full h-full'>
        <div className='pb-8'>
          <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Checkout some of my works</p>
        </div>
        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-10 px-12 sm:px-0'>

          {portfolios.map(({id,src})=>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt="project1"  className='w-full rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Demo</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
              </div>
            </div>
          
          ))}
        </div> 
      </div>
    </div>
  )
}

export default Portfolio