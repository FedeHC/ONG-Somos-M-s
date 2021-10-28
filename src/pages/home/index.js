import React from 'react';
import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import CardNews from '../../features/cardNews';
import Slider from './SliderHome.js';
import { useSelector, useDispatch } from 'react-redux';
import {setNovedadDetail} from "../../app/novedades/novedadesReducer"
import { Link } from 'react-router-dom';
import './home.css';

const Home = ({ history }) => {
  const dispatch = useDispatch();

  const { loading:loadingNosotros, error:errorNosotros, nosotros } = useSelector(state => state.nosotros);
  const { loading, error, novedadesList } = useSelector(
    state => state.novedades,
  );
  const callDispatch = (news) =>{
     dispatch(setNovedadDetail(news));
  }

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
            novedadesList.map(news => (
              <Link key={news.id} to={`novedades/${news.id}`}>
                <div onClick={() => callDispatch(news)}>
                  <CardNews key={news.id} news={news} />
                </div>
              </Link>
            ))
          )}
        </div>
        <div className="btn__container">
          <Button
            rightIcon={<ArrowForwardIcon />}
            color="white"
            variant="outline"
            onClick={() => history.push('/novedades')}
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
