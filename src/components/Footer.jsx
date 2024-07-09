import React from 'react'
import logo from "../assets/logo/logo.svg"
import In from "../assets/icons/in.png";
import X from "../assets/icons/X.png";
import Fb from "../assets/icons/fb.png";

export default function Footer() {
    const Year = new Date().getFullYear();
  return (
    <>
        <div className='w-full h-full bg-blue-950 p-8'>
            <p className=' text-white text-xs text-center'>
            KEEP INTOUCH WITH US
            </p>
            <p className=' text-white text-xs text-center mt-4'>
            Subscribe to our email and keep close to school
            </p>

            <form action="" className=' w-full lg:w-2/3 text-sm mx-auto p-2 h-auto lg:h-24 mt-5 border-2 rounded-md border-white flex flex-col lg:flex-row items-center'>
                    <div className=' flex flex-col text-white w-full lg:w-2/6 my-2 lg:my-0'>
                        <label htmlFor="Name">Name</label>
                        <input type="text" name='Name' placeholder='Type Your name here' className=' mt-1 bg-transparent border-0'/>
                    </div>
                    <div className=' border-white border-2 h-5/6 my-auto mx-2 hidden lg:block'/>
                    <div className=' flex flex-col text-white w-full lg:w-2/6 ml-2 my-2 lg:my-0'>
                        <label htmlFor="Email">E-mail</label>
                        <input type="email" name='Email' placeholder='Type your E-mail here' className=' mt-1 bg-transparent border-0'/>
                    </div>
                    <button className=' w-1/3 lg:w-1/6 my-3 lg:my-0 h-10 bg-blue-900 text-white ml-5'>
                        Subscribe</button>
            </form>

            <div className=' mt-8 flex flex-col lg:flex-row items-start justify-between'>
                <a href="/" className='mx-auto lg:mx-0 lg:my-auto'><img src={logo} className=' w-40 lg:mr-10 invert py-3 block' /></a>
                <div className=' w-full lg:w-1/4 p-2 flex flex-col mt-5'>
                    <h2 className=' text-sm  text-white font-semibold mb-4'>
                    COMPANY
                    </h2>
                    <a href="/programs" className=' text-white text-xs my-1 hover:text-slate-400'>PROGRAMS</a>
                    <a href="/about" className=' text-white text-xs my-1 hover:text-slate-400'>ABOUT US</a>
                    <a href="/wall-of-fame" className=' text-white text-xs my-1 hover:text-slate-400'>WALL OF FAME</a>
                    <a href="/login" className=' text-white text-xs my-1 hover:text-slate-400'>LOGIN</a>
                    <a href="/get-involved" className=' text-white text-xs my-1 hover:text-slate-400'>GET INVOLVED</a>
                </div>
                <div className=' w-full lg:w-1/4 p-2 flex flex-col mt-5'>
                    <h2 className=' text-sm  text-white font-semibold mb-4'>
                    SCHOOL
                    </h2>
                    <a href="/schoolOfData" className=' text-white text-xs my-1 hover:text-slate-400'>SCHOOL OF DATA</a>
                    <a href="/schoolOfDevelopment" className=' text-white text-xs my-1 hover:text-slate-400'>SCHOOL OF DEVELOPMENT</a>
                    <a href="/schoolOfDesign" className=' text-white text-xs my-1 hover:text-slate-400'>SCHOOL OF DESIGN</a>
                    <a href="/SchoolOfManagement" className=' text-white text-xs my-1 hover:text-slate-400'>SCHOOL OF BUSINESS & MANAGEMENT</a>
                </div>
                <div className=' w-full lg:w-1/4 p-2 flex flex-col justify-between items-start mt-5'>
                    
                    <div className=' flex flex-col justify-between items-start'>
                        <h2 className=' text-sm  text-white font-semibold mb-4'>
                        CONTACT
                        </h2>
                        <a href="tel:+2347038960562" className=' text-white text-xs my-1 hover:text-slate-400'>(+234) 7038960562</a>
                        <a href="mailto:hello@techpye.com" className=' text-white text-xs my-1 hover:text-slate-400'>HELLO@TECHPYE.COM</a>
                    </div>
                    <div className=' flex flex-row justify-between items-start w-4/5 mt-7'>
                        <p className='text-white text-xs'>
                        Follow us
                        </p>
                        <a href="https://www.linkedin.com"><img src={In} className=' w-5 hover:opacity-50' /></a>
                        <a href="https://www.twitter.com"><img src={X} className=' w-5 hover:opacity-50' /></a>
                        <a href="https://www.facebook.com"><img src={Fb} className=' w-5 hover:opacity-50' /></a>
                    </div>
                </div>
            </div>
            <div className=' w-full py-2 mt-4 flex text-white text-xs flex-row justify-between items-center'>
                <p className=''>Privacy Policy <span className='mx-2'>|</span> Terms of Service</p>
                <p> &copy; {Year}, Techpye Inc. </p>
            </div>
                
        </div>
    </>
  )
}