import { useState } from "react";
import projects from "../data/projectsData";
import { Link } from "react-router-dom";

const allTechs = ["All", ...new Set(projects.flatMap((p) => p.tech))];

export default function FeaturedProjects() {
  const [filter, setFilter] = useState("All");

  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const filteredProjects =
    filter === "All"
      ? sortedProjects
      : sortedProjects.filter((project) => project.tech.includes(filter));

  const displayedProjects = filteredProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 px-6 md:px-12 max-w-7xl mx-auto"
      >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-4 border-[#BA68C8] inline-block">
        Featured Projects
      </h2>

      {/* Filter Buttons */}
      <div className="mb-8 flex flex-wrap gap-3">
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-4 py-2 rounded transition ${
              filter === tech
                ? "bg-[#BA68C8] text-white"
                : "bg-white text-[#BA68C8] border border-[#BA68C8]"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition p-6 text-gray-800 dark:text-gray-100">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded"
              />
            )}
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <li
                  key={i}
                  className="text-sm bg-[#f3e6f7] text-[#BA68C8] px-2 py-1 rounded"
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
                className="text-[#BA68C8] font-medium hover:underline"
              >
                Live
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 font-medium hover:text-[#BA68C8]"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* See More */}
      <div className="mt-10 text-center">
        <Link
          to="/projects"
          className="inline-block bg-[#BA68C8] text-white px-6 py-3 rounded hover:bg-[#a457b5] transition"
        >
          See More Projects
        </Link>
      </div>
    </section>
  );
}
