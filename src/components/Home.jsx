import React from 'react'
import myImage from '../assets/myImage.jpeg'
import {MdOutlineKeyboardArrowRight,  MdOutlineFileDownload} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='  pt-16 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
      <div className='max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center md:justify-between h-full sm:px-8 sm:flex-row '>
        <div className='flex flex-col justify-center'>
          <h2 className='text-4xl sm:text-5xl text-white font-bold'>I'm Yugal Kishor</h2>
          <p className='text-gray-500 text-2xl font-medium py-4 max-w-md'>
            Full Stack Developer
          </p>
          <div className='flex flex-col md:flex-row'>
            <Link to='portfolio' smooth duration={500} className='group hover:scale-105 duration-300 text-white w-fit px-5 py-2 my-2 flex items-center rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300 pl-1'>
              <MdOutlineKeyboardArrowRight size={25}/>
            </span>
            </Link> 
            <a href="/Resume.pdf" download className='hover:scale-105 duration-300 text-white w-fit px-5 py-2 my-2 md:mx-4 flex items-center  rounded-lg bg-gradient-to-r md:from-orange-500 md:to-orange-400 from-cyan-500 to to-blue-500  cursor-pointer'>
              Resume
              <span className='pl-1'>
              <MdOutlineFileDownload size={25}/>
            </span>
            </a>            
          </div>
        </div>
        <div className=' w-72 my-8 mx-4'>
          <img src={myImage} alt="myImage" className=' rounded-3xl  mx-5 ml-0 md:ml-5 w-2/3 md:w-full  ' />
        </div>
      </div>
    </div>
  )
}

export default Home