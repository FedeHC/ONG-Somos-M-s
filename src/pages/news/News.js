import React from "react";
import Card from "./Card";
import "./News.css";

const News = () => {
  return (
    <div>
      <div>
          <h1>Acá va el título</h1>
      </div>
      <div className="containerCard">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default News;
