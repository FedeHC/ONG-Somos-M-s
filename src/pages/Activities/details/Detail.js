import React from 'react';
import { Box, SimpleGrid, Divider } from '@chakra-ui/react';
import './Detail.scss';
import TitleScreen from '../../../features/titleScreen/Title';
import ErrorAlert from '../../../features/errorAlert/errorAlert';
import { Spinner } from '../../../features/spinner';
import { useSelector } from 'react-redux';

const ActivityDetail = props => {
  const { actividadDetail, loading, /*error*/ } = useSelector(
    state => state.actividades,
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
                <p className="title">Detalles de actividad</p>
                <Divider />
                <p
                  dangerouslySetInnerHTML={{
                    __html: actividadDetail.description,
                  }}
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

export default ActivityDetail;
