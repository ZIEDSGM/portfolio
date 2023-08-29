import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import Typed from "react-typed";
import "./Animate-Title.css";
import Atom from "../assets/Atom.png";
import Git from "../assets/GIt.png";
import GitHub from "../assets/Github.png";
import Pycharm from "../assets/Pycharm.png";
import VSCODE from "../assets/VSCODE.png";

const textLines = [
  ` A Computer Science Student`,
  ` A MERN Stack Developper`,
  ` A Coder`,
];

const HeroSection = () => {
  useEffect(() => {
    aos.init({ duration: 2500 });
  });

  return (
    <div data-aos="fade-up">
      <div id="hero" className="flex items-center justify-center   py-60  ">
        <div className="text-center  ">
          <h1 className="text-3xl  md:text-6xl mb-1 md:mb-3 text-black dark:text-white font-semibold">
            Hi, This is ZIED SAGGUEM
          </h1>
          <p className="text-4xl md:text-3xl  mb-3 text-gray-600 dark:text-gray-300">
            I am
            <Typed
              strings={textLines}
              typeSpeed={60}
              startDelay={300}
              backSpeed={100}
              backDelay={100}
              loop={true}
            />
          </p>
          <h1 className=" text-3xl my-20 text-black dark:text-white font-bold">
            Most Tools Used
          </h1>
          <div className="i-title flex mx-auto items-center justify-center">
            <div className="i-title-wrapper    text-black dark:text-white">
              <h2 className="i-title-item">
                VSCODE
                <img src={VSCODE} />
              </h2>
              <h2 className="i-title-item">
                Pycharm
                <img src={Pycharm} />
              </h2>
              <h2 className="i-title-item">
                Git
                <img src={Git} />
              </h2>
              <h2 className="i-title-item">
                GitHub
                <img src={GitHub} />
              </h2>
              <h2 className="i-title-item">
                Atom
                <img src={Atom} />
              </h2>
            </div>
          </div>

          <div className=" h-64 w-64 absolute top-60 rounded-full bg-sky-600  blur-3xl animate-bounce transition ease-in-out duration-1000 -z-20   hover:bg-red-500  "></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
