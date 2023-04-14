import React from "react";
import data from "../../assets/data";
import { FaGlobe, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="p-5 pt-10 md:pt-18 ">
      <h1 className="text-center text-4xl py-5">PORTFOLIO SAMPLES</h1>
      <section className="">
        <div className=" max-w-[1000px] mx-auto p-3  grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-5 ">
          {data.map((item) => {
            const { name, image, url, discription, gitHub } = item;
            return (
              <div className="flex flex-col justify-center items-center my-5">
                <div className="rounded-xl group relative w-[85%] sm:w-[70%] flex">
                  <img
                    loading="lazy"
                    src={image}
                    alt={name}
                    className="w-full h-auto object-cover rounded-t-2xl rounded-b-lg"
                  />
                  <div className="hidden group-hover:flex flex-col max-h-[94.5%] absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-2 rounded-md overflow-y-auto scrollbar-hide">
                    <p className="text-[1.2rem] mb-1 text-green-600 font-bold">
                      {name}
                    </p>
                    <sm className="text-white py-1">{discription}</sm>
                  </div>
                </div>
                <div className="flex text-white mt-1   w-[85%] sm:w-[70%]">
                  <a
                    href={url}
                    className="border-2 p-2 flex justify-center items-center gap-2 w-full rounded-tl-lg rounded-bl-2xl hover:text-green-600"
                    target="_blank"
                  >
                    <FaGlobe /> Live Site
                  </a>
                  <a
                    href={gitHub}
                    className="border-2 p-2 flex justify-center items-center gap-2 w-full rounded-tr-lg rounded-br-2xl hover:text-green-600"
                    target="_blank"
                  >
                    <FaGithub />
                    Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
