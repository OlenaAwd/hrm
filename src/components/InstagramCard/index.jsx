import React from "react";
import styles from "./InstagramCard.module.scss";

const InstagramCard = ({ src, name, description, title }) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImg} src={src} alt={name} />
      <div className={styles.cardBody}>
        <h6 className={styles.cardTitle}>{title}</h6>
        <p className={styles.cardDescription}>{description}</p>
        {/* <p className={styles.cardReadMore}>Read More</p> */}
      </div>
      <p className={styles.cardName}>{name}</p>
    </div>
  );
};

export default InstagramCard;
