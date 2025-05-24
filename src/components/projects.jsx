import { useState } from "react";
import projects from "../data/projectsData";
import { Link } from "react-router-dom";



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
            data-aos="fade-up"
         >
             {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                />
            )}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <li
                  key={i}
                  className="text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded"
                  data-aos="fade"
                  data-aos-delay={i * 100}
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
                data-aos="fade-right"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 font-medium hover:underline"
                data-aos="fade-left"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
  <Link
    to="/projects"
    className="inline-block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
  >
    See More Projects
  </Link>
</div>
    </section>
    
  );
}

