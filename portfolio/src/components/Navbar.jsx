import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuRounded } from "@mui/icons-material";
import { Bio } from "../data/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-center 
    bg-black/40 backdrop-blur-md border-b border-white/10 shadow-lg text-white">

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center text-lg font-medium focus:outline-none focus:ring-0"
        >
          <span className="primary-color text-3xl">&lt;</span>
          <span>Vardhan</span>
          <span className="primary-color">/</span>
          <span>Malyala</span>
          <span className="primary-color text-3xl">&gt;</span>
        </Link>
        <div className="block cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded className="text-white" />
        </div>
        <ul className="hidden gap-8 md:flex">
          {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 transition-colors hover:text-white group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#7a0d8a] via-[#c92085] to-[#c68109] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>



        <div className="hidden md:block">
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#D3208B] px-6 py-2 text-[#D3208B] transition-colors hover:bg-primary-color hover:text-white"
          >
            Github Profile
          </a>
        </div>
      </div>

      {isOpen && (
        <ul
          className={`absolute right-0 top-20 flex w-full flex-col items-start gap-4 rounded-b-xl bg-black/95 px-10 py-6 text-white shadow-lg transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
        >
          <li>
            <a onClick={() => setIsOpen(false)} href="#about" className="text-gray-300 transition-colors hover:text-[#c92085]">About</a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)} href="#skills" className="text-gray-300 transition-colors hover:text-[#c92085]">Skills</a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)} href="#projects" className="text-gray-300 transition-colors hover:text-[#c92085]">Projects</a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)} href="#education" className="text-gray-300 transition-colors hover:text-[#c92085]">Education</a>
          </li>
          <li>
            <a onClick={() => setIsOpen(false)} href="#contact" className="text-gray-300 transition-colors hover:text-[#c92085]">Contact</a>
          </li>
          <li>
            <a
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full border border-[#D3208B] px-6 py-2 text-[#D3208B] transition-colors hover:bg-primary-color hover:text-white"
            >
              Github Profile
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
