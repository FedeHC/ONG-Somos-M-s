import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./News.css";
import axios from "axios";

const News = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://ongapi.alkemy.org/api/news")
      .then((response) => {
        setNewsList(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
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
