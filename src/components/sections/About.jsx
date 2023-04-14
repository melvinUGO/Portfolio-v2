import React from "react";
import { BsCodeSlash, BsFillDatabaseFill, BsTools } from "react-icons/bs";

const About = () => {
  return (
    <div className="p-5 pt-10 md:pt-18 ">
      <h2 className="text-center text-4xl py-5">ABOUT</h2>
      <h1 className="text-center text-2xl">Personal Info</h1>
      <p className=" max-w-[700px] mx-auto pt-5">
        I am a FullStack Developer with a passion for building beautiful and
        user-friendly webites. I have a strong understanding of both front-end
        and back-end development, and i am excited to put my skills to use in a
        proffesional setting. I am a quick learner and a team player, and i am
        confident that i can be a valueable asset to any web development team
      </p>
      <div className="py-5 md:pt-16 overflow-y-auto">
        <h1 className="text-center text-2xl pt-5">My Skills</h1>
        <div className=" sm:flex gap-5 justify-evenly  text-center max-w-[1000px] mx-auto pt-5">
          <article className="rounded-sm shadow-gray-300 border ">
            <div className=" bg-gray-300  text-black font-semibold py-1 px-14 flex  flex-col justify-center items-center">
              <BsCodeSlash />
              <p className="">Front End</p>
            </div>

            <ul className="py-2">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Next JS</li>
              <li>TailwindCSS</li>
            </ul>
          </article>
          <article className=" rounded-sm shadow-gray-300 border">
            <div className=" bg-gray-300 text-black font-semibold py-1 px-14 flex flex-col justify-center items-center">
              <BsFillDatabaseFill />
              <p>Back End</p>
            </div>

            <ul className="py-2">
              <li>Java</li>
              <li>NodeJs/Express</li>
              <li>MongoDb</li>
              <li>Spring Boot</li>
              <li>FireBase</li>
              <li>MySQL</li>
            </ul>
          </article>
          <article className=" rounded-sm shadow-gray-300 border">
            <div className=" bg-gray-300 text-black font-semibold py-1 px-14 flex flex-col justify-center items-center">
              <BsTools />
              <p>Others</p>
            </div>

            <ul className="py-2">
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Intellij IDEA</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
