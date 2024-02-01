import React from "react";
import styles from "./Impact.module.scss";
import hands from "../../assets/handsHouse-min.png";
import bgImpact from "../../assets/Head-min.png";
import goalLogo from "../../assets/goalsLogo.svg";
import finalCard from "../../assets/finalImg-min.png";
import finalCard2 from "../../assets/finalImg2-min.png";
import finalCard3 from "../../assets/finalImg3-min.png";
import finalCard4 from "../../assets/finalImg4-min.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";

const Impact = () => {
  return (
    <>
      <Helmet>
      <title>Creating More Affordable and Sustainable Homes - House Relocation Marketplace</title>
      <meta name="description" content="Learn about House Relocation Marketplace's commitment to sustainable practices in house relocation. Discover our impact and how we support the United Nations Sustainable Development Goals." />
      </Helmet>
      <Header />
      <main>
        <section className={styles.topSection}>
          <div className={styles.topContentWrapper}>
            <h4 className={styles.topContentTitle}>
              More affordable and sustainable homes for the future
            </h4>
            <p className={styles.topContentText}>
              House Relocation Marketplaces practices and goals.
            </p>
          </div>
          <div className={styles.topImgWrapper}>
            <img src={hands} alt="hands" />
          </div>
        </section>
        <div className={styles.impactBg}>
          <img src={bgImpact} alt="impact" />
        </div>
        <section className={styles.goalSection}>
          <div className={styles.goalsContainer}>
            <p className={styles.textGoals}>
              House Relocation Marketplace is committed to embedding sustainable
              business practices throughout our organisation, from our strategy
              and day-to-day operations, through to our members.
            </p>
            <p className={styles.textGoals}>
              Whilst House Relocation Marketplace has only been in business for
              a short time, we are preparing to define the metrics to measure
              our sustainability and impact. We are dedicated to continually
              seeking areas in which we can improve.
            </p>
            <p className={styles.textGoals}>
              We support and use the United Nations Sustainable Development
              Goals in determining how to measure and assess House Relocation
              Marketplace impact.
            </p>
          </div>
          <div className={styles.goalLogoContainer}>
            <div className={styles.logoImgContainer}>
              <img src={goalLogo} alt="goal logo" />
            </div>
            <p className={styles.goalLogoText}>
              The 17 goals developed by the United Nations give organisations a
              framework that they can develop sustainable strategies to meet the
              goals The United Nations identified. Details of the UN Sustainable
              Development Goals can be found on their website at:
              www.sdgs.un.org/goals
            </p>
          </div>
        </section>
        <section className={styles.goalSection}>
          <p className={styles.goalFinalText}>
            House Relocation Marketplace is focussed primarily on the following
            4 UN Sustainable Development Goals:
          </p>
          <div className={styles.goalLogoContainer}>
            <div className={styles.logoImgContainerFinal}>
              <img src={goalLogo} alt="goal logo" />
            </div>
            <div className={styles.imgCards}>
              <img src={finalCard} alt="finalcard" />
              <img src={finalCard2} alt="finalcard" />
              <img src={finalCard3} alt="finalcard" />
              <img src={finalCard4} alt="finalcard" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Impact;
