import React from "react";
import { useGlobalContext } from "./NewsContext/NewsContext";
import NewsDetails from "./NewsDetails";
import Spinner from "../components/Spinner/Spinner";

const News = () => {
  const { isLoading } = useGlobalContext();

  return (
    <>
      {isLoading ? (
        <section>
          <Spinner />
        </section>
      ) : (
        <>
          <NewsDetails />
        </>
      )}
    </>
  );
};

export default News;
