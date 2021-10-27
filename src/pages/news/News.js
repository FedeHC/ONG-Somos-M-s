import React, { useEffect, useState } from 'react';
/* import Card from './Card';
 */ import './News.css';
import CardNews from '../../features/cardNews/';
import Card from '../../features/card/Card';
import { getNews } from '../../services/apiNews';
import Video from './videoPlayer/Video';
import { Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const News = () => {
  const { novedadesList, loading, error } = useSelector(
    state => state.novedades,
  );

  return (
    <div className="novedades-container">
      <div>
        <Text fontSize="6xl" color={'linkedin.500'}>
          Últimas novedades
        </Text>
      </div>
      <div className="video-container">
        <Video />
      </div>
      <div className="containerCard">
        {loading ? (
          <div>cargando...</div>
        ) : (
          novedadesList.map(news => <CardNews key={news.id} news={news} />)
        )}
      </div>
    </div>
  );
};

export default News;
