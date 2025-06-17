import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../data/projectsData"; // adjust path as needed
import PageWrapper from "../components/pageWrapper";

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  
    // Scroll to top when ProjectsPage loads
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  
  return (
    <PageWrapper>
      <section className="min-h-screen bg-[#FAF5FF] dark:bg-gray-900 py-20 px-6 md:px-12 max-w-7xl mx-auto text-gray-800 dark:text-gray-100">
        <h2
          className="text-4xl font-bold mb-10 border-b-4 border-[#BA68C8] text-[#BA68C8] inline-block"
          data-aos="fade-up"
        >
          All Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition text-gray-800 dark:text-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="text-sm bg-[#EDD6F6] text-[#9C27B0] px-2 py-1 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-[#BA68C8] font-medium hover:underline"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-gray-600 font-medium hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
