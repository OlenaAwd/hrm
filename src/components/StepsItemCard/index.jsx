import styles from "./StepsItemCard.module.scss";

const StepsItemCard = ({ src, text, img, spanText }) => {
  return (
    <div className={styles.stepsItem}>
      <img src={src} alt="step" />
      <p className={styles.spanStep}>{spanText}</p>
      <div className={styles.stepsItemDescription}>
        <img src={img} alt="step" />
        <p className={styles.stepsItemDescriptionText}>{text}</p>
      </div>
    </div>
  );
};

export default StepsItemCard;
