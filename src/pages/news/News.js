import React, { useEffect, useState } from 'react';
import './News.css';
import CardNews from '../../features/cardNews/';
import Card from '../../features/card/Card';
import { getNews } from '../../services/apiNews';
import Video from './videoPlayer/Video';
import { Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNovedadDetail } from '../../app/novedades/novedadesReducer';
import TitleScreen from '../../features/titleScreen/Title';
import { Spinner } from '../../features/spinner';
import ErrorAlert from '../../features/errorAlert/errorAlert';

const News = () => {
  const { novedadesList, loading, error } = useSelector(
    state => state.novedades,
  );

  const dispatch = useDispatch();

  const callDispatch = news => {
    dispatch(setNovedadDetail(news));
  };

  return (
    <div className="novedades-container">
      <div style={{ width: '95vw' }}>
        <TitleScreen title={'Novedades'} />
      </div>
      <div className="video-container">
        <Video />
      </div>
      <div className="containerCard">
        {loading ? (
          <Spinner />
        ) : novedadesList ? (
          novedadesList.map(news => (
            <Link key={news.id} to={`novedades/${news.id}`}>
              <div onClick={() => callDispatch(news)}>
                <CardNews key={news.id} news={news} />
              </div>
            </Link>
          ))
        ) : (
          <ErrorAlert />
        )}
      </div>
    </div>
  );
};

export default News;
