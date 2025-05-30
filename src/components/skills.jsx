import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiJsonwebtokens } from "react-icons/si";
import { GrRestroom } from "react-icons/gr";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const skills = [
  {
    title: "JavaScript Wizard",
    description: "Me casting spells with JS like it’s second nature.",
    image: "/illustrations/js.png",
  },
  {
    title: "React Tactician",
    description: "I bend components to my will with React.",
    image: "/illustrations/react.png",
  },
  {
    title: "Node.js Backender",
    description: "Commanding the backend with serious energy.",
    image: "/illustrations/node.png",
  },
  {
    title: "MongoDB Whisperer",
    description: "Data flows smooth when I’m in the room.",
    image: "/illustrations/mongo.png",
  },
  {
    title: "Tailwind Styler",
    description: "Designs that slap—clean and fast with Tailwind.",
    image: "/illustrations/tailwind.png",
  },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-white max-w-7xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b-4 border-indigo-600 inline-block">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={skill.image}
              alt={skill.title}
              className="w-full h-40 object-contain mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">{skill.title}</h3>
            <p className="text-gray-700 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}























// const skills = [
//   { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
//   { name: "React", icon: <FaReact className="text-blue-500" /> },
//   { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
//   { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
//   { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
//   { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
//   { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
//   { name: "REST APIs", icon: <GrRestroom className="text-indigo-600" /> },
//   { name: "JWT Authentication", icon: <SiJsonwebtokens className="text-rose-500" /> },
//   { name: "HTML5 & CSS3", icon: (
//     <div className="flex gap-1">
//       <IoLogoHtml5 className="text-orange-600" />
//       <IoLogoCss3 className="text-blue-600" />
//     </div>
//   ) },
// ];

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="py-20 bg-white px-6 md:px-12 max-w-7xl mx-auto"
//       data-aos="fade-up"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b-4 border-indigo-600 inline-block">
//         Skills
//       </h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="bg-indigo-50 text-indigo-700 px-4 py-6 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 text-center"
//             data-aos="zoom-in"
//             data-aos-delay={index * 100}
//           >
//             <div className="text-3xl">{skill.icon}</div>
//             <span className="font-medium text-sm">{skill.name}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


