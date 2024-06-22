import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticles,
  setCurrentPage,
  setCurrentPageRange,
} from "../redux/articlesSlice";
import Card from "./Card";

const AllCardsNews = () => {
  const dispatch = useDispatch();
  const { articles, loading, error, currentPage, currentPageRange, category } =
    useSelector((state) => state.articles);
  const articlesPerPage = 12;

  useEffect(() => {
    dispatch(fetchArticles(category));
  }, [dispatch, category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const [start, end] = currentPageRange;

  const handleNext = () => {
    if (end < totalPages) {
      dispatch(setCurrentPageRange([start + 5, end + 5]));
      dispatch(setCurrentPage(start + 5));
    }
  };

  const handlePrevious = () => {
    if (start > 1) {
      dispatch(setCurrentPageRange([start - 5, end - 5]));
      dispatch(setCurrentPage(start - 5));
    }
  };

  const pageNumbers = [];
  for (let i = start; i <= end && i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-4">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {currentArticles.map((article, index) => (
          <div key={index}>
            <Card article={article} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <ul className="inline-flex -space-x-px">
          <li>
            <button
              onClick={handlePrevious}
              className={`px-3 py-2 border border-gray-300 bg-white  hover:bg-gray-200 ${
                start === 1 ? "cursor-not-allowed" : ""
              }`}
              disabled={start === 1}
            >
              Previous
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => dispatch(setCurrentPage(number))}
                className={`px-3 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-500 hover:text-white ${
                  currentPage === number ? "bg-black text-white" : ""
                }`}
              >
                {number}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={handleNext}
              className={`px-3 py-2 border border-gray-300 bg-white hover:bg-gray-200 ${
                end >= totalPages ? "cursor-not-allowed" : ""
              }`}
              disabled={end >= totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllCardsNews;
