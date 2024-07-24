import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Rack from "../assets/img/rack.png"

export default function SignUp() {
  return (
    <>
        <NavBar />
        <section className=' w-full h-full flex flex-row mt-24 overflow-hidden'>
            <div className=' w-1/5  lg: w-2/10'>
                <img src={Rack}/>
                <img src={Rack}/>
                <img src={Rack} className=' block md:hidden lg:hidden'/>
                <img src={Rack} className=' block md:hidden lg:hidden'/>
                <img src={Rack} className=' block md:hidden lg:hidden'/>
                <img src={Rack} className=' block sm:hidden md:hidden lg:hidden'/>
                <img src={Rack} className=' block sm:hidden md:hidden lg:hidden'/>
            </div>
            <div className=' w-4/5 lg:w-8/10 pt-10 p-3'>
              <h2 className=' text-lg lg:text-xl font-semibold mt-2'>
                Lets Get Set Up And Ready To Go!</h2>
              <p className=' text-xs leading-6 w-8/10 lg:w-2/3 mt-3'>
                we’re excited to meet you too!  just a few details from you and we can start our journey as super buddies. 
              Please complete the following information so we can provide you with the best experience. </p>
              <form action="" className='pr-5'>
                <div className='w-full flex flex-col md:flex-row lg:flex-row'>
                  <div className='w-full md:w-4/10 lg:w-4/10 h-auto p-2 mt-10 mx-4'>
                    <label htmlFor="firstname" className=' text-sm block mb-1'>FIRST NAME</label>
                    <input type="text" name='firstname' id='firstname' placeholder='Enter First Name' className=' w-full text-sm p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'/>
                  </div>
                  <div className='w-full md:w-4/10 lg:w-4/10 h-auto p-2 mt-10 mx-4'>
                    <label htmlFor="surname" className=' text-sm block mb-1'>SURNAME</label>
                    <input type="text" name='surname' id='surname' placeholder='Enter Surname' className=' w-full text-sm p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'/>
                  </div>
                </div>

                <div className='w-full flex flex-col md:flex-row lg:flex-row'>
                  <div className='w-full md:w-4/10 lg:w-4/10 h-auto p-2 mt-10 mx-4'>
                    <label htmlFor="email" className=' text-sm block mb-1'>EMAIL</label>
                    <input type="text" name='email' id='email' placeholder='Enter E-mail here' className=' w-full text-sm p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'/>
                  </div>
                  <div className='w-full md:w-4/10 lg:w-4/10 h-auto p-2 mt-10 mx-4'>
                    <label htmlFor="whasapp" className=' text-sm block mb-1'>WHASAPP NUMBER</label>
                    <input type="text" name='whasapp' id='whasapp' placeholder='Enter Your Phone No' className=' w-full text-sm p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'/>
                  </div>
                </div>

                <div className='w-full flex flex-col md:flex-row lg:flex-row'>
                  <div className='w-full md:w-4/10 lg:w-4/10 h-auto p-2 mt-10 mx-4'>
                    <label htmlFor="program" className=' text-sm block mb-1'>PROGRAM OF INTEREST</label>
                    <select name="program" id="program" className=' w-full text-sm opacity-40 p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'>
                      <option value="" >Please select from the dropdown</option>
                    </select>
                  </div>
                  <div className='w-full md:w-4/10 lg:w-4/10 h-auto p-2 mt-10 mx-4'>
                    <label htmlFor="employmentStatus" className=' text-sm block mb-1'>EMPLOYMENT STATUS</label>
                    <select name="employmentStatus" id="employmentStatus" className=' w-full text-sm opacity-40 p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'>
                      <option value="" >Please select from the dropdown</option>
                    </select>
                  </div>
                </div>

                <div className='w-full flex flex-col md:flex-row lg:flex-row'>
                  <div className='w-full md:w-4/10 lg:w-4/10 h-auto p-2 mt-10 mx-4'>
                    <label htmlFor="laptop" className=' text-sm block mb-1'>DO YOU HAVE A LAPTOP?</label>
                    <select name="laptop" id="laptop" className=' w-full text-sm opacity-40 p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'>
                      <option value="" >Please select from the dropdown</option>
                    </select>
                  </div>
                  <div className='w-full md:w-4/10 lg:w-4/10 h-auto p-2 mt-10 mx-4'>
                    <label htmlFor="internetaccess" className=' text-sm block mb-1'>DO YOU HAVE ACCESS TO INTERNET?</label>
                    <select name="internetaccess" id="internetaccess" className=' w-full text-sm opacity-40 p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'>
                      <option value="" >Please select from the dropdown</option>
                    </select>
                  </div>
                </div>

                <div className='w-full flex flex-col md:flex-row lg:flex-row'>
                  <div className='w-full md:w-4/10 lg:w-4/10 h-auto p-2 mt-10 mx-4'>
                    <label htmlFor="country" className=' text-sm block mb-1'>COUNTRY OF ORIGIN</label>
                    <input type="text" name='country' id='country' placeholder='Enter Surname' className=' w-full text-sm p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'/>
                    {/* <select name="program" id="program" className=' w-full text-sm p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'>
                      <option value="" >Please select from the dropdown</option>
                    </select> */}
                  </div>
                  <div className='w-full md:w-4/10 lg:w-4/10 h-auto p-2 mt-10 mx-4'>
                    <label htmlFor="state" className=' text-sm block mb-1'>STATE OF ORIGIN</label>
                    <select name="state" id="state" className=' w-full text-sm opacity-40 p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'>
                      <option value="" >Please select from the dropdown</option>
                    </select>
                  </div>
                </div>

                <div className='w-full flex flex-col md:flex-row lg:flex-row'>
                  <div className='w-full md:w-4/10 lg:w-4/10 h-auto p-2 mt-10 mx-4'>
                    <label htmlFor="residentcountry" className=' text-sm block mb-1'>COUNTRY OF RESIDENCE</label>
                    {/* <input type="text" name='residentcountry' id='residentcountry' placeholder='Enter Surname' className=' w-full text-sm p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'/> */}
                    <select name="program" id="program" className=' w-full text-sm opacity-40 p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'>
                      <option value="" >Please select from the dropdown</option>
                    </select>
                  </div>
                  <div className='w-full md:w-4/10 lg:w-4/10 h-auto p-2 mt-10 mx-4'>
                    <label htmlFor="residentstate" className=' text-sm block mb-1'>STATE OF RESIDENCE</label>
                    <select name="residentstate" id="residentstate" className=' w-full text-sm opacity-40 p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'>
                      <option value="" >Please select from the dropdown</option>
                    </select>
                  </div>
                </div>

                <div className='w-full flex flex-col md:flex-row lg:flex-row'>
                  <div className='w-full md:w-4/10 lg:w-4/10 h-auto p-2 mt-10 mx-4'>
                    <label htmlFor="password" className=' text-sm block mb-1'>PASSWORD</label>
                    <input type="password" name='password' id='password' placeholder='Please use a strong Password' className=' w-full text-sm p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'/>
                  </div>
                  <div className='w-full md:w-4/10 lg:w-4/10 h-auto p-2 mt-10 mx-4'>
                    <label htmlFor="confirmpassword" className=' text-sm block mb-1'>CONFIRM PASSWORD</label>
                    <input type="password" name='confirmpassword' id='confirmpassword' placeholder='Please use a strong Password' className=' w-full text-sm p-2 bg-transparent border-b-2 border-gray-200 outline-none shadow-md'/>
                  </div>
                </div>

                <div className=' w-full flex flex-row my-4'>
                  <input type="checkbox" name="whasappsubmit1" id="whasappsubmit1" className='block mr-2' required />
                  <label htmlFor='whasappsubmit1' className='text-xs w-7/10'>
                  Please note that by providing your WhatsApp number you have consented to receive information from us through your  WhatsApp.
                  </label>
                </div>
                <div className=' w-full flex flex-row my-4'>
                  <input type="checkbox" name="whasappsubmit2" id="whasappsubmit2" className='block mr-2' required />
                  <label htmlFor='whasappsubmit2' className='text-xs w-7/10'>
                  Please note that by providing your WhatsApp number you have consented to receive information from us through your  WhatsApp.
                  </label>
                </div>
                <div className=' w-full flex flex-row my-4'>
                  <input type="checkbox" name="confirmation" id="confirmation" className='block mr-2' required />
                  <label htmlFor='confirmation' className='text-xs w-7/10'>
                  I declare that the above information shared is accurate, I also understand that the Techpye reserve the right to verify the information that I have given and can withdraw my admission if any of their requirement was falsified or violated.
                  </label>
                </div>
                <button type="submit" className=' p-3 text-xs bg-blue-600 rounded-md text-white block ml-auto mt-6 shadow-lg'>
                  REGISTER FOR COURSE</button>
              </form>
            </div>
            
        </section>
        <Footer />
    </>
  )
}
