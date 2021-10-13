import React from "react";
import { Button } from "@chakra-ui/react";
import './gracias.css'
const Gracias = () => {
  const imgCheck = "https://i.imgur.com/KJhpayT.png";
  return (
    <div className="gracias__container">
      <div className="gracias__content">
        <img className="gracias__img" src={imgCheck} alt="imagen check" />
        <h1 className="gracias__title">Muchas Gracias por Contribuir</h1>
        <Button
          className="gracias__btn"
          color="white"
          backgroundColor="#007eb5"
          variant="outline"
          _hover={{
            background: "#32b3ff",
            color: "white",
          }}
          cursor="pointer"
          type="submit"
        >
          Ir a Home
        </Button>
      </div>
    </div>
  );
};

export default Gracias;
