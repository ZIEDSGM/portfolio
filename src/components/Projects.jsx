import React, { useEffect } from "react";
import works from "../data/Projects";
import SectionTitle from "./SectionTitle";
import WorkItem from "./ProjectItem";
import "aos/dist/aos.css";
import Aos from "aos";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="py-24 mt-32  " id="Projects">
      <SectionTitle id="works">Recent Works</SectionTitle>
      <div
        className="grid grid-cols-1 relative z-40  md:grid-cols-2 gap-5"
        data-aos="zoom"
      >
        {works.map((work) => (
          <WorkItem
            key={work.title}
            imgUrl={work.imgUrl}
            title={work.title}
            tech={work.tech}
            workUrl={work.workUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
