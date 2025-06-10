import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiJavascript, SiTailwindcss, SiJsonwebtokens } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { GrRestroom } from "react-icons/gr";

// Import your SVGs here
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
      description:
        "I figure things out. Whether it's a bug in code or a design that doesn't feel right — I take a step back, think it through, and fix it.",
      image: problemSolverImg, // Replace with: problemSolverImg
    },
    {
      title: "Visual Thinker",
      description:
        "I turn ideas into beautiful, clean designs. I know how to make things look good and feel smooth for users.",
      image: visualThinkerImg, // Replace with: visualThinkerImg
    },
    {
      title: "Builder of Things",
      description:
        "From scratch to screen — I build full websites and apps that actually work, not just fancy mockups.",
      image: builderImg, // Replace with: builderImg
    },
    {
      title: "Team Communicator",
      description:
        "I break down complex tech talk into simple language, so everyone on the team stays on the same page.",
      image: communicatorImg, // Replace with: communicatorImg
    },
    {
      title: "Always Learning",
      description:
        "Tech keeps changing — I stay curious, play with new tools, and keep improving my craft every week.",
      image: alwaysLearningImg, // Replace with: alwaysLearningImg
    },
  ];


  return (
    <section
      id="skills"
      className="py-20 bg-white px-6 md:px-12 max-w-7xl mx-auto"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b-4 border-indigo-600 inline-block">
        What I’m Good At
      </h2>

      {/* Row 1 – 2 Items */}
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        {skills.slice(0, 2).map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-center flex-1">
            <img
              src={skill.image}
              alt={skill.title}
              className="w-39 h-40 mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{skill.title}</h3>
            <p className="text-gray-700 max-w-xs">{skill.description}</p>
          </div>
        ))}
      </div>

      {/* Row 2 – 3 Items */}
      <div className="flex flex-col md:flex-row gap-8">
        {skills.slice(2).map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-center flex-1">
            <img
              src={skill.image}
              alt={skill.title}
              className="w-39 h-40 mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{skill.title}</h3>
            <p className="text-gray-700 max-w-xs">{skill.description}</p>
          </div>
        ))}
      </div>

  {/* Technical Skills Section */}
<div className="mt-20" data-aos="fade-up">
  <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b-4 border-indigo-600 inline-block">
    Technical Skills
  </h3>

  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-4xl text-indigo-600">
    <div className="flex flex-col items-center">
      <FaReact />
      <p className="text-sm mt-2 text-gray-700">React.js</p>
    </div>
    <div className="flex flex-col items-center">
      <FaNodeJs />
      <p className="text-sm mt-2 text-gray-700">Node.js</p>
    </div>
    <div className="flex flex-col items-center">
      <SiExpress />
      <p className="text-sm mt-2 text-gray-700">Express.js</p>
    </div>
    <div className="flex flex-col items-center">
      <SiMongodb />
      <p className="text-sm mt-2 text-gray-700">MongoDB</p>
    </div>
    <div className="flex flex-col items-center">
      <SiJavascript />
      <p className="text-sm mt-2 text-gray-700">JavaScript</p>
    </div>
    <div className="flex flex-col items-center">
      <SiTailwindcss />
      <p className="text-sm mt-2 text-gray-700">Tailwind CSS</p>
    </div>
    <div className="flex flex-col items-center">
      <IoLogoHtml5 />
      <p className="text-sm mt-2 text-gray-700">HTML5</p>
    </div>
    <div className="flex flex-col items-center">
      <IoLogoCss3 />
      <p className="text-sm mt-2 text-gray-700">CSS3</p>
    </div>
    <div className="flex flex-col items-center">
      <FaGitAlt />
      <p className="text-sm mt-2 text-gray-700">Git</p>
    </div>
    <div className="flex flex-col items-center">
      <SiJsonwebtokens />
      <p className="text-sm mt-2 text-gray-700">JWT</p>
    </div>
    <div className="flex flex-col items-center">
      <GrRestroom />
      <p className="text-sm mt-2 text-gray-700">REST APIs</p>
    </div>
  </div>
</div>

    </section>
  );
}

  
//   return (
//     <section
//       id="skills"
//       className="py-20 bg-white px-6 md:px-12 max-w-7xl mx-auto"
//       data-aos="fade-up"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b-4 border-indigo-600 inline-block">
//         What I’m Good At
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center"
//             data-aos="fade-up"
//             data-aos-delay={index * 100}
//           >
//             <img
//               src={skill.image}
//               alt={skill.title}
//               className="w-full max-w-md h-auto mb-6 drop-shadow-lg"
//             />
//             <div className="bg-indigo-50 p-6 rounded-2xl shadow hover:shadow-lg transition-all w-full">
//               <h3 className="text-xl font-semibold text-indigo-700 mb-2">
//                 {skill.title}
//               </h3>
//               <p className="text-gray-700">{skill.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
