import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./News.css";
import { getNews } from "../../services/apiNews";
import Video from "./videoPlayer/Video";
import { Heading } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import TitleScreen from "../../features/titleScreen/Title";


const News = () => {

  const {novedadesList, loading, error} = useSelector(state => state.novedades);

  return (
    <div className="novedades-container">
      <div style={{width:"95vw"}}>
        <TitleScreen title={"Novedades"} />
      </div>
      <div className="video-container">
       <Video />
      </div>
      <div className="containerCard">
        { loading 
            ? <div>cargando...</div>
            : ( 
              novedadesList.map((news) => (
          <Card key={news.id} news={news} />
              ) ))
        }
      </div>
    </div>
  );
};

export default News;
