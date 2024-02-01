import React from "react";
import DOMPurify from "dompurify";
import styles from "./RelatedCard.module.scss";

const RelatedCard = ({
  title,
  src,
  text,
  children,
  onClick,
  textDescription,
}) => {
  const sanitizer = DOMPurify.sanitize;
  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <div className={styles.cardBody}>
        <p className={styles.cardTitle}>{title}</p>
        <p
          className={styles.cardText}
          dangerouslySetInnerHTML={{
            __html: sanitizer(textDescription),
          }}
        />
        {children}
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.cardImg} src={src} alt="related card" />
      </div>
    </div>
  );
};

export default RelatedCard;
