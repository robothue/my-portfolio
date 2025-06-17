export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 overflow-hidden"
      >
      {/* Text Content */}
      <div className="flex-1 mb-12 md:mb-0" data-aos="fade-right">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand dark:text-brand">
          Hi, I’m Abdallah
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
          A backend developer who commands the room with clean code, calm logic, and just the right jokes.
        </p>
        <a
          href="#projects"
          className="inline-block bg-brand hover:bg-brandHover text-white font-medium py-2 px-6 rounded transition-colors duration-300"
        >
          See My Work
        </a>
      </div>

      {/* Illustration */}
      <div className="flex-1 flex justify-center" data-aos="fade-left">
        <img
          src="/illuz/hero.png"
          alt="Developer illustration"
          className="w-full max-w-md"
          style={{
            background: "transparent",
            borderRadius: 0,
            boxShadow: "none",
            mixBlendMode: "multiply",
          }}
        />
      </div>
    </section>
  );
}
