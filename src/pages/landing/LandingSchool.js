import React from 'react';
import Header from './header/header';
import './landing.css';
import Counter from './content/counter';
import { Text, Image } from '@chakra-ui/react';
import Logo from '../../features/assets/images/logo-campaña.png';

const LandingSchool = () => {
  return (
    <React.Fragment>
      <Header logo="school" title="Vuelta a la escuela" />
      {/* <Content /> */}
      <div className="backgroundSchool">
        <div className="title-styles">
          <div className="triangle-title"></div>
          <h3>Vuelta a la escuela</h3>
        </div>
      </div>
      <div className="textBackground">
        <div className="text-centered">
          <Text m={6} color="gray.500" fontSize="3xl">
            De que se trata?
          </Text>
          <Text m={6} color="gray.500">
            Como todos los años, nos encontramos realizando una colecta de
            útiles escolares para poder asegurar la educación de los más chicos.
            Dona tus útiles a cambio de una sonrisa.
          </Text>
          <Text m={4} color="gray.500" fontSize="3xl">
            Cuál es la fecha del evento?
          </Text>
          <div className="dateAndPlace">
            <div className="dateText">
              <Text my={6} color="gray.500" fontSize="2xl">
                Fecha
              </Text>
              <Text color="gray.500">20 de Enero 11:00</Text>
            </div>
            <div className="placeText">
              <Text my={6} color="gray.500" fontSize="2xl">
                Lugar
              </Text>
              <Text color="gray.500">Parque Bicentenario</Text>
            </div>
          </div>
          <div className="counter">
            <Counter date={new Date('January 20 2022 11:00:00').getTime()} />
            <Image
              boxSize="300px"
              src={Logo}
              className="landingLogo"
              alt="Logo"
            />
            <Image
              className="landingImage"
              borderRadius="full"
              boxSize="300px"
              src="https://image.freepik.com/free-vector/education-pattern-background-doodle-style_53876-115365.jpg"
              alt="Segun Adebayo"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingSchool;
