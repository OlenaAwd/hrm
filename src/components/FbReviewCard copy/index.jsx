import React from "react";
import styles from "./FbReviewCard.module.scss";

const FbReviewCard = ({ src, name, title }) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImg} src={src} alt={name} />
      <div className={styles.cardBody}>
        <h6 className={styles.cardTitle}>{title}</h6>
        <p className={styles.cardName}>{name}</p>
      </div>
    </div>
  );
};

export default FbReviewCard;
