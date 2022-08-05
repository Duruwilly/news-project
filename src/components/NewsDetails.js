import React from "react";
import { useGlobalContext } from "./NewsContext/NewsContext";
import { BsArrowRight } from "react-icons/bs";
import NewsHeaderDetails from "./NewsHeaderDetails";

const NewsDetails = () => {
  const { newsContent } = useGlobalContext();

  return (
    <section>
      <main className="sub-section mt-5">
        <NewsHeaderDetails />
        <div className="container mx-auto">
          <div className="flex flex-wrap -m-4">
            {newsContent?.map((news, index) => (
              <div className="p-4 md:w-1/3" key={index}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden rounded-lg ">
                  <div>
                    {news?.urlToImage && (
                      <img
                        src={news.urlToImage}
                        alt="blog-img"
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                      />
                    )}
                  </div>
                  <div>
                    <h1 className="text-lg font-bold my-3 px-3">
                      {news.title}
                    </h1>
                    <p className="text-gray-700 mb-3 px-3">
                      {news.description}
                    </p>
                    <div>
                      <div className="flex items-center flex-wrap px-3 mb-2 text-blue-500">
                        <a
                          href={news.url}
                          target="_blank"
                          className="inline-flex gap-1 items-center md:mb-2 lg:mb-0 clickable"
                          rel="noreferrer"
                        >
                          Read more
                          <BsArrowRight />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default NewsDetails;
