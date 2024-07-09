<<<<<<< HEAD
import React from 'react'
import logo from "../assets/logo/logo.svg"
import In from "../assets/icons/in.png";
import X from "../assets/icons/X.png";
import Fb from "../assets/icons/fb.png";

export default function Footer() {
    const Year = new Date().getFullYear();
  return (
    <>
        <div className='w-full h-full bg-blue-950 p-10'>
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
                <a href="" className='mx-auto lg:mx-0 lg:my-auto'><img src={logo} className=' w-40 lg:mr-10 invert py-3 block' /></a>
                <div className=' w-full lg:w-1/4 p-2 flex flex-col mt-5'>
                    <h2 className=' text-sm  text-white font-semibold mb-4'>
                    COMPANY
                    </h2>
                    <a href="" className=' text-white text-xs my-1 hover:text-slate-400'>PROGRAMES</a>
                    <a href="" className=' text-white text-xs my-1 hover:text-slate-400'>ABOUT US</a>
                    <a href="" className=' text-white text-xs my-1 hover:text-slate-400'>WALL OF FAME</a>
                    <a href="" className=' text-white text-xs my-1 hover:text-slate-400'>LOGIN</a>
                    <a href="" className=' text-white text-xs my-1 hover:text-slate-400'>GET INVOLVED</a>
                </div>
                <div className=' w-full lg:w-1/4 p-2 flex flex-col mt-5'>
                    <h2 className=' text-sm  text-white font-semibold mb-4'>
                    SCHOOL
                    </h2>
                    <a href="" className=' text-white text-xs my-1 hover:text-slate-400'>SCHOOL OF DATA</a>
                    <a href="" className=' text-white text-xs my-1 hover:text-slate-400'>SCHOOL OF DEVELOPMENT</a>
                    <a href="" className=' text-white text-xs my-1 hover:text-slate-400'>SCHOOL  DESIGN</a>
                    <a href="" className=' text-white text-xs my-1 hover:text-slate-400'>SCHOOL OF BUSINESS & MANAGEMENT</a>
                </div>
                <div className=' w-full lg:w-1/4 p-2 flex flex-col justify-between items-start mt-5'>
                    
                    <div className=' flex flex-col justify-between items-start'>
                        <h2 className=' text-sm  text-white font-semibold mb-4'>
                        CONTACT
                        </h2>
                        <a href="" className=' text-white text-xs my-1 hover:text-slate-400'>(+234) 7038960562</a>
                        <a href="" className=' text-white text-xs my-1 hover:text-slate-400'>HELLO@TECHPYE.COM</a>
                    </div>
                    <div className=' flex flex-row justify-between items-start w-4/5 mt-7'>
                        <p className='text-white text-xs'>
                        Follow us
                        </p>
                        <a href=""><img src={In} className=' w-5 hover:opacity-50' /></a>
                        <a href=""><img src={X} className=' w-5 hover:opacity-50' /></a>
                        <a href=""><img src={Fb} className=' w-5 hover:opacity-50' /></a>
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
=======
import React from 'react';
import logo from '../assets/logo/logo_white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="container mx-auto grid gap-6 px-4 lg:px-0">
        <div className="text-center">
          <h2 className="text-xl font-semibold">KEEP IN TOUCH WITH US</h2>
          <p className="mt-2">Subscribe to our email and keep close to school</p>
        </div>
        <div className="flex justify-center">
          <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 border border-white p-2 rounded">
            <div className="flex flex-col">
              <label className="text-white mb-1">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="p-2 rounded bg-gray-800 text-white"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded bg-gray-800 text-white"
              />
            </div>
            <button
              type="submit"
              className="p-2 rounded bg-blue-600 hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="Logo" className="w-20" />
          </div>
          <div>
            <h3 className="font-semibold">COMPANY</h3>
            <ul>
              <li>PROGRAMMES</li>
              <li>ABOUT US</li>
              <li>WALL OF FAME</li>
              <li>LOGIN</li>
              <li>GET INVOLVED</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">SCHOOL</h3>
            <ul>
              <li>SCHOOL OF DATA</li>
              <li>SCHOOL OF DEVELOPMENT</li>
              <li>SCHOOL OF MANAGEMENT</li>
              <li>SCHOOL OF DESIGN</li>
              <li>SCHOOL OF BUSSINESS AND MANAGEMENT</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">CONTACT</h3>
            <ul>
                <li><br /></li>
              <li><a href="tel:+2347038960562">(+234) 7038960562</a></li>
              <li><a href="mailto:hello@techpye.com">HELLO@TECHPYE.COM</a></li>
              <li><br /></li>
              <li>FOLLOW US 
                <a href="https://www.linkedin.com" className="ml-2"><FontAwesomeIcon icon={faLinkedin} /></a> 
                <a href="https://www.twitter.com" className="ml-2"><FontAwesomeIcon icon={faTwitter} /></a> 
                <a href="https://www.facebook.com" className="ml-2"><FontAwesomeIcon icon={faFacebook} /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
          <div className="mb-2 md:mb-0">
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </div>
          <div>
            <span>&copy; 2024, Techpye Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
>>>>>>> 704147ed9fa03c2598e0fcd11676bee12494522b
