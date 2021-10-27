import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Divider } from '@chakra-ui/react';
import './NewsDetail.scss';
import Title from '../../../features/title/Title';
import { getNews } from '../../../services/apiNews';

const NewsDetail = props => {
  const [news, setNews] = useState({});

  useEffect(() => {
    let url = window.location.href;
    let id = url.substring(url.lastIndexOf('/') + 1);
    getNews(id).then(response => setNews(response.data.data));
  }, []);
  return (
    <>
      <Title text={news.name} />
      <SimpleGrid
        columns={1}
        minChildWidth="250px"
        spacing={50}
        margin={20}
        className="simpleGrid"
      >
        <Box height="100%" padding="10px">
          <img src={news.image} className="newsImage" alt="" />
        </Box>
        <Box padding="10px">
          <div className="newsText">
            <p className="title">Detalles de novedad</p>
            <Divider />
            <p
              dangerouslySetInnerHTML={{ __html: news.content }}
              className="content"
            />
          </div>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default NewsDetail;
