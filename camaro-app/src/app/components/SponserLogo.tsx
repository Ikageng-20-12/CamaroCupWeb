import React from "react";
const SponsorLogos  = () => {
    const sponsors = [
        { name: "Coach Dave Academy", url: "https://coachdaveacademy.com" },
        { name: "E-Sport GT Series", url: "https://esportgtseries.com" },
        { name: "Rinaldi Racing", url: "https://rinaldi-racing.com" },
        { name: "Pitwall Live", url: "https://pitwall.live" },
      ];
    
      return (
        <div className="bg-gray-900 py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-around items-center space-x-6">
              {sponsors.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block text-white font-extrabold text-2xl lg:text-4xl tracking-wider uppercase"
                >
                  <span className="relative z-10">{sponsor.name}</span>
    
                  {/* Stylish Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition duration-500 rounded-lg blur-md"></span>
                  <span className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 rounded-lg transition duration-500"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    }
export default SponsorLogos;
