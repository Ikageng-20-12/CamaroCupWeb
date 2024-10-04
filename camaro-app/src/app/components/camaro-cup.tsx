const CamaroCup = () => {
    return (
        <div className="bg-gradient-to-b from-white via-gray-100 to-gray-200 text-gray-800 min-h-screen flex flex-col justify-center items-center px-4">
          <div className="max-w-5xl w-full bg-white p-10 rounded-xl shadow-lg space-y-8">
            {/* Header Section */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800">Camaro Cup North America</h1>
              <p className="text-sm mt-4 text-gray-600">
                Hosted by <a href="#" className="underline text-blue-500">Gravel Trap Endurance League</a> 
                <span className="mx-2">•</span>
                <a href="#" className="underline text-blue-500">ACC • XP</a> on Crossplay
              </p>
            </div>
    
            {/* Navigation Section */}
            <nav className="flex justify-center space-x-6 text-sm font-semibold uppercase tracking-wide text-gray-700">
              <a href="#" className="hover:text-blue-500 transition-colors">Info</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Rules</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Scoring</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Races</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Results</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Standings</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Drivers</a>
            </nav>
    
            {/* Information Boxes Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="font-semibold uppercase text-gray-700">Start Date</p>
                <p className="text-2xl mt-2 text-gray-800">Aug 6, 03:00</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="font-semibold uppercase text-gray-700">Race Day</p>
                <p className="text-2xl mt-2 text-gray-800">Sunday</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="font-semibold uppercase text-gray-700">Next Round</p>
                <p className="text-2xl mt-2 text-gray-800">Oct 6, 03:00</p>
              </div>
            </div>
    
            {/* Advertisement Section */}
            <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <p className="font-semibold text-gray-800">
                Never miss your braking point again · <a href="#" className="underline text-blue-500">Moza Racing</a>
              </p>
              <p className="mt-2 text-sm text-gray-600">
                MOZA CRP2 Load Cell Pedals—crafted from CNC aerospace-grade aluminum with a carbon fiber heel plate,
                these pedals offer unmatched precision and durability.
              </p>
              <a href="#" className="underline text-blue-500 mt-2 block">Buy Now</a>
            </div>
    
            {/* Footer Section */}
            <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <p className="text-gray-800">
                Welcome to the Camaro Cup North America. Join us as the roaring V8's take part in an 
                8×2-race series at the likes of Laguna Seca, COTA, IMS Road Course, and Watkins Glen.
              </p>
              <p className="mt-2 text-gray-700">
                Join our Discord to hear first about upcoming events and series information!
              </p>
            </div>
          </div>
        </div>
      );
    }
  export default CamaroCup;
