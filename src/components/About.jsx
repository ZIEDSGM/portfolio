import React, { useEffect } from "react";
import ZIED from "./zied.jpg";
import aos from "aos";
import "aos/dist/aos.css";

import SectionTitle from "./SectionTitle";

function About() {
  useEffect(() => {
    aos.init({ duration: 2500 });
  });
  return (
    <div
      id="About"
      className="flex flex-col  md:flex-row items-center justify-center gap-10 md:gap-20 py-12 h-screen "
    >
      <div className="w-full md:w-6/12" data-aos="zoom-right">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-2xl text-center text-gray-600 dark:text-gray-300">
          I am a Computer Science student with a strong interest in AI and web
          development. Proficient in Python and statistical modeling, I excel at
          extracting insights from large datasets. Passionate about AI, I have
          knowledge of machine learning. Additionally, I am skilled in MERN
          Stack for creating responsive websites.
        </p>
        <a
          href="mailto:ziedsagguem@gmail.com"
          className="block mt-3 text-md md:text-lg text-center text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          ziedsagguem@gmail.com
        </a>
        <div className=" h-64 w-64 absolute top-64 rounded-full bg-sky-600  blur-3xl animate-bounce transition ease-in-out  duration-1000 -z-20 max-md:hidden hover:bg-red-600"></div>
      </div>

      <img
        src={ZIED}
        alt="ZIED"
        className="w-full max-md:mb-20  md:w-6/12 object-cover animate-pulse rounded-full  "
        data-aos="zoom-left"
      />
    </div>
  );
}

export default About;
