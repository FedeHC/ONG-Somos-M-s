import React from 'react';

//react slide
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//icons
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

//data example
const data = [
  {image:'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
   title:"tes1",
   description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."    
  },
  {image:'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80',
   title:"test2",
   description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."    
  },
  {image:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
   title:"test3",
   description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."    
  },
  {image:'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
   title:"test4",
   description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."    
  },
]


const Sliderhome = () => {

  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <IoChevronBackOutline className="icon" />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <IoChevronForwardOutline className="icon" />
      </div>
    );
  };


  const settings = {
    autoplay:true,
    autoplaySpeed:5000,
    initialSlide:1,
    infinite:true,
    prevArrow:<PreviousBtn />,
    nextArrow:<NextBtn />,
  };

  return (
    <div style={{ margin: "30px" }} className="carousel">
      <Slider {...settings}>
        {data.map((item) => (
              <div key={item.title}>
                <img src={item.image} alt="" style={{ width: "100%", height: "40vh" }} />
                <div className="textContainer">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}    
      </Slider>
    </div>
  );
}

export default Sliderhome;
