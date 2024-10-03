// src/app/page.tsx

"use client";  // Mark this file as a Client Component

import { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: 'fallChampionship',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-5xl text-lime-500">Camaro Cup North America</h1>
        <nav>
          <ul className="flex space-x-8">
            <li><a className="text-white hover:underline" href="#events">Events</a></li>
            <li><a className="text-white hover:underline" href="#schedule">Schedule</a></li>
            <li><a className="text-white hover:underline" href="#register">Register</a></li>
            <li><a className="text-white hover:underline" href="#standings">Standings</a></li>
          </ul>
        </nav>
      </header>

      <main className="text-center mt-8">
        <section className="bg-gray-800 p-8 rounded-md mb-8">
          <h2 className="text-3xl text-lime-500">Welcome to the World of Sim Racing</h2>
          <p className="mt-2">Join exciting racing events and take your skills to the next level!</p>
          <a href="#register" className="bg-lime-500 text-black py-2 px-4 rounded mt-4 inline-block">Register Now</a>
        </section>

        <section id="events" className="mt-8">
          <h2 className="text-3xl mb-4">Upcoming Events</h2>
          <div className="bg-gray-800 p-4 rounded-md mb-4">
            <h3 className="text-xl">PANAM Racing 2024 Fall Championship</h3>
            <p>Solo Event | Sundays | 6 Rounds</p>
            <p>Date: Oct 12th - Nov 2nd</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-md mb-4">
            <h3 className="text-xl">SimHaven 24 Hours of Nordschleife</h3>
            <p>Teams Event | Prizes from Major Brands</p>
            <p>Date: Oct 12th</p>
          </div>
        </section>

        <section id="schedule" className="mt-8">
          <h2 className="text-3xl mb-4">Live Schedule</h2>
          {/* Add schedule details here */}
        </section>

        <section id="register" className="mt-8">
          <h2 className="text-3xl mb-4">Register Now</h2>
          <form onSubmit={handleSubmit} className="flex flex-col items-start mt-4">
            <label htmlFor="name" className="mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-2 mb-4 rounded border-none"
            />

            <label htmlFor="email" className="mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-2 mb-4 rounded border-none"
            />

            <label htmlFor="event" className="mb-2">Select Event:</label>
            <select
              id="event"
              name="event"
              value={formData.event}
              onChange={handleChange}
              className="p-2 mb-4 rounded border-none"
            >
              <option value="fallChampionship">PANAM Racing 2024 Fall Championship</option>
              <option value="nordschleife">SimHaven 24 Hours of Nordschleife</option>
            </select>

            <button type="submit" className="bg-lime-500 text-black py-2 px-4 rounded">Submit</button>
          </form>
        </section>
      </main>

      <footer className="mt-16 text-center py-4 bg-gray-800 text-gray-400">
        <p>&copy; 2024 Camaro Cup North America. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
