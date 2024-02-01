import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./SliderHouse.module.scss";
import arrowNext from "../../../assets/arrowNextList.svg";
import arrowPrev from "../../../assets/arrowPrevList.svg";


const SliderHouse = ({arr}) => {
  return (
    <>
    <Carousel
      renderIndicator={false}
      className={styles.container}
      thumbWidth="169px"
      showStatus={false}
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
      {arr.map((item, index) => (
        <div key={index} className={styles.wrapper}>
          <img src={item.url} alt="house" />
        </div>
      ))}
    </Carousel>
    <style>
      {`
        .carousel .thumb, .thumb.selected {
          height: 119px;
          img{
            width:169px;
            height: 119px;
          }
          border: none;
          &:hover{
            border:none;
          }
        
        }
      `}
    </style>
    </>
  );
};

export default SliderHouse;