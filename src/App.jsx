import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Loader from "./components/Loader";
import Skills from "./components/Skills";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import { ThemeProvider } from "@material-tailwind/react";
import Contact from "./components/Contact";

import Mobile from "./components/Mobile";
import AI from "./components/AI";
import Web from "./components/Web";
import MouseParticleTrail from "./components/MouseParticleTrail";

const App = () => {
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <div className="bg-white transition ease-in-out duration-1000 dark:bg-transparent min-h-screen font-sans ">
      {loading ? (
        <div className="flex justify-center items-center mt-56">
          <Loader />
        </div>
      ) : (
        <>
          <BrowserRouter>
            <ThemeProvider>
              {
                <button
                  type="button"
                  onClick={handleThemeSwitch}
                  className="fixed z-50 bottom-0 mx-auto  bg-black text-lg p-5 animate-bounce rounded-full"
                >
                  {theme === "dark" ? "🌙" : "🌞"}
                </button>
              }
              <div className="max-md:hidden">
                <MouseParticleTrail />
              </div>
              <div className="max-w-4xl w-11/12 mx-auto">
                <Navbar />
                <HeroSection />

                <About />
                <Skills />

                <Routes>
                  <Route
                    path="/"
                    index
                    element={
                      <>
                        <Web />
                      </>
                    }
                  />

                  <Route path="/Mobile" element={<Mobile />} />
                  <Route path="/AI" element={<AI />} />
                </Routes>
                <Projects />
                <Contact />
              </div>
            </ThemeProvider>
          </BrowserRouter>
        </>
      )}
    </div>
  );
};

export default App;
