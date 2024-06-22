import React from "react";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          The page you are looking for does not exist.
        </p>
        <a href="/" className="text-blue-500 underline mt-4 block">
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
