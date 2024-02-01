import React from "react";
import styles from "./SuccessCardSmall.module.scss";

const SuccessCardSmall = ({ src, position, description, site }) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImg} src={src} alt={position} />
      <div className={styles.cardBody}>
        <p className={styles.cardDescription}>{description}</p>
        <p className={styles.cardName}>{position}</p>
      </div>
    </div>
  );
};

export default SuccessCardSmall;
