import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Divider } from '@chakra-ui/react';
import './Detail.scss';
import TitleScreen from '../../../features/titleScreen/Title';
import { getNews } from '../../../services/apiNews';
import { useSelector } from 'react-redux';

const ActivityDetail = props => {
  const { actividadDetail } = useSelector(state => state.actividades);

  return (
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
            <p className="title">Detalles de novedad</p>
            <Divider />
            <p
              dangerouslySetInnerHTML={{ __html: actividadDetail.description }}
              className="content"
            />
          </div>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default ActivityDetail;
