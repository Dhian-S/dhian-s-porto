import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Software() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section id="Software">
      <div className="bg-[#1a1c1a] font-hamston text-white px-8 py-16">
        {/* Judul */}
        <div
          className="text-center max-w-xl mx-auto mb-8"
          data-aos="fade-down"
        >
          <h1 className="text-4xl font-bold border-b-2 border-white rounded-sm inline-block mb-2">
            Software
          </h1>
          <p>These are some of the software I use.</p>
        </div>

        {/* Icon Software */}
        <div
          className="flex items-center justify-center gap-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={`${process.env.PUBLIC_URL}/icons/photoshop-lightroom.png`}
            alt="Lightroom"
            className="w-20 h-20"
          />
          <img
            src={`${process.env.PUBLIC_URL}/icons/icons8-snapseed-48.png`}
            alt="Snapseed"
            className="w-20 h-20"
          />
          <img
            src={`${process.env.PUBLIC_URL}/icons/lens.png`}
            alt="Lens Distortion"
            className="w-20 h-20 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Software;
