// pages/NotFound.jsx
import { Link } from "react-router-dom";
import PageWrapper from "../components/pageWrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </PageWrapper>
  );
}
