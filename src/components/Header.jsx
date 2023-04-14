import React, { useEffect, useRef } from "react";
import { FaFileDownload } from "react-icons/fa";
import "animate.css";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let iterations = 0;

const handleMouseOver = (e) => {
  const interval = setInterval(() => {
    e.target.innerText = e.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return e.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= e.target.dataset.value.length) clearInterval(interval);

    iterations += 1 / 3;
  }, 60);
};

const Header = () => {
  return (
    <div className="">
      <div className=" bg-[rgb(0,0,0,.7)] h-[100vh]  text-center pt-40 sm:pt-52">
        <p>Hi, I'm</p>
        <h1
          className=" font-mono name text-4xl sm:text-5xl py-3 text-white"
          onMouseOver={handleMouseOver}
          data-value="MELVIN UGOCHUKWU"
        >
          MELVIN UGOCHUKWU
        </h1>
        <p className="pb-5 font-mono">JUNIOR SOFTWARE DEVELOPER</p>
        <div className="flex items-center justify-center flex-col gap-3">
          <a
            href="#projects"
            className="py-1 px-3 bg-transparent border-4 border-green-600 text-green-600 transition-all hover:scale-[1.2] active:scale-[0.9] animate__animated animate__backInDown"
          >
            PROJECTS
          </a>

          <a
            href="#contact"
            className="py-1 px-3 bg-transparent border-4 border-green-600 text-green-600 transition-all hover:scale-[1.2] active:scale-[0.9] animate__animated animate__backInDown"
          >
            CONTACT
          </a>

          <a
            href="#about"
            className="py-1 px-3 bg-transparent border-4 border-green-600 text-green-600 transition-all hover:scale-[1.2] active:scale-[0.9] animate__animated animate__backInDown"
          >
            ABOUT
          </a>
          <a
            download
            href="./Resume.pdf"
            className="py-1 px-3 bg-transparent border-4 border-green-600 text-green-600 transition-all hover:scale-[1.2] active:scale-[0.9] flex items-center gap-2 animate__animated animate__backInDown"
          >
            RESUME
            <FaFileDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
