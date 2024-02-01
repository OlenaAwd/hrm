import React from "react";
import styles from "./MemberCards.module.scss";

const MemberCards = ({ src, onClick, text, title }) => {
  return (
    <div className={styles.memberCards}>
      <img src={src} alt="icon" />
      <div className={styles.contentWrapperLearn}>
        <h2 className={styles.memberCardsTitle}>{title}</h2>
        <p className={styles.memberCardsDescription}>
          <span className={styles.link} onClick={onClick}>
            Click here
          </span>{" "}
          {text}
        </p>
      </div>
    </div>
  );
};

export default MemberCards;
