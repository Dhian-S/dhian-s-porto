import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section
      id="About"
      className=" bg-[#1E201E] font-hamston text-white px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-10"
    >
      {/* Kiri: Gambar */}
      <div
        className="md:w-1/2 w-full flex justify-center"
        data-aos="fade-right"
      >
        <img
          src="https://i.imgur.com/zR3oU1n.jpeg"
          alt="Dastin Rachmadhian Kusuma"
          className="rounded-lg shadow-lg max-w-xs md:max-w-sm object-cover"
        />
      </div>

      {/* Kanan: Teks */}
      <div className="md:w-1/2 w-full" data-aos="fade-left">
        <h2 className="text-4xl font-bold mb-4 border-b-2 border-white w-fit">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-200 mb-4">
          Hello! I'm <strong>Dastin Rachmadhian Kusuma</strong>, a student at SMK Letris Indonesia 2 majoring in Software Engineering.
        </p>
        <p className="text-sm text-gray-400">
          Photography is my favorite way to express myself. I love taking pictures of people, random street scenes, toys, cats (of course!), and beautiful landscapes. It's not just about snapping cool photos — it's about freezing memories, telling stories, and sharing how I see the world.


        </p>
      </div>
    </section>
  );
}

export default About;
