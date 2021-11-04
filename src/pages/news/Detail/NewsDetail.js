import React /*, { useEffect, useState } */ from 'react';
import { Box, SimpleGrid, Divider } from '@chakra-ui/react';
import './NewsDetail.scss';
import TitleScreen from '../../../features/titleScreen/Title';
import ErrorAlert from '../../../features/errorAlert/errorAlert';
// import { getNews } from '../../../services/apiNews';
import { useSelector } from 'react-redux';
import { Spinner } from '../../../features/spinner';

const NewsDetail = props => {
  const { novedadDetail, loading, /* error */ } = useSelector(
    state => state.novedades,
  );

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
                <p className="title">Detalles de novedad</p>
                <Divider />
                <p
                  dangerouslySetInnerHTML={{ __html: novedadDetail.content }}
                  className="content"
                />
              </div>
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
