import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative  bg-black/30 text-gray-300 pt-12 pb-6 px-6 mt-20 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        
        {/* Left - Brand */}
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-primary-color">
            Vardhan Malyala
          </h2>
          <p className="mt-2 text-sm text-gray-400 italic border-l-2 border-pink-600 pl-3 leading-relaxed">
            “Crafting code that bridges creativity and technology.”
          </p>
        </div>

        {/* Center - Navigation */}
        <nav className="flex justify-center gap-6 flex-wrap text-sm md:text-base">
          {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative text-gray-400 hover:text-white transition group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#7a0d8a] via-[#c92085] to-[#c68109] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right - Socials */}
        <div className="flex justify-center md:justify-end gap-5 text-xl">
          {[
            { icon: <FaGithub />, link: "https://github.com/Vardhan09-web/" },
            { icon: <FaLinkedin />, link: "https://linkedin.com/in/vardhan-malyala-b82606294/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/vardhan_malyala?igsh=c3U3czdta205NDk5" },
            { icon: <FaEnvelope />, link: "mailto:vardhanmalyala@gmail.com" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-3 rounded-full bg-gray-800 transition duration-300 hover:scale-110 hover:text-white hover:bg-gradient-to-r hover:from-[#7a0d8a] hover:via-[#c92085] hover:to-[#c68109] shadow-md"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="text-transparent bg-clip-text bg-primary-color font-medium">Vardhan Malyala</span>.  
        Built with ❤️, and endless curiosity 🚀
      </div>
    </footer>
  );
};

export default Footer;
