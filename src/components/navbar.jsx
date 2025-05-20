import { useState, useEffect } from "react";
import ThemeToggle from "./themetoggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-indigo-600">
          GeezDev
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-indigo-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-indigo-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-600 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-indigo-600 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-indigo-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      )}
    </nav>
  );
}
