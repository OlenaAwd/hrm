import Slider from "react-slick";
import { NextArrowRelocate, PrevArrowRelocate } from "../../utils/arrows";
import styles from "./RelocateSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelocateSlider = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    nextArrow: <NextArrowRelocate />,
    prevArrow: <PrevArrowRelocate />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 530,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={styles.sliderContainer}>
      {children}
    </Slider>
  );
};

export default RelocateSlider;
