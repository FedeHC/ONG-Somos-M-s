import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, SimpleGrid, Divider, Button, Text } from '@chakra-ui/react';
import './NewsDetail.scss';
import TitleScreen from '../../../features/titleScreen/Title';
import ErrorAlert from '../../../features/errorAlert/errorAlert';
import { useSelector } from 'react-redux';
import { Spinner } from '../../../features/spinner';
import { BsArrowLeftCircle } from 'react-icons/bs';

const NewsDetail = props => {
  const { novedadDetail, loading /* error */ } = useSelector(
    state => state.novedades,
  );

  let history = useHistory();

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
      ) : novedadDetail ? (
        <>
          <TitleScreen title={novedadDetail.name} />
          <SimpleGrid
            columns={1}
            minChildWidth="250px"
            spacing={50}
            margin={20}
            className="simpleGrid"
          >
            <Box height="100%" padding="10px">
              <img src={novedadDetail.image} className="newsImage" alt="" />
            </Box>
            <Box padding="10px">
              <div className="newsText">
                <Text color={'gray.700'} className="title">
                  Detalles de novedad
                </Text>
                <Divider />
                <Text
                  color={'gray.500'}
                  dangerouslySetInnerHTML={{ __html: novedadDetail.content }}
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

export default NewsDetail;
