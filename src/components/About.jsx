import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full pt-16 h-fit  pb-10 bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-10'>
                I am Yugal Kishor, a final year student at IIT (ISM), Dhanbad pursuing B. Tech. in Mechanical Engineering.
            </p>
            <br />
            <div>
                <p className='text-2xl font-semibold  w-fit mb-2'>Education</p>
                <ul className='list-disc pl-4'>
                    <li className='mb-2'>
                        <p className='text-xl font-medium'>IIT (ISM), Dhanbad</p>
                        <div className='px-2 text-gray-400'>
                        <p>B.Tech. - Mechanical Engineering (2020-2024)</p>
                        <p>Current CGPA - 7.96</p>
                        </div>
                    </li>
                    <li>
                        <p className='text-xl '>GD DAV Public School, Bhandarkola, Deoghar</p>
                        <div className='px-2 text-gray-400'>
                        <p>Class 12 (PCM) - CBSE (2019-2020)</p>
                        <p>Percentage - 95.2%</p>
                        </div>
                    </li>
                    <li>
                        <p className='text-xl '>GD DAV Public School, Bhandarkola, Deoghar</p>
                        <div className='px-2 text-gray-400'>
                        <p>Class 10 - CBSE (2017-2018)</p>
                        <p>Percentage - 95.6%</p>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default About