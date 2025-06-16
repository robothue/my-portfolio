export default function Footer() {
  return (
    <footer className="bg-[#f9f3fc] py-6 text-center mt-20">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Abdallah Masudi. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-4 text-gray-600">
        <a
          href="https://github.com/robothue"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-[#BA68C8]"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-[#BA68C8]"
        >
          LinkedIn
        </a>
        <a
          href="mailto:bahatimasudi2532@gmail.com"
          className="transition hover:text-[#BA68C8]"
        >
          Email
        </a>
      </div>
    </footer>
  );
}

