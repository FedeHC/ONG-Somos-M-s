import React, {useState} from 'react';
import './Activities.css';
import CardNews from '../../features/cardNews/';
import { FormControl,
  Stack,
  Input,
  useColorModeValue, } from '@chakra-ui/react';
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

  const [search, setSearch] = useState("");

  const filteredActivities =
    search.length < 3
      ? actividadesList
      : actividadesList.filter(activity =>
          activity.name.toLowerCase().includes(search.toLowerCase()),
        );


  return (
    <div className="novedades-container">
      <div style={{ width: '95vw' }}>
        <TitleScreen title={'Actividades'} />
      </div>
      <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          width={'100%'}
          me={6}
          ms={6}
          mb={6}
        >
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
        ) : filteredActivities ? (
          filteredActivities.map(news => (
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
