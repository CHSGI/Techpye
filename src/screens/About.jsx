import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img 2.png";
import shape1 from "../assets/img/shape 1.png";
import shape2 from "../assets/img/shape 2.png";
import shape3 from "../assets/img/shape 3.png";
import overlay from "../assets/img/overlay.png";
import portrait from "../assets/img/portrait.png";
import linkedin from "../assets/img/linkedin.png" 
import NavBar from "../components/NavBar";
export default function About() {
  return (
    <>
        <NavBar />
        <section className='relative w-full mt-20 h-aboutHeight'>
            <div className='flex flex-col items-center justify-center w-full h-full bg-blue-600 '>
                <img src="#" 
                 className='absolute w-20 top-6 left-6 lg:w-24'
                />
                <img src="#" 
                 className='absolute w-20 right-6 top-72 lg:w-24'
                />
                <img src="#" 
                 className='absolute w-16 top-6 right-6 lg:w-20'
                />
                <img src="#" 
                 className='absolute w-16 top-72 left-6 lg:w-20'
                />

                <h3 className='w-5/6 mb-3 text-2xl font-semibold text-center text-white lg:w-1/4'>
                    We Believe in <span className='text-orange-400'>Transforming</span> the World Through Digital Skill
                </h3>
                <p className='w-2/3 text-xs text-center text-white lg:w-1/3'>
                  We provide an innovative and contemporary approach
                  that addresses a world full of challenges and opportunities.
                </p>
            </div>
        </section>

        {/* vision section  */}
        <section className='flex flex-col items-center w-full h-full lg:flex-row'>
          <div className='flex flex-col items-center justify-center w-full py-20 text-center text-white lg:w-1/2 lg:h-screen h-80 bg-slate-800'>
            <h2 className='text-2xl font-semibold '> Our Vision</h2>
            <p className='w-1/2 text-xs leading-6 '>
              We are a dedicated social enterprise committed to expanding educational access and 
              creating a profound impact for millions of learners worldwide. 
            </p>
          </div>
          <div className='flex items-center justify-center w-full lg:w-1/2 lg:h-screen h-80'>
            <img src={img1} className='w-2/5 lg:w-2/3'/>
          </div>
        </section>

         {/* Mision section  */}
         <section className='flex flex-col items-center w-full h-full lg:h-screen lg:flex-row-reverse'>
          <div className='flex flex-col items-center justify-center w-full py-20 text-center text-white lg:w-1/2 lg:h-screen h-80 bg-slate-800'>
            <h2 className='text-2xl font-semibold '> Our Mision</h2>
            <p className='w-1/2 text-xs leading-6 '>
            To empower Nigerian youth with essential digital skills, 
            paving the way for technological proficiency and innovation in the global arena.
            </p>
          </div>
          <div className='flex items-center justify-center w-full lg:w-1/2 lg:h-full h-80'>
            <img src={img2} className='w-2/5 lg:w-2/3'/>
          </div>
        </section>

        
        <section className='w-full h-full py-10 font-sans bg-blue-200 lg:h-screen'>
          <h2 className='pt-4 pl-10 text-2xl font-semibold '>
            How we do it !
          </h2>
          <p className='pt-4 pl-10 pr-5 text-sm leading-5 lg:w-1/2 lg:leading-6 '>
            The education gap remains a significant challenge, but the world keeps evolving. 
            We can't afford to wait and play catch-up. That's why we need everyone on board. 
            In the coming years, the true mark of illiteracy won't be a lack of traditional education, 
            but a lack of digital skills needed to navigate our increasingly digital world.
          </p>
          <div className='flex flex-col items-center justify-between w-10/12 h-auto mx-auto lg:flex-row'>

            <div className='w-full mt-10 bg-white lg:w-1/3 h-80 lg:mr-6 rounded-xl'>
              <img src={shape1} className='pl-5 pt-7 w-28'/>
              <h3 className='mt-6 ml-5 font-semibold text-blue-400'>Curriculum</h3>
              <p className='px-5 pt-3 text-xs leading-6 '>
                Actionable Curriculum: Our curriculum goes beyond 
                theory, focusing on practical, hands-on experience. 
                Learners develop not only technical skills, but also 
                the ability to effectively share their knowledge with 
                others, fostering a culture of collaboration and 
                innovation.
              </p>
            </div>

            <div className='w-full mt-10 bg-white lg:w-1/3 h-80 lg:mr-6 rounded-xl'>
              <img src={shape2} className='w-24 pl-5 pt-7'/>
              <h3 className='mt-6 ml-5 font-semibold text-blue-400'>Communities</h3>
              <p className='px-5 pt-3 text-xs leading-6 '>
                We cultivate vibrant communities where hundreds of 
                eager young learners support and inspire each other 
                on their tech journeys. Our supportive environment 
                provides the resources and encouragement they 
                need to thrive and make a lasting impact.
              </p>
            </div>

            <div className='w-full mt-10 bg-white lg:w-1/3 h-80 rounded-xl'>
              <img src={shape3} className='w-24 pl-5 pt-7'/>
              <h3 className='mt-6 ml-5 font-semibold text-blue-400'>Impact</h3>
              <p className='px-5 pt-3 text-xs leading-6 '>
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
            className='flex items-center justify-center w-full text-center bg-blue-600 h-aboutHeight bg-blend-overlay'>
            <p className='w-4/5 text-sm leading-7 text-white lg:w-1/2'> 
              The education gap remains a significant challenge, but the world keeps evolving. 
              We can't afford to wait and play catch-up. That's why we need everyone on board. 
              In the coming years, the true mark of illiteracy won't be a lack of traditional education, 
              but a lack of digital skills needed to navigate our increasingly digital world.
            </p>
          </section>

        <section className='w-full min-h-screen px-16 pt-10 '>
          <h2 className='w-3/5 text-lg font-semibold lg:w-full lg:text-xl'>
            A Vibrant Industry, Requires a diverse Team
          </h2>
          <p className='w-2/3 mt-2 text-xs lg:mt-5 lg:w-2/5'>
            We recognize the role of individuality and the diverse range of technical skills they exist. 
            That's why our team consists of experts from various technical backgrounds, ensuring that we 
            provide the best learning experience for all our students.
          </p>

          <div className='flex flex-col items-center justify-between w-full h-auto py-4 mt-5 lg:flex-row'>
            <div className='w-full h-auto mx-10 my-5 lg:w-80'>
              <img src={portrait} className='w-full '/>
              <div className='flex flex-row items-center h-16 '>
                <div className='w-4/5 h-full py-1 pr-1 bg-blue-200 '>
                  <h2 className='ml-2 text-sm font-semibold '>
                  Affiong Uno
                  </h2>
                  <p className='ml-2 text-xs leading-3 '>Co- Founder & Partner </p>
                  <p className='ml-2 text-xs '>Head of Strategy & Planning </p>
                </div>
                <div className='flex items-center justify-center w-1/5 h-full ml-1 bg-blue-200 cursor-pointer '>
                  <img src={linkedin} className='w-6 '/>
                </div>
              </div>
            </div>

            <div className='w-full h-auto mx-10 my-5 lg:w-80'>
              <img src={portrait} className='w-full '/>
              <div className='flex flex-row items-center h-16 '>
                <div className='w-4/5 h-full py-1 pr-1 bg-blue-200 '>
                  <h2 className='ml-2 text-sm font-semibold '>
                  Affiong Uno
                  </h2>
                  <p className='ml-2 text-xs leading-3 '>Co- Founder & Partner </p>
                  <p className='ml-2 text-xs '>Head of Strategy & Planning </p>
                </div>
                <div className='flex items-center justify-center w-1/5 h-full ml-1 bg-blue-200 cursor-pointer '>
                  <img src={linkedin} className='w-6 '/>
                </div>
              </div>
            </div>

            <div className='w-full h-auto mx-10 my-5 lg:w-80'>
              <img src={portrait} className='w-full '/>
              <div className='flex flex-row items-center h-16 '>
                <div className='w-4/5 h-full py-1 pr-1 bg-blue-200 '>
                  <h2 className='ml-2 text-sm font-semibold '>
                  Affiong Uno
                  </h2>
                  <p className='ml-2 text-xs leading-3 '>Co- Founder & Partner </p>
                  <p className='ml-2 text-xs '>Head of Strategy & Planning </p>
                </div>
                <div className='flex items-center justify-center w-1/5 h-full ml-1 bg-blue-200 cursor-pointer '>
                  <img src={linkedin} className='w-6 '/>
                </div>
              </div>
            </div>

          </div>
          <div className='flex flex-col items-center justify-between w-full h-auto py-2 lg:flex-row'>
            <div className='w-full h-auto mx-10 my-5 lg:w-80'>
              <img src={portrait} className='w-full '/>
              <div className='flex flex-row items-center h-16 '>
                <div className='w-4/5 h-full py-1 pr-1 bg-blue-200 '>
                  <h2 className='ml-2 text-sm font-semibold '>
                  Affiong Uno
                  </h2>
                  <p className='ml-2 text-xs leading-3 '>Co- Founder & Partner </p>
                  <p className='ml-2 text-xs '>Head of Strategy & Planning </p>
                </div>
                <div className='flex items-center justify-center w-1/5 h-full ml-1 bg-blue-200 cursor-pointer '>
                  <img src={linkedin} className='w-6 '/>
                </div>
              </div>
            </div>

            <div className='w-full h-auto mx-10 my-5 lg:w-80'>
              <img src={portrait} className='w-full '/>
              <div className='flex flex-row items-center h-16 '>
                <div className='w-4/5 h-full py-1 pr-1 bg-blue-200 '>
                  <h2 className='ml-2 text-sm font-semibold '>
                  Affiong Uno
                  </h2>
                  <p className='ml-2 text-xs leading-3 '>Co- Founder & Partner </p>
                  <p className='ml-2 text-xs '>Head of Strategy & Planning </p>
                </div>
                <div className='flex items-center justify-center w-1/5 h-full ml-1 bg-blue-200 cursor-pointer '>
                  <img src={linkedin} className='w-6 '/>
                </div>
              </div>
            </div>

            <div className='w-full h-auto mx-10 my-5 lg:w-80'>
              <img src={portrait} className='w-full '/>
              <div className='flex flex-row items-center h-16 '>
                <div className='w-4/5 h-full py-1 pr-1 bg-blue-200 '>
                  <h2 className='ml-2 text-sm font-semibold '>
                  Affiong Uno
                  </h2>
                  <p className='ml-2 text-xs leading-3 '>Co- Founder & Partner </p>
                  <p className='ml-2 text-xs '>Head of Strategy & Planning </p>
                </div>
                <div className='flex items-center justify-center w-1/5 h-full ml-1 bg-blue-200 cursor-pointer '>
                  <img src={linkedin} className='w-6 '/>
                </div>
              </div>
            </div>

          </div>
        </section>
    </>
  )
}
