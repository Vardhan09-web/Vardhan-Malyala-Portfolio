import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import myPic from "../images/My_Img.png";

const words = "Creative Solutions, Driven by Passion.";

const Intro = () => {
  const containerRef = useRef(null);
  const myPicRef = useRef(null);
  const nameRef = useRef(null);
  const textRefs = useRef([]);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        containerRef.current.style.display = "none";
      },
    });

    tl.fromTo(
      myPicRef.current,
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4 }
    )
      .fromTo(
        nameRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25 },
        "-=0.25"
      )
      .fromTo(
        textRefs.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, stagger: 0.015, duration: 0.15 },
        "-=0.15"
      )
      .to({}, { duration: 0.4 })
      //exit (faster, smoother)
      .to(
        [myPicRef.current, nameRef.current, textRefs.current, blob1Ref.current, blob2Ref.current],
        {
          opacity: 0,
          y: -25,
          duration: 0.4,
          ease: "power2.inOut",
          stagger: 0.02,
        }
      )
      .to(
        containerRef.current,
        { opacity: 0, duration: 0.2, ease: "power2.in" },
        "-=0.2"
      );
    gsap.to(blob1Ref.current, {
      scale: 1.15,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "sine.inOut",
    });
    gsap.to(blob2Ref.current, {
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
      delay: 0.3,
    });
  }, []);

  const characters = words.split("");

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
    >
      <div
        ref={blob1Ref}
        className="absolute w-[500px] h-[500px] rounded-full 
                   bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                   opacity-30 blur-3xl"
      />
      <div
        ref={blob2Ref}
        className="absolute w-[350px] h-[350px] rounded-full 
                   bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 
                   opacity-30 blur-3xl"
      />

      <div className="relative text-center">
        <div
          className="relative w-20 h-20 md:w-24 md:h-24 mx-auto"
          ref={myPicRef}
        >
          <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-blue-400 to-pink-500 opacity-60 blur-lg"></div>
          <img
            src={myPic}
            alt="My Profile"
            className="relative w-full h-full rounded-full object-cover shadow-[0_0_25px_rgba(255,255,255,0.7)]"
          />
        </div>
        <h1
          ref={nameRef}
          className="mt-3 text-xl md:text-2xl font-semibold 
                         bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                         bg-clip-text text-transparent"
        >
          Vardhan Malyala
        </h1>
        <p className="mt-2 text-gray-300 text-sm md:text-base font-medium">
          {characters.map((char, index) => (
            <span
              key={index}
              ref={(el) => (textRefs.current[index] = el)}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Intro;
