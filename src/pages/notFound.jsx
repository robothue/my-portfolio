import { Link } from "react-router-dom";
import PageWrapper from "../components/pageWrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF5FF] dark:bg-gray-900 text-center px-6 text-gray-800 dark:text-gray-100">
        <h1 className="text-6xl font-bold text-[#BA68C8] mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-[#BA68C8] text-white px-6 py-2 rounded hover:bg-[#A75DB8] transition"
        >
          Go Back Home
        </Link>
      </div>
    </PageWrapper>
  );
}
