import React from 'react';
import { Text } from '@chakra-ui/react';

//react slide
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderHome.css';

//icons
import { IoChevronForwardOutline, IoChevronBackOutline } from 'react-icons/io5';

//data example
const data = [
  {
    image:
      'https://images.pexels.com/photos/9826019/pexels-photo-9826019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Talleres de verano',
    description: 'Dimos comienzo a los nuevos talleres de dibujo y pintura',
  },
  {
    image:
      'https://images.pexels.com/photos/7551760/pexels-photo-7551760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Jornada de juegos en el parque Avellaneda',
    description:
      'Reportamos un éxito en evento realizado en nuestro aniversario',
  },
  {
    image:
      'https://images.pexels.com/photos/7294558/pexels-photo-7294558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Reinauguración de la pileta del club',
    description:
      'Los más chicos ya pudieron estrenar la nueva pileta luego de los arreglos',
  },
];

const Sliderhome = () => {
  const PreviousBtn = props => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <IoChevronBackOutline className="icon" />
      </div>
    );
  };
  const NextBtn = props => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <IoChevronForwardOutline className="icon" />
      </div>
    );
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 1,
    infinite: true,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    /*     adaptiveHeight: true,
     */
  };

  return (
    <div style={{ width: '100%' }} className="carousel">
      <Slider {...settings}>
        {data.map(item => (
          <div key={item.title}>
            <img
              src={item.image}
              alt=""
              style={{ width: '100%', height: '70vh' }}
              /*                 className="sliderStyles"
               */
            />
            <div className="textContainer">
              <Text fontSize="3xl">{item.title}</Text>
              <Text fontSize="xl">{item.description}</Text>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliderhome;
