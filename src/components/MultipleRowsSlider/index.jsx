import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./MultipleRowsSlider.module.scss";

const MultipleRowsSlider = ({ children, childrenSecond }) => {
  const settings = {
    infinite: true,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 500,
    dots: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          dots: false,
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      // {
      //   breakpoint: 465,
      //   settings: {
      //     dots: false,
      //     slidesToShow: 3,
      //     slidesToScroll: 2,
      //   },
      // },
    ],
  };
  const settingsAdditional = {
    infinite: true,
    centerMode: false,
    slidesToShow: 6,
    slidesToScroll: 5,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      // {
      //   breakpoint: 980,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 2,
      //   },
      // },
      // {
      //   breakpoint: 878,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 2,
      //   },
      // },
      // {
      //   breakpoint: 848,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //   },
      // },
      {
        breakpoint: 700,
        settings: {
          dots: false,
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 465,
        settings: {
          dots: false,
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings} className={styles.sliderRowUp}>
        {children}
      </Slider>
      <Slider {...settingsAdditional} className={styles.sliderRowDown}>
        {childrenSecond}
      </Slider>
    </div>
  );
};

export default MultipleRowsSlider;
