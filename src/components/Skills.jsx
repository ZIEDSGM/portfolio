import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  useEffect(() => {
    aos.init({ duration: 2500 });
  });
  return (
    <div id="Skills" className=" my-14 ">
      <SectionTitle id="works">Skills</SectionTitle>
      <div className="flex flex-col items-center justify-between md:flex-row ">
        <Link to="/">
          <button className="btn z-40 relative  w-60">
            Web Developpement{" "}
          </button>
        </Link>
        <br></br>
        <Link to="/Mobile">
          <button className="btn z-40 relative  w-60">
            Mobile Developpement{" "}
          </button>
        </Link>{" "}
        <br></br>
        <Link to="/AI">
          <button className="btn z-40 relative w-60">AI</button>
        </Link>
      </div>
    </div>
  );
};

export default Skills;
