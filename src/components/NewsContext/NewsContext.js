import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsContent, setNewsContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("BUSINESS");
  const [category, setCategory] = useState("business");

  useEffect(() => {
    getNewsData(category);
  }, [category]);

  const apiEndPoint = process.env.REACT_APP_NEWS_API_URL;
  const apikey = process.env.REACT_APP_NEWS_API_KEY;

  const getNewsData = async (category) => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country?&category=${category}&language=en&apiKey=7f38764e300e43cda8f1fb592bb4694b`
      );
      setNewsContent(res.data.articles);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTab = async (tab, path) => {
    setSelectedTab(tab);
    setIsLoading(true);
    setCategory(path);
    setCategory(path);
    await getNewsData(category);
    setIsLoading(false);
  };

  return (
    <NewsContext.Provider
      value={{
        newsContent,
        isLoading,
        selectedTab,
        category,
        handleTab,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useGlobalContext = () => useContext(NewsContext);