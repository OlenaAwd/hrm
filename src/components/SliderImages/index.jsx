import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { sliderImgData } from "../../mockedData/mockedData";
import styles from "./SliderImages.module.scss";
import arrowNext from "../../assets/arrowNextList.svg";
import arrowPrev from "../../assets/arrowPrevList.svg";

const SliderImages = () => {
  return (
    <Carousel
      renderIndicator={false}
      className={styles.container}
      thumbWidth="80px"
      dynamicHeight={false}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? styles.absolute : styles.hidden
            } ${styles.arrLeft} `}
           
            onClick={clickHandler}
          >
            <img src={arrowPrev} alt="prev" />
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? styles.absolute : styles.hidden
            } ${styles.arrRight}`}
            onClick={clickHandler}
          >
             <img src={arrowNext} alt="next"/>
          </div>
        );
      }}
    >
      {sliderImgData.map((item, index) => (
        <div key={index} className={styles.wrapper}>
          <img src={item.image} alt="house" />
        </div>
      ))}
    </Carousel>
  );
};

export default SliderImages;
