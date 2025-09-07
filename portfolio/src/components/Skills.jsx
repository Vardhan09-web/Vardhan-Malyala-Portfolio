// import React from "react";
// import { skills } from "../data/constants";
// import Tilt from "react-parallax-tilt";

// const Skills = () => {
//     return (
//         <div id="Skills" className="flex flex-col items-center justify-center relative z-10">
//             <div className="flex w-full max-w-screen-xl flex-col items-center justify-between gap-3 md:gap-4 px-4 sm:px-6 lg:px-8">
//                 <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center mt-5 md:mt-12 text-white">
//                     Skills
//                 </h2>
//                 <p className="text-base sm:text-lg text-center font-semibold text-gray-400">
//                     A showcase of my technical expertise and tools I work with.
//                 </p>

//                 <div className="flex flex-wrap justify-center mt-5 md:mt-8 gap-10">
//                     {skills.map((skill, index) => (
//                         <Tilt key={`skill-${index}`}>
//                             <div className="w-full max-w-md sm:max-w-lg bg-gray-800/80 glass border border-gray-600 rounded-2xl p-6 md:p-9 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(219,39,119,0.6)] hover:border-pink-500">
//                                 <h3 className="text-xl md:text-2xl font-semibold text-center mb-5 text-gray-300">
//                                     {skill.title}
//                                 </h3>

//                                 <div className="flex flex-wrap justify-center gap-3 mb-5">
//                                     {skill.skills.map((item, itemIndex) => (
//                                         <div
//                                             key={`skill-item-${itemIndex}`}
//                                             className="flex items-center justify-center gap-2 rounded-xl border border-gray-400 p-2 md:p-3 text-sm md:text-base font-normal text-gray-200 transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(219,39,119,0.5)] hover:border-pink-500"
//                                         >
//                                             <img src={item.image} alt={item.name} className="w-6 h-6" />
//                                             {item.name}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </Tilt>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Skills;

import React from "react";
import { skills } from "../data/constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
    return (
        <div id="skills" className="flex flex-col items-center justify-center relative z-10">
            <div className="flex w-full max-w-screen-xl flex-col items-center justify-between gap-3 md:gap-4 px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center mt-5 md:mt-12 text-white">
                    Skills
                </h2>
                <p className="text-base sm:text-lg text-center font-semibold text-gray-400">
                    A showcase of my technical expertise and tools I work with.
                </p>

                <div className="flex flex-wrap justify-center mt-5 md:mt-8 gap-10">
                    {skills.map((skill, index) => (
                        <Tilt key={`skill-${index}`}>
                            <div
                                className="w-full max-w-md sm:max-w-lg bg-gray-800/80 glass border border-gray-600 
                      rounded-2xl p-6 md:p-9 shadow-[0_0_6px_1px_rgba(219,39,119,0.25)] 
               transition-all duration-300 
             hover:scale-105 
            hover:shadow-[0_0_18px_3px_rgba(219,39,119,0.5)] 
               hover:border-pink-500"
                            >

                                <h3 className="text-xl md:text-2xl font-semibold text-center mb-5 text-gray-300">
                                    {skill.title}
                                </h3>

                                <div className="flex flex-wrap justify-center gap-3 mb-5">
                                    {skill.skills.map((item, itemIndex) => (
                                        <div
                                            key={`skill-item-${itemIndex}`}
                                            className="flex items-center justify-center gap-2 rounded-xl border border-gray-400 p-2 md:p-3 
                                                text-sm md:text-base font-normal text-gray-200 
                                                shadow-[0_0_10px_2px_rgba(219,39,119,0.3)] 
                                                transition-all duration-300 
                                                hover:shadow-[0_0_18px_4px_rgba(219,39,119,0.6)] 
                                                hover:border-pink-500"
                                        >
                                            <img src={item.image} alt={item.name} className="w-6 h-6" />
                                            {item.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
