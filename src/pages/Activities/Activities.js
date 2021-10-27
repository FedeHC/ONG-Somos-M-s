import React, { useEffect, useState } from 'react';
import './Activities.css';
import CardNews from '../../features/cardNews/';
import Card from '../../features/card/Card';
import { getNews } from '../../services/apiNews';
import { Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActividadDetail } from '../../app/actividades/actividadesReducer';

/* import Card from './Card';
 */ import TitleScreen from '../../features/titleScreen/Title';

const News = () => {
  const { actividadesList, loading, error } = useSelector(
    state => state.actividades,
  );

  const dispatch = useDispatch();

  const callDispatch = actividad => {
    dispatch(setActividadDetail(actividad));
  };

  return (
    <div className="novedades-container">
      <div style={{ width: '95vw' }}>
        <TitleScreen title={'Novedades'} />
      </div>

      <div className="containerCard">
        {loading ? (
          <div>cargando...</div>
        ) : (
          actividadesList.map(news => (
            <Link to={`/actividades/${news.id}`}>
              <div onClick={() => callDispatch(news)}>
                <CardNews key={news.id} news={news} />
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default News;
