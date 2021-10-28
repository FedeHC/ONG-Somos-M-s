import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./PopUp.scss";
import PDF from "./pdf.js";
import { Button } from "@chakra-ui/react";

const PopUp = ({ setaceptarTerminos }) => {
  const aceptarTerminos = () => {
    let myInput = document.getElementById("error");
    myInput.setAttribute("style", "visibility: hidden");
    setaceptarTerminos(true);
  };

  return (
    <Popup
      trigger={
        <a href="#top" className="ModalButton">
          Ver términos y condiciones
        </a>
      }
      modal
      nested
    >
      {(close) => (
        <>
          <PDF />
          <div className="popUpButtons">
            <Button
              className="button"
              colorScheme="teal"
              onClick={() => {
                aceptarTerminos();
                close();
              }}
            >
              Aceptar
            </Button>
            <Button
              className="button"
              colorScheme="teal"
              onClick={() => {
                close();
              }}
            >
              cancelar
            </Button>
          </div>
        </>
      )}
    </Popup>
  );
};

export default PopUp;
