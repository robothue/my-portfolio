import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="ml-auto p-2 text-sm rounded border border-gray-300 dark:border-gray-600 dark:text-white"
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
