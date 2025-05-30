// App.jsx
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';

import Hero from './components/hero';
import Navbar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contacts';
import Footer from './components/footer';
import Skills from './components/skills';
import ProjectsPage from './pages/projectsPage';
import NotFound from './pages/notFound';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills /> {/* Skills moved above Projects */}
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;










// // App.jsx
// import { useLocation, Routes, Route } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import './App.css';

// import Hero from './components/hero';
// import Navbar from './components/navbar';
// import About from './components/about';
// import Skills from './components/skills'; // moved up
// import Projects from './components/projects';
// import Contact from './components/contacts';
// import Footer from './components/footer';
// import ProjectsPage from './pages/projectsPage';
// import NotFound from './pages/notFound';

// function App() {
//   const location = useLocation();

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <AnimatePresence mode="wait">
//         <Routes location={location} key={location.pathname}>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero />
//                 <About />
//                 <Skills /> {/* Moved up here */}
//                 <Projects />
//                 <Contact />
//                 <Footer />
//               </>
//             }
//           />
//           <Route path="/projects" element={<ProjectsPage />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </AnimatePresence>
//     </>
//   );
// }

// export default App;




