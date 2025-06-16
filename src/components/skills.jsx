import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaReact, FaNodeJs, FaGitAlt
} from "react-icons/fa";
import {
  SiExpress, SiMongodb, SiJavascript, SiTailwindcss, SiJsonwebtokens
} from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { GrRestroom } from "react-icons/gr";

import builderImg from "/illuz/builder.svg";
import visualThinkerImg from "/illuz/visual thinker.svg";
import alwaysLearningImg from "/illuz/always learning.svg";
import problemSolverImg from "/illuz/problem solver.svg";
import communicatorImg from "/illuz/team communicator.svg";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const skills = [
    {
      title: "Problem Solver",
      description: "I figure things out. Whether it's a bug in code or a design that doesn't feel right — I take a step back, think it through, and fix it.",
      image: problemSolverImg,
    },
    {
      title: "Visual Thinker",
      description: "I turn ideas into beautiful, clean designs. I know how to make things look good and feel smooth for users.",
      image: visualThinkerImg,
    },
    {
      title: "Builder of Things",
      description: "From scratch to screen — I build full websites and apps that actually work, not just fancy mockups.",
      image: builderImg,
    },
    {
      title: "Team Communicator",
      description: "I break down complex tech talk into simple language, so everyone on the team stays on the same page.",
      image: communicatorImg,
    },
    {
      title: "Always Learning",
      description: "Tech keeps changing — I stay curious, play with new tools, and keep improving my craft every week.",
      image: alwaysLearningImg,
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-[#FAF5FF] px-6 md:px-12 max-w-7xl mx-auto"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b-4 border-[#BA68C8] text-[#BA68C8] inline-block">
        What I’m Good At
      </h2>

      {/* Row 1 – 2 Items */}
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        {skills.slice(0, 2).map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-center flex-1 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <img src={skill.image} alt={skill.title} className="w-39 h-40 mb-4 object-contain" />
            <h3 className="text-xl font-semibold text-[#BA68C8] mb-2">{skill.title}</h3>
            <p className="text-gray-700 max-w-xs">{skill.description}</p>
          </div>
        ))}
      </div>

      {/* Row 2 – 3 Items */}
      <div className="flex flex-col md:flex-row gap-8">
        {skills.slice(2).map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-center flex-1 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <img src={skill.image} alt={skill.title} className="w-39 h-40 mb-4 object-contain" />
            <h3 className="text-xl font-semibold text-[#BA68C8] mb-2">{skill.title}</h3>
            <p className="text-gray-700 max-w-xs">{skill.description}</p>
          </div>
        ))}
      </div>

      {/* Technical Skills Section */}
      <div className="mt-20" data-aos="fade-up">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b-4 border-[#BA68C8] text-[#BA68C8] inline-block">
          Technical Skills
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-4xl text-[#BA68C8]">
          {[FaReact, FaNodeJs, SiExpress, SiMongodb, SiJavascript, SiTailwindcss, IoLogoHtml5, IoLogoCss3, FaGitAlt, SiJsonwebtokens, GrRestroom].map((Icon, index) => (
            <div key={index} className="flex flex-col items-center">
              <Icon />
              <p className="text-sm mt-2 text-gray-700">
                {
                  {
                    0: "React.js",
                    1: "Node.js",
                    2: "Express.js",
                    3: "MongoDB",
                    4: "JavaScript",
                    5: "Tailwind CSS",
                    6: "HTML5",
                    7: "CSS3",
                    8: "Git",
                    9: "JWT",
                    10: "REST APIs",
                  }[index]
                }
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

