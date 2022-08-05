import React from "react";
import { useGlobalContext } from "./NewsContext/NewsContext";

const NewsHeaderDetails = () => {
  const { category } = useGlobalContext();
  return (
    <div className="py-2 mb-3 text-primary-color font-semibold">
      {category === "business" ? (
        <p>Business</p>
      ) : category === "politics" ? (
        <p>Politics</p>
      ) : category === "technology" ? (
        <p>Technology</p>
      ) : category === "entertainment" ? (
        <p>Entertainment</p>
      ) : category === "sports" ? (
        <p>Sport</p>
      ) : (
        <p>Health</p>
      )}
      <div className="h-1 w-full bg-black">
        <div className="w-24 h-full bg-primary-color"></div>
      </div>
    </div>
  );
};

export default NewsHeaderDetails;
