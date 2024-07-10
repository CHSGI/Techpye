import React from 'react'
import envelope from "../assets/img/envelope.png"

export default function Contact() {
  return (
    <>
    <section className=' w-full h-full lg:h-screen flex items-center justify-center'>
            <div className=' w-10/12 h-5/6 bg-blue-600 rounded-3xl my-10 flex flex-col lg:flex-row'>
                <div className=' w-full lg:w-1/2 lg:p-10 p-10 pb-2'>
                    <h2 className='text-white text-xl font-semibold'>
                    Still Uncertain?
                    </h2>
                    <p className=' text-white text-xs mt-5 leading-6 w-5/6'> 
                    Unsure which program suits you best?  Reach out to us at admissions@techpye or fill out the form , 
                    and we'll get in touch
                    </p>
                    <img src={envelope} className='p-10 pl-2'/>
                </div>
                <form action="" className=' w-full lg:w-1/2 pt-9 lg:pt-20 lg:px-20 px-8 flex flex-col items-end'>
                    <div className=' w-full h-1/6 bg-white rounded-xl mr p-3 pl-6 flex flex-col'>
                        <label htmlFor="name" className='w-full h-1/2 text-sm font-thin'>NAME</label>
                        <input type="text" placeholder='Type your Name here' name='name' id='name' className=' text-sm h-1/2 border-b-2 w-5/6' autoComplete='name' />
                    </div>
                    <div className=' w-full h-1/6 bg-white rounded-xl mr p-3 pl-6 flex flex-col mt-10'>
                        <label htmlFor="email" className='w-full h-1/2 text-sm font-thin'>E-MAIL</label>
                        <input type="text" placeholder='Type your E-Mail here' name='email' id='email' className=' text-sm h-1/2 border-b-2 w-5/6' autoComplete='email' />
                    </div>
                    
                    <div className=' w-full h-1/6 bg-white rounded-xl mr p-3 pl-6 flex flex-col mt-10'>
                        <label htmlFor="phone" className='w-full h-1/2 text-sm font-thin'>PHONE-NUMBER</label>
                        <input type="text" placeholder='Type your Phone Number here' name='phone' id='phone' className=' text-sm h-1/2 border-b-2 w-5/6' autoComplete='tel' />
                    </div>

                    {/* <input type="submit" value="CONTACT ME" className=' w-3/6 h-8 border-2 border-white mt-14 mb-10 text-xs text-white cursor-pointer ml-44'/> */}
                    <button className=' w-1/3 h-8 border-2 text-white border-white hover:opacity-50 duration-700 my-8 text-xs cursor-pointer block'>
                        CONTACT ME</button>
                </form>
            </div>
        </section>
    </>
  )
}