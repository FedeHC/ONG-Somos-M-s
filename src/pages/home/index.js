import React, { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import CardNews from '../../features/cardNews';
import { getHome } from '../../services/apiHome';
import './home.css';
import { SkeletonComponent } from '../../features/skeleton/SkeletonComponent';
import { useDispatch, useSelector } from 'react-redux';
import {getNosotros} from '../../app/nosotros/nosotrosReducer';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNosotros());
  }, []);

  const {loading, error, nosotros} = useSelector(state => state.nosotros);

  return (
    <div>
      {!loading && (
        <h1 className="title__main">
          {nosotros.welcome_text}
        </h1>
      )}
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
