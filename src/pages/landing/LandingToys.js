import React from 'react';
import Header from './header/header';
import './landing.css';
import Counter from './content/counter';
import { Text, Image } from '@chakra-ui/react';
import ToyImage from './content/ToyImage.jpg';
import ToyLogo from './content/ToyLogo.png';

const LandingSchool = () => {
  return (
    <React.Fragment>
      <Header title="Colecta anual" />
      {/* <Content /> */}
      <div className="backgroundToys">
        <div className="title-styles">
          <div className="triangle-title"></div>
          <h3>Colecta de juguetes</h3>
        </div>
      </div>

      <div className="textBackground">
        <div className="text-centered">
          <Text m={6} color="gray.500" fontSize="3xl">
            De que se trata?
          </Text>
          <Text m={6} color="gray.500">
            Como todos los años, nos encontramos realizando la colecta anual de
            jueguetes para la navidad de los niños más necesitados de nuestra
            comunidad. Dona tus jueguetes a cambio de una sonrisa.
          </Text>
          <Text m={4} color="gray.500" fontSize="3xl">
            Cuál es la fecha del evento?
          </Text>
          <div className="dateAndPlace">
            <div className="dateText">
              <Text my={6} color="gray.500" fontSize="2xl">
                Fecha
              </Text>
              <Text color="gray.500">1 de Diciembre 11:00</Text>
            </div>
            <div className="placeText">
              <Text my={6} color="gray.500" fontSize="2xl">
                Lugar
              </Text>
              <Text color="gray.500">Parque Bicentenario</Text>
            </div>
          </div>
          <div className="counter">
            <Counter date={new Date('December 1 2021 11:00:00').getTime()} />
            <Image
              boxSize="300px"
              src={ToyLogo}
              className="landingLogo"
              alt="Logo"
            />
            <Image
              className="landingImage"
              borderRadius="full"
              boxSize="300px"
              src={ToyImage}
              alt="Segun Adebayo"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingSchool;
