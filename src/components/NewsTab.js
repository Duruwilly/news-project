import { useGlobalContext } from "./NewsContext/NewsContext";

const liStyle = "cursor-pointer";
const active = "bg-primary-color p-3 cursor-pointert";

const NewsTab = () => {
  const { handleTab, selectedTab } = useGlobalContext();

  const columns = [
    { name: "BUSINESS", path: "business" },
    { name: "POLITICS", path: "politics" },
    { name: "TECHNOLOGY", path: "technology" },
    { name: "ENTERTAINMENT", path: "entertainment" },
    { name: "SPORT", path: "sports" },
    { name: "HEALTH", path: "health" },
  ];

  return (
    <section>
      <ul className="sub-section flex justify-center items-center gap-5 overflow-x-auto md:overflow-x-hidden bg-black text-white p-3">
        {columns.map((tab) => (
          <li
            onClick={() => handleTab(tab.name, tab.path)}
            key={tab.name}
            className={tab.name === selectedTab ? active : liStyle}
          >
            {tab.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsTab;
