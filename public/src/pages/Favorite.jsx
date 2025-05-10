import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Favorite() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section id="Favorite" className="bg-[#1E201E] font-hamston tex t-white px-6 py-16">
      <div className="text-center mb-10" data-aos="fade-down">
        <h2 className="text-4xl font-bold border-b-2 text-white border-white inline-block mb-2">
          Favorite
        </h2>
        <p className="text-white">My most favorite photos.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 transition-all duration-300">
        {/* Card 1 */}
        <div
          className="w-full md:w-1/3 shadow-lg rounded overflow-hidden transition duration-300 ease hover:scale-110"
          data-aos="zoom-in-right"
        >
          <img
            src="https://i.imgur.com/I176ei0.jpeg"
            alt="Favorite 1"
            className="w-full h-auto object-cover rounded "
          />
        </div>

        {/* Card 2 */}
        <div
          className="w-full md:w-1/3 shadow-lg rounded overflow-hidden transition duration-300 ease hover:scale-110"
          data-aos="zoom-in-left"
          data-aos-delay="200"
        >
          <img
            src="https://i.imgur.com/DdSEmVz.jpeg"
            alt="Favorite 2"
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
}

export default Favorite;
