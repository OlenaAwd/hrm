import styles from "./HelpfulLinks.module.scss";
import arrow from "../../assets/whiteArrow.svg";

const HelpfulLinksComponent = ({ children, onClick }) => {
  return (
    <div className={styles.listing}>
      <span className={styles.listingTitle} onClick={onClick}>
        {children}
      </span>
      <img src={arrow} alt="new listings" className={styles.listingArrow} />
    </div>
  );
};

export default HelpfulLinksComponent;
