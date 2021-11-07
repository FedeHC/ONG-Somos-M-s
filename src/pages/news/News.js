import React, { useState, useEffect } from 'react';
import './News.css';
import CardNews from '../../features/cardNews/';
import Video from './videoPlayer/Video';
import {
  FormControl,
  Stack,
  Input,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNovedadDetail } from '../../app/novedades/novedadesReducer';
import TitleScreen from '../../features/titleScreen/Title';
import { Spinner } from '../../features/spinner';
import ErrorAlert from '../../features/errorAlert/errorAlert';

const News = () => {
  const { novedadesList, loading /* error */ } = useSelector(
    state => state.novedades,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  const callDispatch = news => {
    dispatch(setNovedadDetail(news));
  };

  const [search, setSearch] = useState('');

  const filteredNews =
    search.length < 3
      ? novedadesList
      : novedadesList.filter(news =>
          news.name.toLowerCase().includes(search.toLowerCase()),
        );

  return (
    <div className="novedades-container">
      <div style={{ width: '95vw' }}>
        <TitleScreen title={'Novedades'} />
      </div>
      <div className="video-container">
        <Video />
      </div>
      <Stack
        as={'form'}
        spacing={'12px'}
        width={'60vw'}
        mt="150px"
        me={12}
        ms={12}
        mb={2}
      >
        <Text color={'linkedin.500'} fontSize="2xl">
          Buscar...
        </Text>
        <FormControl>
          <Input
            variant={'solid'}
            width="100%"
            borderWidth={1}
            color={'gray.800'}
            _placeholder={{
              color: 'gray.400',
            }}
            borderColor={useColorModeValue('#00214D', 'gray.700')}
            type={'text'}
            autoComplete="off"
            placeholder={'Buscar...'}
            aria-label={'Buscar...'}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </FormControl>
      </Stack>
      <div className="containerCard">
        {loading ? (
          <Spinner />
        ) : filteredNews ? (
          filteredNews.map(news => (
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
