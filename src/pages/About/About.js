import React from 'react';
import './about.scss';
import Tweets from './tweets/Tweets';
import { Heading, Text, Box, Center } from '@chakra-ui/react';
import LinkedinCard from './LinkedinCard';
import SocialFollow from './SocialFollow';
import { useSelector } from 'react-redux';
import TitleScreen from '../../features/titleScreen/Title';
import Members from './members/Members';
import { Spinner } from '../../features/spinner';
import { Skeleton } from '@chakra-ui/react';

import ErrorAlert from '../../features/errorAlert/errorAlert';

const About = () => {
  const { name, short_description, long_description, loading, error } =
    useSelector(state => state.nosotros.nosotros);
  return (
    <>
      <div style={{ width: '95vw', margin: 'auto' }}>
        <TitleScreen title={'Nosotros'} />
      </div>

      <div className="aboutContainer">
        <div className="TextContainer">
          {loading ? (
            <Skeleton className="skeletonName" />
          ) : error ? (
            <ErrorAlert />
          ) : (
            <Box w="50%" /* className="aboutText" */>
              <Text
                as={'span'}
                position={'relative'}
                fontSize="6xl"
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'linkedin.400',
                  zIndex: -1,
                }}
              >
                {name}
              </Text>
              <Box
                color="gray.500"
                fontSize="lg"
                textAlign={['center']}
                dangerouslySetInnerHTML={{ __html: long_description }}
              />
            </Box>
          )}
        </div>

        <div className="linkedinCard">
          <div>
            <Heading
              lineHeight={1.1}
              fontWeight={400}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'linkedin.400',
                  zIndex: -1,
                }}
              >
                Nueva Cuenta!
              </Text>
            </Heading>
            <Box color="gray.500" fontSize="lg" textAlign={['center']}>
              {' '}
              Con el objetivo de llegar a más gente que quiera colaborar en este
              hermoso proyecto, creamos una nueva cuenta en Linkedin, siguenos!
            </Box>
          </div>
          <div className="card1">
            <LinkedinCard />
          </div>
        </div>
        <div className="info">
          <SocialFollow />
        </div>

        <div className="tweetsSection">
          <Text fontSize="3xl" color={'blue.400'} as={'span'}>
            Nuestros últimos tweets!!
          </Text>{' '}
          <div className="tweets">
            <Tweets />
          </div>
        </div>
        <hr />
        <Center>
          <Heading m={'auto'}>Miembros del Team</Heading>
        </Center>
        <Members />
      </div>
    </>
  );
};

export default About;
