// src/components/Hero.jsx
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 bg-white"
    >
      {/* Text Content */}
      <div className="flex-1 mb-12 md:mb-0" data-aos="fade-right">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-700">
          Hi, I’m Abdallah
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          A backend developer who commands the room with clean code, calm logic, and just the right jokes.
        </p>
        <a
          href="#projects"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded transition"
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
            background: 'transparent',
            borderRadius: '0',
            boxShadow: 'none',
            mixBlendMode: 'multiply', // optional trick to help blend
          }}
        />
      </div>
    </section>
  );
}
















// export default function Hero() {
//   return (
//     <div className="min-h-screen flex items-center">
//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-start max-w-7xl mx-auto px-6 md:px-12"
//       >
//         <p
//           className="text-indigo-600 font-semibold mb-2 text-lg"
//           data-aos="fade-down"
//           data-aos-delay="100"
//         >
//           Hi, my name is
//         </p>

//         <h1
//           className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           Abdallah Masudi
//         </h1>

//         <h2
//           className="text-3xl md:text-4xl font-semibold text-gray-700 mb-6"
//           data-aos="fade-up"
//           data-aos-delay="300"
//         >
//           I build beautiful, functional web experiences.
//         </h2>

//         <p
//           className="max-w-xl text-gray-600 mb-8 leading-relaxed"
//           data-aos="fade-up"
//           data-aos-delay="400"
//         >
//           I'm a full-stack developer passionate about crafting clean, responsive
//           websites using React, TailwindCSS, and modern JavaScript technologies.
//         </p>

//         <a
//           href="#projects"
//           className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
//           data-aos="zoom-in"
//           data-aos-delay="500"
//         >
//           View Projects
//         </a>
//       </section>
//     </div>
//   );
// }


