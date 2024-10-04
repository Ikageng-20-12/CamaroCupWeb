// app/components/Header.tsx
const Header = () => {
    return (
      <header className="absolute top-0 left-0 w-full z-10 p-8 flex flex-col space-y-4 bg-transparent">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl tracking-widest font-bold hover:text-lime-500 transition-colors duration-300">
            SIMGRID
          </div>
  
          <nav>
            <ul className="flex space-x-8 text-white font-light">
              <li className="hover:text-lime-400 transition-colors duration-300">
                <a href="#events">Events</a>
              </li>
              <li className="hover:text-lime-400 transition-colors duration-300">
                <a href="#schedule">Schedule</a>
              </li>
              <li className="hover:text-lime-400 transition-colors duration-300">
                <a href="#register">Register</a>
              </li>
            </ul>
          </nav>
        </div>
  
        {/* Stylish Line */}
        <div className="relative">
          <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="absolute left-0 flex items-end space-x-1 animate-pulse">
            <div className="h-2 w-4 bg-white"></div>
            <div className="h-1 w-full bg-gradient-to-r from-white via-white to-transparent"></div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  