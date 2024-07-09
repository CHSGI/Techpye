import Navbar from "./components/NavBar"
import Hero from "./components/Hero"
import girl from './assets/img/girl.png'
import Courses from "./components/Courses.jsx"
import pallet from "./assets/img/pallete.png"
import Contact from "./components/Contact.jsx"
import compass from "./assets/img/compass.png"
import Quote from "./components/Quote.jsx"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />

    {/* <!-- Browse Jobs --> */}
    <section className="px-4 py-10" style={{ backgroundColor: '#C3D8FB' }}>
      <div className="m-auto container-xl lg:container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* <!-- Text Column --> */}
          <div className="flex flex-col justify-center pl-20">
            <h2 className="text-2xl font-bold mb-4">The Perfect Time To Start is Now!</h2>
            <p className="mb-4 text-sm pr-20">We empower individuals with the skills and support they need to thrive, leveling up globally and upscaling their abilities to meet modern demands. Our goal is to provide equal opportunities for everyone, especially those without access to these skills, by offering global standard training.</p>
            <button className="px-4 py-2 mt-5 font-semibold border-blue-500 border-2 text-blue-500 rounded w-1/3 text-xs">TAKE A SKILL TEST</button>
          </div>
          {/* <!-- Image Column --> */}
          <div className="flex items-center justify-center">
            <img
              src={girl}
              alt="Job Listing"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>

    <Courses />

    <section className=" w-full h-aboutHeight bg-white text-center flex items-center justify-center flex-col">
      <p className=" text-xs mb-3 leading-5">We're on a special mission to empower as many as we can reach <br />
      with the techs skills needed to navigate todays world and a head start for the future!</p>
      <p className=" text-xs mb-3 leading-5 italic">“Coding is today's language of creativity. <br />
      With it, we can create the future.”</p>
      <p className=" text-base font-medium text-orange-500">Linda Liukas</p>
    </section>

    <section className=" w-full h-auto flex flex-col lg:flex-row">
      <div className=" text-white pl-10 flex flex-col bg-blue-950 items-start justify-center w-full lg:w-1/2 h-auto py-20 lg:py-2">
        <h2 className=" font-semibold text-xl pb-4">
          We belief Growth needs Support</h2>
        <p className=" text-xs leading-6">
            In today's fast-paced digital age, technology continues to shape the <br />
            world around us at an unprecedented pace <br />
            At Techpye our aim is to prepare as many people as we can <br />
            reach for the new world challenge </p>
      </div>
      <img src={pallet} className=" w-full lg:w-1/2"/>
    </section>

    <section className=" w-full h-auto flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-full py-20 lg:py-2 flex flex-col justify-center items-start pl-20 my-auto">
        <h2 className=" text-xl font-semibold mb-3">
        Don’t be Left Out
        </h2>
        <p className=" text-xs leading-6">
        Organizations across sectors are undergoing digital transformation <br />
        initiatives to stay competitive in the digital age. <br />
        This skills gap is expected to widen in the coming years, creating <br /> 
        ample opportunities for individuals with relevant expertise
        </p>
        <button className=" bg-blue-500 rounded W-1/5 text-xs p-3 text-white font-medium mt-5">
          REGISTER FOR COURSE
        </button>
      </div>
      <img src={compass} className=" w-full lg:w-1/2"/>
    </section>
    
    <Quote text={"Tech skills have become essential for individuals and businesses alike, Join us on ths exciting journey of learning and growth"} text2={"“Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important ”"} author={"Bill Gates"} />

    <Contact />
    </>
  )
}
export default App