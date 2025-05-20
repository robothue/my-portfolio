import { useState } from "react";

const projects = [
  {
    title: "Movie Explorer",
    description: "A movie discovery app built with React, using TMDB API and styled with Tailwind.",
    tech: ["React", "TailwindCSS", "TMDB API"],
    link: "https://yourmovieapp.netlify.app",
    github: "https://github.com/yourgithub/movie-explorer",
  },
  {
    title: "Task Manager",
    description: "A full-stack task tracker built with MERN stack and JWT authentication.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "#",
    github: "https://github.com/yourgithub/task-manager",
  },
  {
    title: "Portfolio Website",
    description: "This very site — my personal portfolio built with React and Tailwind.",
    tech: ["React", "TailwindCSS", "Vite"],
    link: "#",
    github: "https://github.com/yourgithub/portfolio",
  },
];

// Get all unique techs from projects
const allTechs = [
  ...new Set(projects.flatMap((project) => project.tech)),
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(filter));

  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-4 border-indigo-600 inline-block">
        Projects
      </h2>

      {/* Filter Buttons */}
      <div className="mb-8 flex flex-wrap gap-3">
        <button
          onClick={() => setFilter("All")}
          className={`px-4 py-2 rounded ${
            filter === "All"
              ? "bg-indigo-600 text-white"
              : "bg-white text-indigo-600 border border-indigo-600"
          }`}
        >
          All
        </button>
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-4 py-2 rounded ${
              filter === tech
                ? "bg-indigo-600 text-white"
                : "bg-white text-indigo-600 border border-indigo-600"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <li
                  key={i}
                  className="text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-medium hover:underline"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 font-medium hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}












// const projects = [
//     {
//       title: "Movie Explorer",
//       description: "A movie discovery app built with React, using TMDB API and styled with Tailwind.",
//       tech: ["React", "TailwindCSS", "TMDB API"],
//       link: "https://yourmovieapp.netlify.app",
//       github: "https://github.com/yourgithub/movie-explorer",
//     },
//     {
//       title: "Task Manager",
//       description: "A full-stack task tracker built with MERN stack and JWT authentication.",
//       tech: ["MongoDB", "Express", "React", "Node.js"],
//       link: "#",
//       github: "https://github.com/yourgithub/task-manager",
//     },
//     {
//       title: "Portfolio Website",
//       description: "This very site — my personal portfolio built with React and Tailwind.",
//       tech: ["React", "TailwindCSS", "Vite"],
//       link: "#",
//       github: "https://github.com/yourgithub/portfolio",
//     },
//   ];
  
//   export default function Projects() {
//     return (
//       <section
//         id="projects"
//         className="py-20 bg-gray-100 px-6 md:px-12 max-w-7xl mx-auto"
//         data-aos="fade-up"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b-4 border-indigo-600 inline-block">
//           Projects
//         </h2>
//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
//               data-aos="fade-up"
//               data-aos-delay={index * 50} // stagger animation by 100ms
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {project.title}
//               </h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <ul className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map((tech, i) => (
//                   <li
//                     key={i}
//                     className="text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded"
//                   >
//                     {tech}
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex gap-4">
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   className="text-indigo-600 font-medium hover:underline"
//                 >
//                   Live
//                 </a>
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   className="text-gray-600 font-medium hover:underline"
//                 >
//                   GitHub
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }
  