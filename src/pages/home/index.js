import React from 'react';
import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import CardNews from '../../features/cardNews';
import Slider from './SliderHome.js';
import { useSelector } from 'react-redux';
import './home.css';

const Home = () => {
  const { nosotros } = useSelector(state => state.nosotros);

  const { loading, error, novedadesList } = useSelector(
    state => state.novedades,
  );
  const removed = novedadesList;

  return (
    <div>
      {!loading && <h1 className="title__main">{nosotros.welcome_text}</h1>}
      <Slider />

      <section className="news__container">
        <h3>Ultimas Novedades</h3>
        <div className="news__flex">
          {loading ? (
            <div>cargando...</div>
          ) : (
            novedadesList.map(news => <CardNews key={news.id} news={news} />)
          )}
        </div>
        <div className="btn__container">
          <Button
            rightIcon={<ArrowForwardIcon />}
            color="white"
            variant="outline"
            _hover={{
              background: 'white',
              color: 'black',
            }}
          >
            Ver todas
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
