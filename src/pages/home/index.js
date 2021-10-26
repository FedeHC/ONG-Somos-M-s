import React from 'react';
import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import CardNews from '../../features/cardNews';
import Slider from "./SliderHome.js" 
import { useSelector } from 'react-redux';
import './home.css';

const Home = () => {
  const { loading, error, novedades } = useSelector(state => state.novedades);
  var cards = novedades.splice(2);

  return (
    <div>
      {!loading && <h1 className="title__main">{nosotros.welcome_text}</h1>}
      <Slider/>
      <section className="news__container">
        <h3>Ultimas Novedadesa</h3>
        <div className="news__flex">
          <CardNews />
          <CardNews />
          <CardNews />
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
