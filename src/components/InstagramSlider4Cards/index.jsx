import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./InstagramSlider4Cards.module.scss";

const InstagramSlider4Cards = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 632,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },

      {
        breakpoint: 435,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={styles.slider}>
      {children}
    </Slider>
  );
};

export default InstagramSlider4Cards;
