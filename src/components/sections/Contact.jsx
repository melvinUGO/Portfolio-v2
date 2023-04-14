import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
const Contact = () => {
  return (
    <div className="p-5 pt-10 md:pt-18 ">
      <h2 className="text-center text-4xl py-5">CONTACT ME</h2>
      <div className=" flex flex-wrap items-center justify-center gap-5">
        <div className="flex items-center gap-2 bg-gray-300 text-black font-semibold w-fit py-1 px-3 rounded-md">
          <FaEnvelope />
          <a href="mailto:ugochukwumelvin@gmail.com">
            ugochukwumelvin@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 bg-gray-300 text-black font-semibold w-fit py-1 px-3 rounded-md">
          <FaPhoneAlt />
          <a href="tel:09056005319">090 5600 5319</a>
        </div>
      </div>
      <br />
      <div className="mx-auto  align-bottom flex items-center gap-2 bg-gray-300 text-black font-semibold w-fit py-1 px-3 rounded-md">
        <MdLocationPin />
        <a href="https://www.google.com/maps/place/Lagos/@6.5480551,3.2839596,11z/data=!3m1!4b1!4m6!3m5!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!8m2!3d6.5243793!4d3.3792057!16zL20vMGxuZnk">
          Lagos, Nigeria
        </a>
      </div>
      <p className="text-center text-4xl mt-16 py-10">LET'S CONNECT HERE</p>
      <div className="p-5 flex gap-10 text-[2rem] w-fit mx-auto">
        <a
          target="_blank"
          href="https://github.com/melvinUGO"
          className="animate-bounce transition-all hover:text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/c0deakBlack"
          target="_blank"
          className="animate-bounce transition-all hover:text-white"
        >
          <FaTwitter />
        </a>
        <a
          href=""
          target="_blank"
          className="animate-bounce transition-all hover:text-white"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;
