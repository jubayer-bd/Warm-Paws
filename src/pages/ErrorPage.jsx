import React from "react";
import { useNavigate, useRouteError } from "react-router";
import { FaPaw } from "react-icons/fa";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-linear-to-b from-white to-gray-50 text-center px-4">
      <FaPaw className="text-primary text-6xl mb-4 animate-bounce" />
      <h1 className="text-6xl font-bold text-primary mb-2">Oops!</h1>
      <p className="text-gray-600 text-lg mb-4">
        Something went wrong or the page doesn’t exist.
      </p>

      {error && (
        <p className="text-sm text-gray-500 italic mb-6">
          {error.statusText || error.message}
        </p>
      )}

      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105"
      >
        Go Back Home
      </button>

      <footer className="mt-10 text-gray-400 text-sm">
        © {new Date().getFullYear()} WarmPaws — All rights reserved.
      </footer>
    </div>
  );
};

export default ErrorPage;
