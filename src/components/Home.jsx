import React from 'react'
import myImage from '../assets/myImage.jpeg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-fit pt-20 md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-8 sm:flex-row '>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-5xl text-white font-bold'>I'm am Yugal Kishor</h2>
          <p className='text-gray-500 text-2xl font-medium py-4 max-w-md'>
           Full Stack Developer
          </p>
          <div>
            <Link to='portfolio' smooth duration={500} className='group hover:scale-105 duration-300 text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-400 to-orange-600 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300 ml-1'>
              <MdOutlineKeyboardArrowRight size={25}/>
            </span>
            </Link>
            
          </div>
        </div>
        <div className='h-1/2 aspect-square'>
          <img src={myImage} alt="myImage" className='rounded-2xl shadow-white mx-5 ml-5 w-2/3 md:w-full  mb-10' />
        </div>
      </div>
    </div>
  )
}

export default Home