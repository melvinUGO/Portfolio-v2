import { useEffect, useState } from "react";
import Header from "./components/Header";
import { About, Projects, Contact } from "./components/sections";
import Footer from "./components/Footer";

function App() {
  let trailer;
  useEffect(() => {
    trailer = document.getElementById("trailer");
  }, []);

  window.onmousemove = (e) => {
    const x = e.clientX - trailer.offsetWidth / 2,
      y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px,${y}px)`,
    };

    trailer.animate(keyframes, {
      duration: 800,
      fill: "forwards",
    });
  };

  return (
    <div className=" text-white relative">
      <div
        id="trailer"
        className=" h-[20px] w-[20px] bg-white rounded-[20px] fixed left-0 top-0 z-50 pointer-events-none transition-opacity ease-in-out"
      ></div>
      <div>
        <div className=" matrix w-full h-[100vh] md:sticky  top-0 bg-black">
          <Header />
        </div>
        <div
          id="about"
          className=" w-full md:h-[100vh] md:sticky  top-0 bg-black"
        >
          <About />
        </div>
        <div
          id="projects"
          className=" w-full md:h-[100vh] md:sticky top-0 bg-black"
        >
          <Projects />
        </div>
        <div
          id="contact"
          className=" w-full h-[100vh] md:sticky top-0 bg-black"
        >
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
