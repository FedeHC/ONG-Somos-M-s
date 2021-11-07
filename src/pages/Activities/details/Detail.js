import React, { useEffect } from 'react';
import { Box, SimpleGrid, Divider, Text, Button } from '@chakra-ui/react';
import './Detail.scss';
import TitleScreen from '../../../features/titleScreen/Title';
import ErrorAlert from '../../../features/errorAlert/errorAlert';
import { Spinner } from '../../../features/spinner';
import { useSelector } from 'react-redux';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
const ActivityDetail = props => {
  const { actividadDetail, loading /*error*/ } = useSelector(
    state => state.actividades,
  );
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <Box
          height="50vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner />
        </Box>
      ) : actividadDetail ? (
        <>
          <TitleScreen title={actividadDetail.name} />
          <SimpleGrid
            columns={1}
            minChildWidth="250px"
            spacing={50}
            margin={20}
            className="simpleGrid"
          >
            <Box height="100%" padding="10px">
              <img src={actividadDetail.image} className="newsImage" alt="" />
            </Box>
            <Box padding="10px">
              <div className="newsText">
                <Text color={'gray.700'} className="title">
                  Detalles de actividad
                </Text>
                <Divider />
                <Text
                  color={'gray.500'}
                  dangerouslySetInnerHTML={{
                    __html: actividadDetail.description,
                  }}
                  className="content"
                />
              </div>
              <Button
                mt={10}
                leftIcon={<BsArrowLeftCircle />}
                _hover={{
                  background: '#00214D',
                  color: 'white',
                }}
                color="#00214D"
                variant="outline"
                borderColor="#00214D"
                onClick={() => history.goBack()}
              >
                Volver
              </Button>
            </Box>
          </SimpleGrid>
        </>
      ) : (
        <ErrorAlert />
      )}
    </>
  );
};

export default ActivityDetail;
