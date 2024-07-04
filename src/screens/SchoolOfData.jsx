import React from 'react'
import "./SchoolOfData.css"
import NavBar from "../components/NavBar.jsx"
import shape from "../assets/img/Group 12042.png"
import { Swiper,SwiperSlide } from 'swiper/react'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function 
() {
  return (
    <>
        <section>
            <NavBar />

            <div className='w-full h-auto lg:h-aboutHeight bg-blue-200 mt-20 px-5 py-8 flex items-center justify-between flex-col lg:flex-row'>
                <div className=' py-3 lg:mr-10'>
                    <h2 className=' text-2xl font-semibold mb-3 '>
                        The School of Data
                    </h2>
                    <p className=' text-xs leading-5'>
                        Discover the meaning of data and learn essential skills that will help you 
                        make informed business decisions. Explore topics such as data streaming, 
                        business analytics, effective data visualization, in-depth data analysis, 
                        programming for data science, engineering data solutions, designing 
                        data systems, and predicting future trends.
                    </p>
                </div>
                <img src={shape}  className=' py-4 lg:py-0 px-3 lg:w-2/3'/>
            </div>
        </section>

        <section className=' w-full h-auto md:h-auto'>
            <div className=' w-full h-14 bg-white flex flex-row items-center'>
                <div className='w-1/3 md:w-1/4 lg:w-1/5 h-full text-sm font-semibold cursor-pointer hover:bg-slate-300 duration-700 border-b-2 border-blue-700 flex items-center justify-center'>
                    Data Analytics
                </div>
                <div className='w-1/3 lg:w-1/5 h-full text-sm font-semibold cursor-pointer hover:bg-slate-300 duration-700 border-b-2 flex items-center justify-center'>
                    Data Science
                </div>
            </div>

            <div className=' lg:mx-16 md:mx-5 mx-2 flex flex-col lg:flex-row items-center justify-between'>
            
                    <div className=' w-4/6 md:w-1/2 lg:w-1/4 px-10 py-7 my-8 mx-auto md:mx-0 bg-blue-200'>
                        <div className=' mt-8 p-1 w-20 text-center text-xs mb-5 text-green-500 font-semibold rounded-3xl bg-white'> 
                            Available</div>
                        <h2 className=' text-base font-semibold'>
                            Data Analytics using Excel</h2>
                        <p className=' text-xs leading-6 my-3'>
                        Gain the expertise to analyze data effectively and 
                        extract valuable insights for decision making 
                        across diverse fields. Gain the expertise to analyze 
                        data effectively and extract valuable insights for 
                        decision making across diverse fields.
                        </p>
                        <p className=' text-xs mb-6 font-thin text-slate-600'>
                        12-Weeks Class <br />
                        Weekend: Saturdays & Sunday <br />
                        6pm-8pm WAT
                        </p>
                        <a href="" className=' w-5/6 text-center block mx-auto text-white font-semibold text-xs p-3 bg-blue-900'>
                            REGISTER FOR COURSE</a>
                    </div>
                    
                    <div className=' w-4/6 md:w-1/2 lg:w-1/4 px-10 py-7 my-8 mx-auto md:mx-0 bg-blue-200'>
                        <div className=' mt-8 p-1 w-20 text-center text-xs mb-5 text-green-500 font-semibold rounded-3xl bg-white'> 
                            Available</div>
                        <h2 className=' text-base font-semibold'>
                            Data Analytics using Excel</h2>
                        <p className=' text-xs leading-6 my-3'>
                        Gain the expertise to analyze data effectively and 
                        extract valuable insights for decision making 
                        across diverse fields. Gain the expertise to analyze 
                        data effectively and extract valuable insights for 
                        decision making across diverse fields.
                        </p>
                        <p className=' text-xs mb-6 font-thin text-slate-600'>
                        12-Weeks Class <br />
                        Weekend: Saturdays & Sunday <br />
                        6pm-8pm WAT
                        </p>
                        <a href="" className=' w-5/6 text-center block mx-auto text-white font-semibold text-xs p-3 bg-blue-900'>
                            REGISTER FOR COURSE</a>
                    </div>
                    
                    <div className=' w-4/6 md:w-1/2 lg:w-1/4 px-10 py-7 my-8 mx-auto md:mx-0 bg-blue-200'>
                        <div className=' mt-8 p-1 w-20 text-center text-xs mb-5 text-green-500 font-semibold rounded-3xl bg-white'> 
                            Available</div>
                        <h2 className=' text-base font-semibold'>
                            Data Analytics using Excel</h2>
                        <p className=' text-xs leading-6 my-3'>
                        Gain the expertise to analyze data effectively and 
                        extract valuable insights for decision making 
                        across diverse fields. Gain the expertise to analyze 
                        data effectively and extract valuable insights for 
                        decision making across diverse fields.
                        </p>
                        <p className=' text-xs mb-6 font-thin text-slate-600'>
                        12-Weeks Class <br />
                        Weekend: Saturdays & Sunday <br />
                        6pm-8pm WAT
                        </p>
                        <a href="" className=' w-5/6 text-center block mx-auto text-white font-semibold text-xs p-3 bg-blue-900'>
                            REGISTER FOR COURSE</a>
                    </div>
            </div>
        </section>

        <section className=' w-full h-auto bg-blue-600 pt-7 pb-9 overflow-hidden'>
                <p className=' text-white ml-10 text-xl lg:text-2xl font-medium'>
                    The perfect Time To Start is Now!</p>
                <p className=' w-4/5 lg:w-full text-xs ml-10 mt-8 text-white'>
                The best time to get a tech skill was yesterday,  another opportune moment is today.
                </p>
                <p className='ml-10 text-white text-xl lg:text-2xl mt-8 mb-7'>
                MOST POPULAR COURSES
                </p>

        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
                640:{
                    slidesPerView:1,
                    spaceBetween:10
                },
                768:{
                    slidesPerView:2,
                    spaceBetween:10
                },
                1024:{
                    slidesPerView:3,
                    spaceBetween:0
                }
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={""}
            onSlideChange={""}
            >
            <SwiperSlide>
                <div className=' w-4/5 lg:w-4/5 px-10 py-7 mx-auto bg-blue-200 mb-5'>
                    <div className=' mt-3 p-1 w-20 text-center text-xs mb-3 text-green-500 font-semibold rounded-3xl bg-white'> 
                        Available</div>
                     <h2 className=' text-sm font-semibold'>
                        Data Analytics using Excel</h2>
                    <p className=' text-xs leading-5 my-3'>
                        Gain the expertise to analyze data effectively and 
                        extract valuable insights for decision making 
                        across diverse fields. Gain the expertise to analyze 
                        data effectively and extract valuable insights for 
                        decision making across diverse fields.
                    </p>
                    <p className=' text-xs mb-6 font-thin text-slate-600'>
                        12-Weeks Class <br />
                        Weekend: Saturdays & Sunday <br />
                        6pm-8pm WAT
                    </p>
                    <a href="" className=' w-5/6 text-center block mx-auto text-white text-xs p-3 bg-blue-900'>
                        REGISTER FOR COURSE</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=' w-4/5 lg:w-4/5 px-10 py-7 mx-auto bg-orange-300'>
                    <div className=' mt-3 p-1 w-20 text-center text-xs mb-3 text-green-500 font-semibold rounded-3xl bg-white'> 
                        Available</div>
                     <h2 className=' text-sm font-semibold'>
                        UI/UX with Figma</h2>
                    <p className=' text-xs leading-5 my-3'>
                        Gain the expertise to analyze data effectively and 
                        extract valuable insights for decision making 
                        across diverse fields. Gain the expertise to analyze 
                        data effectively and extract valuable insights for 
                        decision making across diverse fields.
                    </p>
                    <p className=' text-xs mb-6 font-thin text-slate-600'>
                        12-Weeks Class <br />
                        Weekend: Saturdays & Sunday <br />
                        6pm-8pm WAT
                    </p>
                    <a href="" className=' w-5/6 text-center block mx-auto text-white text-xs p-3 bg-blue-900'>
                        REGISTER FOR COURSE</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=' w-4/5 lg:w-4/5 px-10 py-7 mx-auto bg-blue-100'>
                    <div className=' mt-3 p-1 w-20 text-center text-xs mb-3 text-green-500 font-semibold rounded-3xl bg-white'> 
                        Available</div>
                     <h2 className=' text-sm font-semibold'>
                     UI/UX with Figma</h2>
                    <p className=' text-xs leading-5 my-3'>
                        Gain the expertise to analyze data effectively and 
                        extract valuable insights for decision making 
                        across diverse fields. Gain the expertise to analyze 
                        data effectively and extract valuable insights for 
                        decision making across diverse fields.
                    </p>
                    <p className=' text-xs mb-6 font-thin text-slate-600'>
                        12-Weeks Class <br />
                        Weekend: Saturdays & Sunday <br />
                        6pm-8pm WAT
                    </p>
                    <a href="" className=' w-5/6 text-center block mx-auto text-white text-xs p-3 bg-blue-900'>
                        REGISTER FOR COURSE</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=' w-4/5 lg:w-4/5 px-10 py-7 mx-auto bg-indigo-300'>
                    <div className=' mt-3 p-1 w-20 text-center text-xs mb-3 text-green-500 font-semibold rounded-3xl bg-white'> 
                        Available</div>
                     <h2 className=' text-sm font-semibold'>
                        Front End</h2>
                    <p className=' text-xs leading-5 my-3'>
                        Gain the expertise to analyze data effectively and 
                        extract valuable insights for decision making 
                        across diverse fields. Gain the expertise to analyze 
                        data effectively and extract valuable insights for 
                        decision making across diverse fields.
                    </p>
                    <p className=' text-xs mb-6 font-thin text-slate-600'>
                        12-Weeks Class <br />
                        Weekend: Saturdays & Sunday <br />
                        6pm-8pm WAT
                    </p>
                    <a href="" className=' w-5/6 text-center block mx-auto text-white text-xs p-3 bg-blue-900'>
                        REGISTER FOR COURSE</a>
                </div>
            </SwiperSlide>
            </Swiper>
        </section>
    </>
  )
}
