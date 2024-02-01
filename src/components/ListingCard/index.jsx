import React from "react";
import styles from "./ListingCard.module.scss";

const ListingCard = ({ src, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={src} alt="img" />
      <h6 className={styles.cardTitle}>{title}</h6>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default ListingCard;
