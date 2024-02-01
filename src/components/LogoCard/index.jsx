import React from "react";
import DOMPurify from "dompurify";
import styles from "./LogoCard.module.scss";

const LogoCard = ({ title, src, description, classes }) => {
  const sanitizer = DOMPurify.sanitize;
  return (
    <div className={styles.card}>
      <h6
        className={styles.cardTitle}
        dangerouslySetInnerHTML={{ __html: sanitizer(title) }}
      />

      <div className={`${styles.container} ${classes && classes}`}>
        <img src={src} alt={title} />
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default LogoCard;
