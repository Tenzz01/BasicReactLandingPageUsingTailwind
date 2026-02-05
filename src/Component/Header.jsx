import React from "react";
import Button from './Button.jsx'

export default function Header() {
  return (
    <>
      <div className="bg-blue-950 py-5 p-8">
        <header className="mx-auto max-w-240 flex justify-between items-center text-xl text-white/80">
          <h1 className="text-3xl">
            <span className="font-extrabold  text-white/80"><span className="text-white">F</span>ocual</span>
          </h1>
          <div className="flex gap-7 items-center hover:text-white max-[770px]:hidden">
            <a href="#future">Features</a>
            <a href="#Use">Use Cases</a>
            <a href="#in">Integration</a>
            <a href="#port">Portfolio</a>
          </div>
          <Button title="Join Us"/>
        </header>
      </div>
    </>
  );
}
