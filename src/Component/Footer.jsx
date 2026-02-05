import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
// Combine
// import { IoLogoLinkedin , IoIosAddCircleOutline } from "react-icons/io";
// Io Package
// import {IoLogOut} from "react-icons/io"

function Footer() {
  return (
    <>
      <div className="bg-blue-950 py-5">
        <header className="mx-auto max-w-240 grid grid-cols-5 max-[770px]:grid-cols-3 text-xl text-white/80 max-[770px]:gap-3">
          <h1 className="text-4xl p-4">
            <span className="font-extrabold  text-white/80">
              <span className="text-white">F</span>ocual
            </span>
          </h1>

          <div className="flex flex-col p-4 gap-4 mt-4 items-center hover:text-white">
            <h1 className="text-white mb-6 font-bold text-xl">Company</h1>
            <a href="#future">Features</a>
            <a href="#Use">Use Cases</a>
            <a href="#in">Integration</a>
            <a href="#port">Portfolio</a>
          </div>
          <div className="flex flex-col p-4 gap-4 mt-4 items-center hover:text-white">
            <h1 className="text-white mb-6 font-bold text-xl">Registration</h1>
            <a href="#future">Features</a>
            <a href="#Use">Use Cases</a>
            <a href="#in">Integration</a>
            <a href="#port">Portfolio</a>
          </div>
          <div className="flex flex-col p-4 gap-4 mt-4 items-center hover:text-white">
            <h1 className="text-white mb-6 font-bold text-xl">Moderation</h1>
            <a href="#future">Features</a>
            <a href="#Use">Use Cases</a>
            <a href="#in">Integration</a>
            <a href="#port">Portfolio</a>
          </div>
          <div className="flex flex-col p-4 gap-4 mt-4 items-center hover:text-white">
            <h1 className="text-white mb-6 font-bold text-xl"> What we can do?</h1>
            <a href="#future">Features</a>
            <a href="#Use">Use Cases</a>
            <a href="#in">Integration</a>
            <a href="#port">Portfolio</a>
          </div>
        </header>
        <div className="w-full h-0.5 bg-white  mt-8 mb-8"> </div>
        <div className="text-white flex flex-row justify-around items-center ">
          <p>
            &#169;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Animi, veritatis?
          </p>
          <div className="p-4 flex gap-5 ">
            <a href="#ref">Home</a>
            <a href="#ref">Contact Us</a>
          </div>
          <div className="p-4 flex gap-5 text-2xl">
            <IoLogoInstagram className="text-blue-300" />
            <IoLogoLinkedin style={{color:'skyblue'}}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
