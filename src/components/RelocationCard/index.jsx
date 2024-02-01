import React, { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { LoadingFallback } from "../../utils/loadingFallback";
import { relocationCardData } from "../../mockedData/data";
import styles from "./RelocationCard.module.scss";

const RelocationCard = () => {
  return (
    <>
      {relocationCardData.map((card, index) => (
        <div className={styles.cardContainer} key={index}>
          <Suspense fallback={<LoadingFallback />}>
            <img
              className={styles.cardImg}
              src={card.src}
              alt={card.text}
              loading="lazy"
            />
          </Suspense>
          <div className={styles.wrapper}>
            <p className={styles.cardText}>{card.text}</p>
            <div className={styles.linkContainer}>
              <NavLink to={card.url} className={styles.linkLearnMore}>
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelocationCard;
