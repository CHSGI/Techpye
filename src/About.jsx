import React from 'react'
import vector1 from "./assets/vectors/Vector-1.png";
import vector2 from "./assets/vectors/Vector-2.png"
import vector3 from "./assets/vectors/Vector-3.png"
import vector4 from "./assets/vectors/Vector.png"
import img1 from "./assets/img/img1.png";
import img2 from "./assets/img/img 2.png";
import shape1 from "./assets/img/shape 1.png";
import shape2 from "./assets/img/shape 2.png";
import shape3 from "./assets/img/shape 3.png";
import overlay from "./assets/img/overlay.png";
import portrait from "./assets/img/portrait.png";
import linkledin from "./assets/img/linkedin.png" 
export default function About() {
  return (
    <>

        <section className=' w-full h-aboutHeight relative'>
            <div className=' w-full h-full bg-blue-600 flex items-center justify-center flex-col'>
                <img src={vector1} 
                 className=' absolute top-6 left-6 lg:w-24 w-20'
                />
                <img src={vector2} 
                 className=' absolute right-6 top-72 lg:w-24 w-20'
                />
                <img src={vector3} 
                 className=' absolute top-6 right-6 lg:w-20 w-16'
                />
                <img src={vector4} 
                 className=' absolute top-72 left-6 lg:w-20 w-16'
                />

                <h3 className=' font-semibold text-2xl lg:w-1/4 w-5/6 text-center text-white mb-3'>
                    We Believe in <span className='text-orange-400'>Transforming</span> the World Through Digital Skill
                </h3>
                <p className=' w-2/3 lg:w-1/3 text-white text-xs text-center'>
                  We provide an innovative and contemporary approach
                  that addresses a world full of challenges and opportunities.
                </p>
            </div>
        </section>

        {/* vision section  */}
        <section className=' w-full h-full flex items-center lg:flex-row flex-col'>
          <div className='lg:w-1/2 w-full lg:h-screen h-80 py-20 bg-slate-800 flex justify-center items-center flex-col text-center text-white'>
            <h2 className=' font-semibold text-2xl'> Our Vision</h2>
            <p className=' w-1/2 text-xs leading-6'>
              We are a dedicated social enterprise committed to expanding educational access and 
              creating a profound impact for millions of learners worldwide. 
            </p>
          </div>
          <div className=' lg:w-1/2 w-full lg:h-screen h-80 flex items-center justify-center'>
            <img src={img1} className=' lg:w-2/3 w-2/5'/>
          </div>
        </section>

         {/* Mision section  */}
         <section className=' w-full h-full lg:h-screen flex items-center lg:flex-row-reverse flex-col'>
          <div className=' lg:w-1/2 w-full lg:h-screen h-80 py-20 bg-slate-800 flex justify-center items-center flex-col text-center text-white'>
            <h2 className=' font-semibold text-2xl'> Our Mision</h2>
            <p className=' w-1/2 text-xs leading-6'>
            To empower Nigerian youth with essential digital skills, 
            paving the way for technological proficiency and innovation in the global arena.
            </p>
          </div>
          <div className='lg:w-1/2 w-full lg:h-full h-80 flex items-center justify-center'>
            <img src={img2} className=' lg:w-2/3 w-2/5'/>
          </div>
        </section>

        
        <section className=' w-full lg:h-screen h-full py-10 bg-blue-200 font-sans'>
          <h2 className=' text-2xl font-semibold pt-4 pl-10'>
            How we do it !
          </h2>
          <p className='pt-4 pl-10 pr-5 lg:w-1/2 text-sm lg:leading-6 leading-5 '>
            The education gap remains a significant challenge, but the world keeps evolving. 
            We can't afford to wait and play catch-up. That's why we need everyone on board. 
            In the coming years, the true mark of illiteracy won't be a lack of traditional education, 
            but a lack of digital skills needed to navigate our increasingly digital world.
          </p>
          <div className=' w-10/12 h-auto mx-auto flex items-center justify-between lg:flex-row flex-col '>

            <div className=' lg:w-1/3 w-full h-80 bg-white lg:mr-6 mt-10 rounded-xl'>
              <img src={shape1} className='pt-7 pl-5 w-28'/>
              <h3 className='mt-6 ml-5 text-blue-400 font-semibold'>Curriculum</h3>
              <p className=' px-5 pt-3 text-xs leading-6 '>
                Actionable Curriculum: Our curriculum goes beyond 
                theory, focusing on practical, hands-on experience. 
                Learners develop not only technical skills, but also 
                the ability to effectively share their knowledge with 
                others, fostering a culture of collaboration and 
                innovation.
              </p>
            </div>

            <div className=' lg:w-1/3 w-full h-80 bg-white mt-10 lg:mr-6 rounded-xl'>
              <img src={shape2} className='pt-7 pl-5 w-24'/>
              <h3 className='mt-6 ml-5 text-blue-400 font-semibold'>Communities</h3>
              <p className=' px-5 pt-3 text-xs leading-6'>
                We cultivate vibrant communities where hundreds of 
                eager young learners support and inspire each other 
                on their tech journeys. Our supportive environment 
                provides the resources and encouragement they 
                need to thrive and make a lasting impact.
              </p>
            </div>

            <div className=' lg:w-1/3 w-full h-80 bg-white mt-10 rounded-xl'>
              <img src={shape3} className='pt-7 pl-5 w-24'/>
              <h3 className='mt-6 ml-5 text-blue-400 font-semibold'>Impact</h3>
              <p className=' px-5 pt-3 text-xs leading-6 '>
                By training youth leaders from diverse backgrounds, 
                we empower them to become multipliers. 
                They collaborate with us to extend our reach, 
                educating more individuals within their own 
                communities, creating a ripple effect of digital literacy.
              </p>
            </div>
          </div>
        </section>

        <section  style={{ backgroundImage: `url(${overlay})`, backgroundSize: 'cover', backgroundPosition: 'top center' }} 
          className=' w-full h-aboutHeight bg-blue-600 bg-blend-overlay flex items-center justify-center text-center'>
          {/* <img src={overlay} className=' bg-contain'/> */}
          <p className='w-4/5 lg:w-1/2 text-white text-sm leading-7'> 
            The education gap remains a significant challenge, but the world keeps evolving. 
            We can't afford to wait and play catch-up. That's why we need everyone on board. 
            In the coming years, the true mark of illiteracy won't be a lack of traditional education, 
            but a lack of digital skills needed to navigate our increasingly digital world.
          </p>
        </section>

        <section className=' w-full min-h-screen px-16 pt-10'>
          <h2 className=' w-3/5 lg:w-full font-semibold text-lg lg:text-xl'>
            A Vibrant Industry, Requires a diverse Team
          </h2>
          <p className=' lg:mt-5 mt-2  w-2/3 lg:w-2/5 text-xs'>
            We recognize the role of individuality and the diverse range of technical skills they exist. 
            That's why our team consists of experts from various technical backgrounds, ensuring that we 
            provide the best learning experience for all our students.
          </p>

          <div className='w-full h-auto py-4 mt-5 flex flex-col lg:flex-row items-center justify-between'>
            <div className=' w-full lg:w-80 h-auto  mx-10 my-5'>
              <img src={portrait} className=' w-full'/>
              <div className=' h-16 flex flex-row items-center'>
                <div className=' bg-blue-200 w-4/5 h-full py-1 pr-1'>
                  <h2 className=' ml-2 text-sm font-semibold'>
                  Affiong Uno
                  </h2>
                  <p className=' ml-2 text-xs leading-3'>Co- Founder & Partner </p>
                  <p className=' ml-2 text-xs '>Head of Strategy & Planning </p>
                </div>
                <div className=' w-1/5 h-full flex justify-center items-center bg-blue-200 ml-1 cursor-pointer'>
                  <img src={linkledin} className=' w-6'/>
                </div>
              </div>
            </div>

            <div className=' w-full lg:w-80 h-auto  mx-10 my-5'>
              <img src={portrait} className=' w-full'/>
              <div className=' h-16 flex flex-row items-center'>
                <div className=' bg-blue-200 w-4/5 h-full py-1 pr-1'>
                  <h2 className=' ml-2 text-sm font-semibold'>
                  Affiong Uno
                  </h2>
                  <p className=' ml-2 text-xs leading-3'>Co- Founder & Partner </p>
                  <p className=' ml-2 text-xs '>Head of Strategy & Planning </p>
                </div>
                <div className=' w-1/5 h-full flex justify-center items-center bg-blue-200 ml-1 cursor-pointer'>
                  <img src={linkledin} className=' w-6'/>
                </div>
              </div>
            </div>

            <div className=' w-full lg:w-80 h-auto  mx-10 my-5'>
              <img src={portrait} className=' w-full'/>
              <div className=' h-16 flex flex-row items-center'>
                <div className=' bg-blue-200 w-4/5 h-full py-1 pr-1'>
                  <h2 className=' ml-2 text-sm font-semibold'>
                  Affiong Uno
                  </h2>
                  <p className=' ml-2 text-xs leading-3'>Co- Founder & Partner </p>
                  <p className=' ml-2 text-xs '>Head of Strategy & Planning </p>
                </div>
                <div className=' w-1/5 h-full flex justify-center items-center bg-blue-200 ml-1 cursor-pointer'>
                  <img src={linkledin} className=' w-6'/>
                </div>
              </div>
            </div>

          </div>
          <div className='w-full h-auto py-2 flex flex-col lg:flex-row items-center justify-between'>
            <div className=' w-full lg:w-80 h-auto  mx-10 my-5'>
              <img src={portrait} className=' w-full'/>
              <div className=' h-16 flex flex-row items-center'>
                <div className=' bg-blue-200 w-4/5 h-full py-1 pr-1'>
                  <h2 className=' ml-2 text-sm font-semibold'>
                  Affiong Uno
                  </h2>
                  <p className=' ml-2 text-xs leading-3'>Co- Founder & Partner </p>
                  <p className=' ml-2 text-xs '>Head of Strategy & Planning </p>
                </div>
                <div className=' w-1/5 h-full flex justify-center items-center bg-blue-200 ml-1 cursor-pointer'>
                  <img src={linkledin} className=' w-6'/>
                </div>
              </div>
            </div>

            <div className=' w-full lg:w-80 h-auto  mx-10 my-5'>
              <img src={portrait} className=' w-full'/>
              <div className=' h-16 flex flex-row items-center'>
                <div className=' bg-blue-200 w-4/5 h-full py-1 pr-1'>
                  <h2 className=' ml-2 text-sm font-semibold'>
                  Affiong Uno
                  </h2>
                  <p className=' ml-2 text-xs leading-3'>Co- Founder & Partner </p>
                  <p className=' ml-2 text-xs '>Head of Strategy & Planning </p>
                </div>
                <div className=' w-1/5 h-full flex justify-center items-center bg-blue-200 ml-1 cursor-pointer'>
                  <img src={linkledin} className=' w-6'/>
                </div>
              </div>
            </div>

            <div className=' w-full lg:w-80 h-auto  mx-10 my-5'>
              <img src={portrait} className=' w-full'/>
              <div className=' h-16 flex flex-row items-center'>
                <div className=' bg-blue-200 w-4/5 h-full py-1 pr-1'>
                  <h2 className=' ml-2 text-sm font-semibold'>
                  Affiong Uno
                  </h2>
                  <p className=' ml-2 text-xs leading-3'>Co- Founder & Partner </p>
                  <p className=' ml-2 text-xs '>Head of Strategy & Planning </p>
                </div>
                <div className=' w-1/5 h-full flex justify-center items-center bg-blue-200 ml-1 cursor-pointer'>
                  <img src={linkledin} className=' w-6'/>
                </div>
              </div>
            </div>

          </div>
        </section>
    </>
  )
}
