import { Bio } from "../data/constants";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import HeroBgAnimation from "./HeroBgAnimation";
import myPic from "../images/pic4.jpg";

const headContainerAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
};
const headTextAnimation = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};
const headContentAnimation = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const Hero = () => {
  return (
    <div
      id="about"
      className="relative flex w-full justify-center overflow-hidden px-8 py-20 md:py-16 lg:py-20"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)",
      }}
    >
      <motion.div
        {...headContainerAnimation}
        className="relative z-10 flex w-full max-w-screen-xl flex-col items-center justify-between md:flex-row"
      >
        <div className="order-2 flex w-full flex-col items-center gap-6 text-center md:order-1 md:items-start md:text-left md:mt-12">

          <motion.div {...headTextAnimation}>
            <h1 className="text-[50px] font-bold leading-[68px] text-white md:text-[50px] lg:text-[60px] md:leading-[68px] lg:leading-[78px]">
              Hi, I am <br />{" "}
              <span className="primary-color">{Bio.name}</span>
            </h1>
            <div className="mt-2 flex items-center justify-center gap-3 text-[22px] font-semibold leading-[48px] text-white md:justify-start md:text-[22px] lg:text-[32px] md:leading-[48px] lg:leading-[58px]">
              I am a{" "}
              <span className="primary-color">
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </motion.div>

          <motion.div {...headContentAnimation}>
            <p className="mb-4 text-lg leading-loose text-gray-300 md:text-xl lg:text-2xl">
              {Bio.description}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full max-w-xs md:max-w-md"
          >

            <motion.a
              href={Bio.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-primary-color cursor-pointer rounded-full px-6 py-3 text-center text-lg font-semibold text-white 
                         transition-transform duration-300 ease-in-out hover:scale-105"
              animate={{
                boxShadow: [
                  "0 0 10px #ff4da6",
                  "0 0 20px #ff4da6",
                  "0 0 10px #ff4da6",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="flex-1 bg-transparent border-2 border-[#cb337f] rounded-full px-6 py-3 text-center text-lg font-semibold text-[#f34ea0] 
                         transition-all duration-300 ease-in-out hover:bg-[#ff4da6] hover:text-white hover:scale-105"
              whileHover={{ boxShadow: "0 0 15px #ff4da6" }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
        <div className="order-1 mb-10 flex w-full justify-center md:order-2 md:mb-0 md:justify-end md:mt-12">

          <motion.div {...headContentAnimation}>
            <Tilt>
              <div className="relative z-0 w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[400px] lg:h-[400px]">
                <motion.div
                  className="absolute inset-0 rounded-full border-6 border-[#4da2ed] blur-md"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute inset-0 z-0">
                  <HeroBgAnimation />
                </div>
                <img
                  src={myPic}
                  alt="Profile"
                  className="relative z-10 w-full h-full rounded-full border-2 border-[#4da2ed] "
                />
              </div>
            </Tilt>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

