import React from 'react';
import './home.css';
import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import CardNews from '../../features/cardNews';
import Slider from './SliderHome.js';
import { useSelector, useDispatch } from 'react-redux';
import { setNovedadDetail } from '../../app/novedades/novedadesReducer';
import { Link } from 'react-router-dom';
//import { Spinner } from '../../features/spinner';
import { Skeleton } from '@chakra-ui/react';
import ErrorAlert from '../../features/errorAlert/errorAlert';

const Home = ({ history }) => {
  const dispatch = useDispatch();

  const {
    // eslint-disable-next-line
    loading: loadingNosotros,
    // eslint-disable-next-line
    error: errorNosotros,
    nosotros,
  } = useSelector(state => state.nosotros);
  const { loading, /* error, */ novedadesList } = useSelector(
    state => state.novedades,
  );
  const callDispatch = news => {
    dispatch(setNovedadDetail(news));
  };

  return (
    <div>
     <div style={{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-around",marginBottom:"-35px"}}>
      {loading ? (
        <Box
          height="5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Skeleton width="80%" mt={'2rem'} padding="3rem" />
        </Box>
      ) : nosotros ? (
        <h1 className="title__main">{nosotros.welcome_text}</h1>
      ) : (
        <ErrorAlert />
      )}
      <Slider />
      </div>
      <section className="news__container">
        <h3>Ultimas Novedades</h3>
        <div className="news__flex">
          {loading ? (
            <>
              <>
                <Skeleton className="skeletonNews" />
                <Skeleton className="skeletonNews" />
                <Skeleton className="skeletonNews" />
              </>
            </>
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
