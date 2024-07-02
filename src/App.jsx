import Navbar from "./components/NavBar"
import Hero from "./components/Hero"
import girl from './assets/img/girl.png'

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
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">The Perfect Time To Start is Now!</h2>
            <p className="mb-4">We empower individuals with the skills and support they need to thrive, leveling up globally and upscaling their abilities to meet modern demands. Our goal is to provide equal opportunities for everyone, especially those without access to these skills, by offering global standard training.</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded w-auto">TAKE A SKILL TEST</button>
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

    
    </>
  )
}
export default App