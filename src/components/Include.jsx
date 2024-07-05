import React from 'react'

import play from "../assets/icons/play_circle.png"
import folder from "../assets/icons/folder.png"
import premium from "../assets/icons/premium.png"
import school from "../assets/icons/school.png"
import community from "../assets/icons/communities.png"
import info from "../assets/icons/info.png"

export default function Include() {
  return (
    <>
        <section className=' w-full h-full lg:h-screen bg-blue-950 p-10'>
            <h2 className='d text-white font-semibold text-xl'>
                What's Included
            </h2>
            <p className=' text-white text-xs mt-8'>
            All your resources in one place
            </p>
            <div className=' mt-10 flex flex-col lg:flex-row items-center justify-between mx-5 lg:mx-2'>
                <div className='w-full md:w-1/2 lg:w-1/3 h-auto pr-12 mt-4 lg:mt-0'>
                    <img src={play}/>
                    <h3 className=' text-white text-lg font-semibold mt-2'>
                    Access to recorded Classes
                    </h3>
                    <p className=' text-white text-xs mt-5 leading-6'>
                    Gain the expertise to analyze data effectively and 
                    extract valuable insights for decision making.
                    </p>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 h-auto pr-12 mt-4 lg:mt-0'>
                    <img src={folder}/>
                    <h3 className=' text-white text-lg font-semibold mt-2'>
                    Resources
                    </h3>
                    <p className=' text-white text-xs mt-5 leading-6'>
                    Gain the expertise to analyze data effectively and 
                    extract valuable insights for decision making.
                    </p>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 h-auto pr-12 mt-4 lg:mt-0'>
                    <img src={premium}/>
                    <h3 className=' text-white text-lg font-semibold mt-2'>
                    Certificate
                    </h3>
                    <p className=' text-white text-xs mt-5 leading-6'>
                    After completing your course, you’ll receive a certificate 
                    to celebrate the achievement and brag about it. 
                    </p>
                </div>
            </div>
            <div className=' mt-10 flex flex-col lg:flex-row items-center justify-between mx-5 lg:mx-2'>
                <div className='w-full md:w-1/2 lg:w-1/3 h-auto pr-12'>
                    <img src={school}/>
                    <h3 className=' text-white text-lg font-semibold mt-2'>
                    Practical Classes
                    </h3>
                    <p className=' text-white text-xs mt-5 leading-6'>
                    Gain the expertise to analyze data effectively and 
                    extract valuable insights for decision making.
                    </p>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 h-auto pr-12 mt-4 lg:mt-0'>
                    <img src={community}/>
                    <h3 className=' text-white text-lg font-semibold mt-2'>
                    Communities
                    </h3>
                    <p className=' text-white text-xs mt-5 leading-6'>
                    Gain the expertise to analyze data effectively and 
                    extract valuable insights for decision making.
                    </p>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 h-auto pr-12 mt-4 lg:mt-0'>
                    <img src={info}/>
                    <h3 className=' text-white text-lg font-semibold mt-2'>
                    Access to recorded support
                    </h3>
                    <p className=' text-white text-xs mt-5 leading-6'>
                    You have direct access to the instructor and your 
                    peers with an exclusive channel on Slack 
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}
