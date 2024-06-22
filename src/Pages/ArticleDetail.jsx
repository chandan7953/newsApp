import React from "react";
import { useSelector } from "react-redux";

const ArticleDetail = () => {
  const { article } = useSelector((state) => state.articles);

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  if (!article) {
    return <p>No article selected</p>;
  }

  return (
    <div className="p-4">
      <div className="font-bold text-2xl pb-4">{article.title}</div>
      <div className="w-full h-96 ">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-full"
        />
      </div>

      <p className="pt-4">{article.description}</p>
      <p className="pt-4">{article.content}</p>

      <p className="pt-4 font-bold">
        <span>For more detail you can visit this:</span>{" "}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer "
          className="text-blue-500 underline"
        >
          Link
        </a>
      </p>

      <div className="pt-4 flex flex-wrap justify-between items-center">
        <p>
          <span className="font-bold">Author:</span>{" "}
          <span>{article.author}</span>
        </p>
        <p>
          <span className="font-bold">Published At:</span>
          <span> {formatDate(article.publishedAt)}</span>
        </p>
      </div>
    </div>
  );
};

export default ArticleDetail;
