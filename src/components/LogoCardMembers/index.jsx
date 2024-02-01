import React from "react";
import styles from "./LogoCardMembers.module.scss";

import logoCard from "../../assets/CardLogoMembers1.webp";
import logoCard2 from "../../assets/CardLogoMembers2.webp";
import logoCard3 from "../../assets/CardLogoMembers3.webp";
import logoCard4 from "../../assets/CardLogoMembers4.webp";

const LogoCardMembers = () => {
  return (
    <div className={styles.logoCardContainer}>
      <div className={styles.lendersContainer}>
        <img src={logoCard} alt="logo" className={styles.logoCardLenders} />
        <p className={styles.logoDescription}>
          Specialist relocatable house lenders
        </p>
      </div>
      <div className={styles.buildersContainer}>
        <img src={logoCard2} alt="logo" className={styles.logoCardBuilders} />
        <p className={styles.logoDescription}>
          Buy building materials at builders rates
        </p>
      </div>
      <div className={styles.RelocationsContainer}>
        <img
          src={logoCard3}
          alt="logo"
          className={styles.logoCardRelocations}
        />
        <p className={styles.logoDescription}>
          Specialist relocatable house agents
        </p>
      </div>
      <div className={styles.agentsContainer}>
        <img src={logoCard4} alt="logo" className={styles.logoCardAgents} />
        <p className={styles.logoDescription}>House relocation discounts</p>
      </div>
    </div>
  );
};

export default LogoCardMembers;
