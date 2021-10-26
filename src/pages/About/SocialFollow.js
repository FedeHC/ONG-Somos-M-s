import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa';
import { Text, Box } from '@chakra-ui/react';

export default function SocialFollow() {
  return (
    <div className="social-container">
      <Box>
        <Text fontSize="3xl" color={'blue.400'} as={'span'}>
          Nuestras redes de siempre!
        </Text>
      </Box>
      <Box>
        <a
          href="https://www.facebook.com/SomosMas/"
          className="facebook social"
        >
          <FaFacebookSquare className="facebookLogo" />
        </a>
        <a href="https://www.twitter.com/SomosMas" className="twitter social">
          <FaTwitterSquare className="twitterLogo" />
        </a>
        <a
          href="https://www.instagram.com/SomosMas"
          className="instagram social"
        >
          <FaInstagram className="instagramLogo" />
        </a>
      </Box>
    </div>
  );
}
