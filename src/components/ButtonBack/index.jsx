import styles from "./ButtonBack.module.scss";
import arrowBack from "../../assets/arrowBack.svg";

const ButtonBack = ({ children, onClick }) => {
  return (
    <div className={styles.listing} onClick={onClick}>
      <img src={arrowBack} alt="new listings" className={styles.listingArrow} />
      <span className={styles.listingTitle}>{children}</span>
    </div>
  );
};

export default ButtonBack;
