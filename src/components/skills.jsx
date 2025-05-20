const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TailwindCSS",
    "Git & GitHub",
    "REST APIs",
    "JWT Authentication",
    "HTML5 & CSS3",
  ];
  
  export default function Skills() {
    return (
      <section
        id="skills"
        className="py-20 bg-white px-6 md:px-12 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b-4 border-indigo-600 inline-block">
          Skills
        </h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium text-sm"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  }
  


  