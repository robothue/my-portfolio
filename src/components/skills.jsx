import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiJsonwebtokens } from "react-icons/si";
import { GrRestroom } from "react-icons/gr";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";



export default function Skills() {
  const skills = [
    {
      title: "Problem Solver",
      description:
        "I figure things out. Whether it's a bug in code or a design that doesn't feel right — I take a step back, think it through, and fix it.",
    },
    {
      title: "Visual Thinker",
      description:
        "I turn ideas into beautiful, clean designs. I know how to make things look good and feel smooth for users.",
    },
    {
      title: "Builder of Things",
      description:
        "From scratch to screen — I build full websites and apps that actually work, not just fancy mockups.",
    },
    {
      title: "Team Communicator",
      description:
        "I break down complex tech talk into simple language, so everyone on the team stays on the same page.",
    },
    {
      title: "Always Learning",
      description:
        "Tech keeps changing — I stay curious, play with new tools, and keep improving my craft every week.",
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-indigo-50 p-6 rounded-2xl shadow hover:shadow-lg transition-all"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-700">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}








// const skills = [
//   {
//     title: "JavaScript Wizard",
//     description: "Me casting spells with JS like it’s second nature.",
//     image: "/illustrations/js.png",
//   },
//   {
//     title: "React Tactician",
//     description: "I bend components to my will with React.",
//     image: "/illustrations/react.png",
//   },
//   {
//     title: "Node.js Backender",
//     description: "Commanding the backend with serious energy.",
//     image: "/illustrations/node.png",
//   },
//   {
//     title: "MongoDB Whisperer",
//     description: "Data flows smooth when I’m in the room.",
//     image: "/illustrations/mongo.png",
//   },
//   {
//     title: "Tailwind Styler",
//     description: "Designs that slap—clean and fast with Tailwind.",
//     image: "/illustrations/tailwind.png",
//   },
// ];

// export default function Skills() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section id="skills" className="py-20 px-6 md:px-12 bg-white max-w-7xl mx-auto" data-aos="fade-up">
//       <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b-4 border-indigo-600 inline-block">
//         Skills
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="bg-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
//             data-aos="zoom-in"
//             data-aos-delay={index * 100}
//           >
//             <img
//               src={skill.image}
//               alt={skill.title}
//               className="w-full h-40 object-contain mb-4 rounded"
//             />
//             <h3 className="text-xl font-semibold mb-2 text-indigo-700">{skill.title}</h3>
//             <p className="text-gray-700 text-sm">{skill.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

