import styles from "./LearnMore.module.scss";
import arrow from "../../assets/arrow.svg";

const LearnMoreComponent = ({ children }) => {
  return (
    <div className={styles.listing}>
      <span className={styles.listingTitle}>{children}</span>
      <img src={arrow} alt="new listings" className={styles.listingArrow} />
    </div>
  );
};

export default LearnMoreComponent;
