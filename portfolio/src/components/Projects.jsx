import React, { useRef, useState, useEffect } from "react";
import { projects } from "../data/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BsArrowUpRight } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";

const Projects = () => {
  const contentRef = useRef();
  const containerRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projects.length;

  useGSAP(() => {
    gsap.fromTo(
      ".project-img img",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      ".details",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.1 }
    );
  }, [currentIndex]);

  const goToSlide = (index) => {
    const newIndex = (index + totalProjects) % totalProjects;
    setCurrentIndex(newIndex);
  };

  const getProjectAt = (offset) => {
    return projects[(currentIndex + offset + totalProjects) % totalProjects];
  };

  const currentProject = getProjectAt(0);
  const prevProject = getProjectAt(-1);
  const nextProject = getProjectAt(1);

  // Auto Slide
  useEffect(() => {
    let interval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleMouseEnter = () => {
    gsap.killTweensOf(containerRef.current);
    clearInterval(window.projectInterval);
  };

  const handleMouseLeave = () => {
    window.projectInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);
  };

  return (
    <section
      id="projects"
      className="relative py-12 sm:py-16 px-4 sm:px-6 text-white"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 sm:mb-10">
        My Projects
      </h2>
      <p className="text-sm sm:text-lg text-center font-semibold text-gray-400 mb-8">
        I have worked on a wide range of projects. Here are some of my good ones.
      </p>

      {/* Navigation Buttons */}
      <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
        {projects.map((project, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              className={`px-3 py-2 text-xs sm:text-sm rounded-full border transition ${
                isActive
                  ? "text-white border-white bg-primary-color"
                  : "text-gray-400 border-gray-600 hover:text-white"
              }`}
              onClick={() => goToSlide(index)}
            >
              {project.title}
            </button>
          );
        })}
      </nav>

      {/* Project Content */}
      <div className="content flex flex-col md:flex-row items-center gap-8 sm:gap-10 max-w-5xl mx-auto transition-all duration-700 ease-in-out">
        {/* Arrows (hidden on mobile) */}
        <div className="arrows hidden md:flex flex-col justify-between">
          <button
            onClick={() => goToSlide(currentIndex - 1)}
            className="flex items-center gap-2 mb-4 hover:text-primary-color transition"
          >
            <FaChevronLeft /> <span>{prevProject.title}</span>
          </button>

          <button
            onClick={() => goToSlide(currentIndex + 1)}
            className="flex items-center gap-2 hover:text-primary-color transition"
          >
            <span>{nextProject.title}</span> <FaChevronRight />
          </button>
        </div>

        {/* Project Image */}
        <div className="project-img flex-1 w-full">
          <img
            src={
              currentProject.image ||
              "https://via.placeholder.com/500x300?text=Project+Preview"
            }
            alt={currentProject.title}
            className="w-full h-56 sm:h-72 object-cover rounded-2xl shadow-lg shadow-primary-color/40"
          />
        </div>

        {/* Project Details */}
        <div className="details flex-1 w-full text-center md:text-left">
          <div ref={contentRef} className="info mb-3">
            <p
              id="project-title"
              className="text-xl sm:text-2xl font-semibold"
            >
              {currentProject.title}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
              {currentProject.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs sm:text-sm px-3 py-1 bg-gray-800 rounded-full border border-gray-600 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-300 text-sm sm:text-base">
            {currentProject.description}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            {currentProject.github && (
              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition text-sm sm:text-base"
              >
                GitHub
              </a>
            )}
            {currentProject.webapp && (
              <a
                href={currentProject.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-color px-4 py-2 rounded-lg text-white hover:opacity-80 transition text-sm sm:text-base"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Explore More Section */}
      <div className="w-full flex justify-center mt-12 px-4">
        <div className="w-full max-w-4xl bg-black/30 p-6 sm:p-10 rounded-2xl 
          shadow-lg shadow-primary-color/40 border border-gray-700 
          flex flex-col items-center text-center 
          transition-all duration-300 hover:shadow-primary-color/60 hover:scale-[1.02]">
          <h3 className="text-xl sm:text-3xl font-semibold text-primary-color mb-4">
            Explore More Projects
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mb-6">
            Ready to collaborate on innovative projects? Let’s build something extraordinary together!
          </p>
          <a
            href="https://github.com/vardhanmalyala"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-color text-white font-semibold py-3 px-6 sm:px-10 
              rounded-lg shadow-md hover:shadow-lg hover:shadow-primary-color/50 
              hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          >
            <FaGithub />
            View All Projects on GitHub
            <BsArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
