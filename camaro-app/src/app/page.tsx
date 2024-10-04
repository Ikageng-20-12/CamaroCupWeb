// app/page.tsx
import Image from 'next/image';
import camaroImage from './pictures/Design2.jpg'; // Make sure this path is correct

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Image with Gradient Overlay */}
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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center">
        <h1 className="text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-500 animate-fadeInUp">
          Welcome to the Camaro Cup
        </h1>
        <p className="text-lg mt-4 opacity-90">
          Experience thrilling sim racing with the best racers
        </p>

        {/* Register Button */}
        <a
          href="#register"
          className="mt-8 px-6 py-3 bg-gradient-to-r from-lime-400 to-blue-500 text-black rounded-full hover:shadow-lg transition-all duration-300 backdrop-blur-md bg-opacity-30 shadow-md"
        >
          Register Now
        </a>

        {/* Discord Login Button */}
        <a
          href="https://discord.com/login"
          className="mt-4 flex items-center space-x-2 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors duration-300 shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.162 5.656c-1.855-1.385-4.432-1.992-7.019-1.992a13.697 13.697 0 00-6.305 1.536c-.198.116-.31.347-.271.582l.657 4.004-2.702-.657c-.394-.073-.835.083-1.04.454l-1.01 2.054c-.209.417.017.922.435 1.04l5.218 1.459-.073.535a3.5 3.5 0 00-.25 1.613 5.775 5.775 0 001.384 3.217c1.31 1.525 3.255 2.409 5.37 2.409 2.115 0 4.06-.884 5.37-2.409 1.31-1.525 2.009-3.515 2.009-5.573a10.02 10.02 0 00-.508-3.106l-1.167-2.504c-.173-.37-.57-.583-.966-.5z" />
          </svg>
          <span>Login with Discord</span>
        </a>
      </div>
    </div>
  );
}
