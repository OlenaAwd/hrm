import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./LogoCardsSlider.module.scss";
import LogoCard from "../LogoCard";
// import logoCard1 from "../../assets/logo-big.svg";
import logoCard1 from "../../assets/Card5-min.png";
import logoCard2 from "../../assets/Card-min.png";
import logoCard3 from "../../assets/Card2-min.png";
import logoCard4 from "../../assets/Card3-min.png";
import logoCard5 from "../../assets/Card4-min.png";

const LogoCardsSlider = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 946,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={styles.slider}>
      <LogoCard
        classes={styles.card1}
        title="Houses starting at</br> $0"
        src={logoCard1}
        description="Australia’s largest listings of relocatable houses."
      />
      <LogoCard
        classes={styles.card2}
        title="Receive</br> 3</br> quotes from lenders"
        src={logoCard2}
        description="Specialist relocatable house lenders"
      />
      <LogoCard
        classes={styles.card3}
        title="Up to</br> 20%</br> discount on building materials"
        src={logoCard3}
        description="Buy building materials at builders rates"
      />
      <LogoCard
        classes={styles.card4}
        title="Receive</br> 3</br> quotes from lenders"
        src={logoCard5}
        description="Australia’s largest listings of relocatable houses."
      />
      <LogoCard
        classes={styles.card5}
        title="Up to</br> 20%</br> discount on building materials"
        src={logoCard4}
        description="House relocation discounts"
      />
    </Slider>
  );
};

export default LogoCardsSlider;
