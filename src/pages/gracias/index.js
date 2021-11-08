import React from 'react';
import { Button } from '@chakra-ui/react';
import './gracias.css';
import { Link } from 'react-router-dom';

const Gracias = () => {
  const imgCheck =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/220px-Heart_coraz%C3%B3n.svg.png';
  return (
    <div className="gracias__container">
      <div className="gracias__content">
        <img className="gracias__img" src={imgCheck} alt="imagen check" />
        <h1 className="gracias__title">Gracias por ayudarnos a ayudar!!</h1>

        <Link to="/">
          <Button
            mt={5}
            className="gracias__btn"
            color="white"
            backgroundColor="#00A0DC"
            variant="outline"
            _hover={{
              background: '#32b3ff',
              color: 'white',
            }}
            cursor="pointer"
            type="submit"
          >
            Ir a Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Gracias;
