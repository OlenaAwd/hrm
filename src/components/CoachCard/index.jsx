import React from "react";
import styles from "./CoachCard.module.scss";

const CoachCard = ({ src, name, position }) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImg} src={src} alt={name} />
      <div className={styles.cardBody}>
        <p className={styles.cardName}>{name}</p>
        <p className={styles.cardPosition}>{position}</p>
      </div>
    </div>
  );
};

export default CoachCard;
