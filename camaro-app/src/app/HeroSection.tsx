import Image from 'next/image';
import camaroImage from './pictures/Design2.jpg'; // Your image import

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={camaroImage}
          alt="Camaro Racing"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-500 animate-fadeInUp">
          Welcome to the Camaro Cup
        </h1>
        <p className="text-lg mt-4 opacity-90">Experience thrilling sim racing with the best racers</p>

        <div className="mt-8 flex flex-col space-y-4">
          <a
            href="#register"
            className="px-6 py-3 bg-gradient-to-r from-lime-400 to-blue-500 text-black rounded-full hover:shadow-lg transition-all duration-300"
          >
            Register Now
          </a>
          <a
            href="https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D709674172493594674%26redirect_uri%3Dhttps%253A%252F%252Fwww.thesimgrid.com%252Fusers%252Fauth%252Fdiscord%252Fcallback%26response_type%3Dcode%26scope%3Demail%2Bguilds.join%2Bidentify"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors duration-300 flex items-center space-x-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M22.162 5.656c-1.855-1.385-4.432-1.992-7.019-1.992a13.697 13.697 0 00-6.305 1.536c-.198.116-.31.347-.271.582l.657 4.004-2.702-.657c-.394-.073-.835.083-1.04.454l-1.01 2.054c-.209.417.017.922.435 1.04l5.218 1.459-.073.535a3.5 3.5 0 00-.25 1.613 5.775 5.775 0 001.384 3.217c1.31 1.525 3.255 2.409 5.37 2.409 2.115 0 4.06-.884 5.37-2.409 1.31-1.525 2.009-3.515 2.009-5.573a10.02 10.02 0 00-.508-3.106l-1.167-2.504c-.173-.37-.57-.583-.966-.5z"
              />
            </svg>
            <span>Login with Discord</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
