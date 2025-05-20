export default function About() {
    return (
      <section
        id="about"
        className="py-20 bg-white text-gray-800 px-6 md:px-12 max-w-6xl mx-auto"
        data-aos="fade-up" 
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-4 border-indigo-600 inline-block">
          About Me
        </h2>
        <div className="mt-6 text-lg leading-relaxed">
          <p className="mb-4">
            I'm <span className="font-semibold text-indigo-600">Magnum Geez</span>, a passionate web developer with a background in statistics and a love for building clean, user-friendly digital experiences.
          </p>
          <p className="mb-4">
            I specialize in backend development using the MERN stack (MongoDB, Express.js, React, Node.js) and enjoy solving complex problems with elegant solutions.
          </p>
          <p className="mb-4">
            When I’m not coding, you can find me dancing, exploring design trends on Twitter, or working on my next big idea.
          </p>
          <p>
            I’m currently open to full-time opportunities — if you like what you see, let’s connect!
          </p>
        </div>
      </section>
    );
  }
  