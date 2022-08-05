import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NewsHome from "./components/NewsHome/NewsHome";
import NewsTab from "./components/NewsTab";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NewsTab />
      <Routes>
        <Route path="/" element={<NewsHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
