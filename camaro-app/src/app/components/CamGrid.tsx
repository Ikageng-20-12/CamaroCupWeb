import React from 'react';
import LogoImage from '../pictures/PngItem_832942.png';

const CamaroCupGrid = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-12 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full px-6">
            {/* Event Information Section */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow ease-in-out duration-300">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-800">Camaro Cup North America</h3>
                <img src={LogoImage.src} alt="Chevrolet" className="h-8" />
              </div>
              <p className="text-sm text-gray-600 mt-2">Hosted by Gravel Trap Endurance League</p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">1,904</span>
                  <span className="ml-2 text-sm text-gray-800">11/50</span>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                  Register
                </button>
              </div>
            </div>
    
            {/* Event Communications Section */}
            <div className="bg-gray-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow ease-in-out duration-300">
              <h3 className="text-lg font-bold">Event Communications</h3>
              <p className="text-sm mt-4">
                Stay updated with all event-related announcements via the
                <a href="#" className="underline text-gray-400 ml-1">Gravel Trap Endurance League's Discord Server</a>.
              </p>
              <button className="mt-6 bg-gray-600 w-full py-2 rounded-md hover:bg-gray-500 transition-colors">
                Join Discord Server
              </button>
            </div>
    
            {/* Advertisement Section */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow ease-in-out duration-300">
              <div className="flex flex-col items-center text-center">
                <h4 className="text-lg font-bold text-gray-800">Brought to you by</h4>
                <h3 className="text-2xl font-extrabold text-green-700 mt-4">Race Anywhere</h3>
                <p className="text-sm text-gray-600 mt-4">
                  SIMAGIC P1000 Modular Pedals feature a new optimized design, simplifying installation.
                </p>
              </div>
              <button className="mt-6 bg-gray-900 text-white w-full py-2 rounded-md hover:bg-gray-800 transition-colors">
                Learn More
              </button>
            </div>
    
            {/* No-Show Rules Section */}
            <div className="bg-gray-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow ease-in-out duration-300">
              <h3 className="text-lg font-bold">No-Show Rules</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><strong>Max Allowed Penalties:</strong> 100 Points</li>
                <li><strong>No Show Penalty:</strong> 0 Points</li>
                <li><strong>Withdrawals Allowed:</strong> 100</li>
              </ul>
            </div>
    
            {/* Classes & Cars Section */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow ease-in-out duration-300">
              <h3 className="text-lg font-bold text-gray-800">Classes & Cars</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><strong>Camaro Cup</strong></li>
                <li>Chevrolet Camaro GT4</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
export default CamaroCupGrid;