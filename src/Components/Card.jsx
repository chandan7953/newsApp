import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArticle } from "../redux/articlesSlice";
import { Link, NavLink } from "react-router-dom";

const Card = ({ article }) => {
  const { author, content, description, publishedAt, title, url, urlToImage } =
    article;

  const autherNamespaceRemove = () => {
    if (author) {
      const lowerCaseStr = author.toLowerCase();
      const formattedStr = lowerCaseStr.replace(/\s+/g, "");
      return formattedStr;
    }
    return "randomauthor";
  };
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setArticle(article));
  };

  return (
    <div className=" w-full h-full rounded overflow-hidden shadow-lg ">
      <img className="w-full h-48" src={urlToImage} alt="Image of news" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 line-clamp-1">{title}</div>
        <p className="text-gray-700 text-base line-clamp-2">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <NavLink
            onClick={handleClick}
            to={`/article/${autherNamespaceRemove()}`}
            className="text-blue-500 underline"
          >
            Read more
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default Card;
