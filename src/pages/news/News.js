import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./News.css";
import { getNews } from "../../services/apiNews";

const News = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    getNews().then((response) => setNewsList(response.data.data));
  }, []);

  return (
    <div>
      <div>
        <h1>Acá va el título</h1>
      </div>
      <div className="containerCard">
        {newsList.map((news) => (
          <Card news={news} />
        ))}
      </div>
    </div>
  );
};

export default News;
