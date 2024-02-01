import prevArrow from "../assets/arrowPrev.svg";
import nextArrow from "../assets/arrowNext.svg";

export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={nextArrow}
      alt="nextArrow"
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 1,
        right: "9px",
        top: 75,
        // "@media (max-width: 690px)": {
        //   display: "none",
        // },
      }}
      onClick={onClick}
    />
  );
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={prevArrow}
      alt="prevArrow"
      className={className}
      style={{ ...style, display: "block", zIndex: 1, left: 0, top: 75 }}
      onClick={onClick}
    />
  );
}

export function NextArrowRelocate(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={nextArrow}
      alt="nextArrow"
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 1,
        right: "-20px",
        top: 167,
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    />
  );
}

export function PrevArrowRelocate(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={prevArrow}
      alt="prevArrow"
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 1,
        left: "-20px",
        top: 168,
        width: "40px",
        height: "40px",
      }}
      onClick={onClick}
    />
  );
}
