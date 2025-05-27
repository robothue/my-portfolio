import { useState, useEffect } from "react";
import ThemeToggle from "./themetoggle";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const linkStyle = "text-base font-semibold text-indigo-600 hover:text-indigo-700 transition bg-transparent border-none outline-none";

  return (
    <nav
    className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}
  >
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center bg-transparent">
      <button
        onClick={() => handleNavClick("home")}
        className="text-xl font-bold text-indigo-600 bg-transparent border-none outline-none"
      >
        Abdallah
      </button>
  

        

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          <li><button onClick={() => handleNavClick("home")} className={linkStyle}>Home</button></li>
          <li><button onClick={() => handleNavClick("about")} className={linkStyle}>About</button></li>
          <li><Link to="/projects" className={linkStyle}>All Projects</Link></li>
          <li><button onClick={() => handleNavClick("skills")} className={linkStyle}>Skills</button></li>
          <li><button onClick={() => handleNavClick("contact")} className={linkStyle}>Contact</button></li>
          <li><ThemeToggle /></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-indigo-600 focus:outline-none" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <li><button onClick={() => handleNavClick("home")} className={linkStyle}>Home</button></li>
          <li><button onClick={() => handleNavClick("about")} className={linkStyle}>About</button></li>
          <li><Link to="/projects" className={linkStyle} onClick={() => setIsOpen(false)}>All Projects</Link></li>
          <li><button onClick={() => handleNavClick("skills")} className={linkStyle}>Skills</button></li>
          <li><button onClick={() => handleNavClick("contact")} className={linkStyle}>Contact</button></li>
          <li><ThemeToggle /></li>
        </ul>
      )}
    </nav>
  );
}








// import { useState, useEffect } from "react";
// import ThemeToggle from "./themetoggle";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     function handleScroll() {
//       setIsScrolled(window.scrollY > 10);
//     }
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (id) => {
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//     } else {
//       document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsOpen(false);
//   };

//   const linkClasses =
//     "text-base font-medium text-indigo-600 hover:text-indigo-700 transition inline-flex items-center bg-transparent border-none outline-none";

//   return (
//     <nav
//       className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
//         isScrolled ? "bg-white shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <button
//           onClick={() => handleNavClick("home")}
//           className="text-xl font-bold text-indigo-600 bg-transparent border-none outline-none"
//         >
//           Abdallah
//         </button>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex space-x-8 items-center">
//           <li><button onClick={() => handleNavClick("home")} className={linkClasses}>Home</button></li>
//           <li><button onClick={() => handleNavClick("about")} className={linkClasses}>About</button></li>
//           <li>
//             <Link to="/projects" className={linkClasses}>
//               All Projects
//             </Link>
//           </li>
//           <li><button onClick={() => handleNavClick("skills")} className={linkClasses}>Skills</button></li>
//           <li><button onClick={() => handleNavClick("contact")} className={linkClasses}>Contact</button></li>
//           <li><ThemeToggle /></li>
//         </ul>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden text-indigo-600 focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       {isOpen && (
//         <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
//           <li><button onClick={() => handleNavClick("home")} className={linkClasses}>Home</button></li>
//           <li><button onClick={() => handleNavClick("about")} className={linkClasses}>About</button></li>
//           <li>
//             <Link to="/projects" onClick={() => setIsOpen(false)} className={linkClasses}>
//               All Projects
//             </Link>
//           </li>
//           <li><button onClick={() => handleNavClick("skills")} className={linkClasses}>Skills</button></li>
//           <li><button onClick={() => handleNavClick("contact")} className={linkClasses}>Contact</button></li>
//           <li><ThemeToggle /></li>
//         </ul>
//       )}
//     </nav>
//   );
// }



