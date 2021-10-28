import React from 'react';
import './Activities.css';
import CardNews from '../../features/cardNews/';
import Card from '../../features/card/Card';
import { Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActividadDetail } from '../../app/actividades/actividadesReducer';
import TitleScreen from '../../features/titleScreen/Title';
import ErrorAlert from '../../features/errorAlert/errorAlert';
import { Spinner } from '../../features/spinner';

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
        <TitleScreen title={'Actividades'} />
      </div>

      <div className="containerCard">
        {loading ? (
          <Spinner />
        ) : actividadesList ? (
          actividadesList.map(news => (
            <Link to={`/actividades/${news.id}`}>
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
