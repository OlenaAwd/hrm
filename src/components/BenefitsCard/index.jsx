import React from "react";
import { joinBenefitsData } from "../../mockedData/joinData";
import styles from "./BenefitsCard.module.scss";

const BenefitsCard = () => {
  return (
    <>
      {joinBenefitsData.map((item) => (
        <div className={styles.card} key={item.title}>
          <img src={item.src} alt={item.title} />
          <h4>{item.title}</h4>
        </div>
      ))}
    </>
  );
};

export default BenefitsCard;
