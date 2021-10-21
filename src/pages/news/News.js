import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./News.css";
import { getNews } from "../../services/apiNews";
import Video from "./videoPlayer/Video";
import { Heading } from "@chakra-ui/react"


const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getNews();
        setNewsList(results.data.data);
      }
      catch(error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="novedades-container">
      <div>
        <Heading>Últimas novedades</Heading>
      </div>
      <div className="video-container">
       <Video />
      </div>
      <div className="containerCard">
        { loading 
            ? <div>cargando...</div>
            : ( 
              newsList.map((news, i) => (
          <Card key={i} news={news} />
              ) ))
        }
      </div>
    </div>
  );
};

export default News;
