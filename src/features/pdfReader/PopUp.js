import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./PopUp.scss";
import PDF from "./pdf.js";

const PopUp = () => (
  <Popup
    trigger={
      <a href="#" className="button">
        Open Modal
      </a>
    }
    modal
    nested
  >
    {(close) => (
      <>
        <PDF />
        <button>Aceptar</button>
        <button
          className="button"
          onClick={() => {
            close();
          }}
        >
          cancelar
        </button>
      </>
    )}
  </Popup>
);

export default PopUp;

{
  /* <div className="modall">
        <PDFReader />
        <div className="buttons">
          <button>aceptar</button>
          <button>cancelar</button>
        </div>
      </div> */
}
