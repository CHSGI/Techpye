import React from 'react'
import NavBar from '../components/NavBar'
import Footer from "../components/Footer";
import Pics from '../assets/img/pics.png'

export default function Login() {
  return (
    <>
        <NavBar />
        <section className='w-full h-full lg:h-screen mt-16 flex flex-col lg:flex-row items-center'>
          <img src={Pics} className=' h-full w-full md:w-fit lg:w-fit '/>
          <div className=' w-full lg:w-full h-full flex items-center justify-center'>
            <div className=' w-3/5 h-4/6 py-10 lg:py-2 px-3'>
              <h2 className='text-xl font-semibold'>
                Hello! We Missed you</h2>
              <p className=' mt-5 text-xs'>
                Hello, welcome back we have been expecting you!!!</p>
              <p className=' text-center text-xs mt-2 font-semibold'>
                Don’t have an account? <a href="/signup" className='text-blue-600'>Sign Up</a></p>

                <form action="">
                  <div className='w-8/10 h-1/3 mt-10 mx-4'>
                    <label htmlFor="name" className=' text-sm block'>USER NAME</label>
                    <input type="text" name='name' id='name' placeholder='Enter User Name' className=' w-full text-sm p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'/>
                  </div>
                  <div className='w-8/10 h-1/3 mt-10 mx-4'>
                    <label htmlFor="password" className=' text-sm block'>PASSWORD</label>
                    <input type="password" name='password' id='password' placeholder='Please use a strong password' className=' w-full text-sm p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'/>
                  </div>
                  <button type="submit" className=' p-3 w-1/3 h-12 rounded bg-blue-600 mt-6 block ml-auto text-white text-sm'>LOGIN</button>
                </form>
            </div>
          </div>
        </section>

        <Footer />
    </>
  )
}
