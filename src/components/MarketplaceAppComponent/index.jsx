import React from "react";
import styles from "./MarketplaceAppComponent.module.scss";
import appStore from "../../assets/appStoreImg.webp";
import googleStore from "../../assets/googlePlayImg.webp";

const MarketplaceAppComponent = () => {
  return (
    <section className={styles.main}>
      <h3 className={styles.mainTitle}>
        Download the House Relocation Marketplace App
      </h3>
      <div className={styles.imagesWrapper}>
        <img
          src={appStore}
          alt="appleStore"
          className={styles.appleStoreImg}
          loading="lazy"
        />
        <img
          src={googleStore}
          alt="googleStore"
          className={styles.googleStoreImg}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default MarketplaceAppComponent;
