import React, { useEffect } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import aos from "aos";
import "aos/dist/aos.css";
const Loader = () => {
  useEffect(() => {
    aos.init({ duration: 2000 });
  });
  return (
    <div data-aos="zoom-in">
      <CirclesWithBar
        height="200"
        width="200"
        radius="9"
        color="red"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loader;
