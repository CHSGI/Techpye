import bgImage from '../assets/img/bg-img.png';

const Hero = () => {
  return (
    <div className="bg-white relative h-screen" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}>
      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(2, 16, 39, 0.7)' }}></div>

      <div className="relative flex items-center justify-center h-full px-6 isolate lg:px-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Learn the essential tech skill to Navigate today and tomorrow's world
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
          Technology is a superpower that we can use to build anything we can imagine
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <a
              href="#"
              className="px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              style={{ backgroundColor: '#0E5CDF', borderRadius: '5px' }}
            >
              REGISTER FOR COURSE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
