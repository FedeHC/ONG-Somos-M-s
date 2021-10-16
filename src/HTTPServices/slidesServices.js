import axios from "axios";
import { useEffect, useState } from "react";
import { tokenValidate } from "../features/methods/tokenValidate";

// Listar todos los Slides o mostrar uno especifico por ID
export const useListSlides = (endpoint, body) => {
  const [listSlides, setListSlides] = useState({ data: null, error: null });

  useEffect(() => {
    axios
      .get(endpoint, {
        headers: tokenValidate("tokenName"),
        body,
      })
      .then((data) => setListSlides(data))
      .catch((error) => setListSlides(error));
  }, [endpoint]);

  return listSlides;
};

// Crear un nuevo Slide
export const useCreateSlide = (endpoint, body) => {
  const [newSlide, setNewSlide] = useState({ data: null, error: null });

  useEffect(() => {
    axios
      .post(endpoint, {
        headers: tokenValidate("tokenName"),
        body,
      })
      .then((data) => setNewSlide({ data, error: null }))
      .catch((error) => setNewSlide({ data: null, error }));
  }, [endpoint]);

  return newSlide;
};

// Editar un Slide
export const useEditSlide = (endpoint, body) => {
  const [slide, setSlide] = useState({ data: null, error: null });

  useEffect(() => {
    axios
      .put(endpoint, {
        headers: tokenValidate("tokenName"),
        body,
      })
      .then((data) => setSlide({ data, error: null }))
      .catch((error) => setSlide({ data: null, error }));
  }, [endpoint]);

  return slide;
};

// Eliminar un Slide
export const useDeleteSlide = (endpoint, body) => {
  const [deleteSlide, setDeleteSlide] = useState({ data: null, error: null });

  useEffect(() => {
    axios
      .delete(endpoint, {
        headers: tokenValidate("tokenName"),
        body: body,
      })
      .then((data) => setDeleteSlide({ data, error: null }))
      .catch((error) => setDeleteSlide({ data: null, error }));
  }, [endpoint]);

  return deleteSlide;
};
