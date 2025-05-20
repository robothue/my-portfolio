export default function Footer() {
    return (
      <footer className="bg-gray-100 py-6 text-center mt-20">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4 text-gray-600">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-indigo-600 transition"
          >
            Email
          </a>
        </div>
      </footer>
    );
  }
  