import React from 'react'
import project1 from '../assets/videoSearchingWebsite.png'
import project2 from '../assets/portfolio.png'
import project3 from '../assets/eCommerce.png'
import project4 from '../assets/todoList.png'

const Portfolio = () => {

  const portfolios = [
    {
      id:1,
      src:project1,
      title:"Video Searching Website",
      github:"https://github.com/yugalkishor20/Video-Searching-Website-ReactJS",
      link:"https://video-searching-website.netlify.app/"
    },
    {
      id:2,
      src:project2,
      title:"Portfolio",
      github:"https://github.com/yugalkishor20/portfolio",
      link:"https://yugal-kishor-portfolio.netlify.app/"
    },
    {
      id:3,
      src:project3,
      title:"E-Commerce Backend",
      github:"https://github.com/yugalkishor20/e-commerce-backend",
      demo:"text-gray-600"
    },
    {
      id:4,
      src:project4,
      title:"Todo List",
      code:"text-gray-600",
      demo:"text-gray-600"
    },
  ]

  return (
   

    <div name='portfolio' className='bg bg-gradient-to-b from-black to-gray-800 w-full text-white pt-16 h-fit'>
      <div className='max-w-screen-lg p-4 flex flex-col mx-auto justify-center w-full h-full'>
        <div className='pb-8'>
          <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Checkout some of my works</p>
        </div>
        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-10 px-12 sm:px-0'>

          {portfolios.map(({id,src,title,link,github,demo,code})=>(
            <div key={id} className='shadow-md  text-gray-400 shadow-gray-600 rounded-lg'>
              <a href={link} target='_blank' rel='noreferrer'>
              <img src={src} alt="project1"  className='w-full rounded-md duration-200 hover:scale-105' />
              <div className='text-center py-2 my-2 font-semibold'>{title}</div>
              </a>
              <div className='flex items-center justify-center border-t border-gray-800 rounded-lg'>
                <a href={link} className={'w-1/2 px-6 py-2 m-2 text-center duration-200 hover:scale-105 hover:text-white '+demo} target='_blank' rel='noreferrer'>Demo</a>
                <a href={github} className={'w-1/2 px-6 py-2 m-2 text-center duration-200 hover:scale-105 hover:text-white '+code} target='_blank' rel='noreferrer'>Code</a>
              </div>
            </div>
          
          ))}
        </div> 
      </div>
    </div>
  )
}

export default Portfolio