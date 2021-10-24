import React from 'react';
import './about.scss';
import { Heading, Text } from '@chakra-ui/react';
import Title from '../../features/title/Title';
import LinkedinCard from './LinkedinCard';
import { TwitterTweet } from 'react-social-plugins';
import TweetEmbed from 'react-tweet-embed';
import SocialFollow from './SocialFollow';

const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <div className="linkedinCard">
          <div className="card1">
            <LinkedinCard />
          </div>
          <div className="cardText">
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
            <Text fontSize="3xl" color={'gray.500'}>
              Con el objetivo de llegar a más gente que quiera colaborar en este
              hermoso proyecto, creamos una nueva cuenta en Linkedin, siguenos!
            </Text>
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
            <TweetEmbed className="tweet" id="1452017848822509573" />
            <TweetEmbed className="tweet" id="1452066835927556099" />
            <TweetEmbed className="tweet" id="1452000630755659777" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
