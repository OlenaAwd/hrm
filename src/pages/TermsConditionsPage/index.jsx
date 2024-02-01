import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  termsGoodsData,
  termsMarketplaceData,
  termsServicesData,
} from "../../mockedData/termsAndConditions";
import styles from "./TermsConditionsPage.module.scss";
import logo from "../../assets/logo-big.svg";


const TermsConditionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();

  return (
    <>
     <Helmet>
      <title>Website Terms and Conditions of Use - House Relocation Marketplace</title>
      <meta name="description" content="Read the terms and conditions of use for House Relocation Marketplace's website (www.houserelocationmarketplace.com.au). Understand the rules and guidelines for using our platform and services." />
      </Helmet>
      <Header />
      <main>
        <section className={styles.commonSection}>
          <div className={styles.imgContainer}>
            <img src={logo} alt="logo" />
          </div>
          <h2 className={styles.sectionTitle}>
            WEBSITE TERMS AND CONDITIONS OF USE
          </h2>
          {id === "services" && (
            <ul>
              {termsServicesData.map((item) => (
                <li key={item.id} className={styles.privacyItem}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.data.map((element) => (
                    <div key={element.id}>
                      <div className={styles.pointContainer}>
                        <span className={styles.pointTitle}>
                          {element.point}
                        </span>
                        <p>{element.pointText}</p>
                      </div>
                      <div className={styles.subPointContainer}>
                        <div className={styles.subPointContainerInner}>
                          <span className={styles.pointTitle}>
                            {element.subPoint}
                          </span>
                          <p>{element.subPointText}</p>
                        </div>
                        <div className={styles.subPointContainerInner}>
                          <span className={styles.pointTitle}>
                            {element.subPoint2 ? element.subPoint2 : ""}
                          </span>
                          <p>{element.subPointText2}</p>
                        </div>
                        <div className={styles.subPointContainerInner}>
                          <span className={styles.pointTitle}>
                            {element.subPoint3}
                          </span>
                          <p>{element.subPointText3}</p>
                        </div>
                        <div className={styles.subPointContainerInner}>
                          <span className={styles.pointTitle}>
                            {element.subPoint4}
                          </span>
                          <p>{element.subPointText4}</p>
                        </div>
                        <div className={styles.subPointContainerInner}>
                          <span className={styles.pointTitle}>
                            {element.subPoint5}
                          </span>
                          <p>{element.subPointText5}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          )}
          {id === "goods" && (
            <ul>
              {termsGoodsData.map((item) => (
                <li key={item.id} className={styles.privacyItem}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.data.map((element) => (
                    <div key={element.id}>
                      <div className={styles.pointContainer}>
                        <span className={styles.pointTitle}>
                          {element.point}
                        </span>
                        <p>{element.pointText}</p>
                      </div>
                      <div className={styles.subPointContainer}>
                        <div className={styles.subPointContainerInner}>
                          <span className={styles.pointTitle}>
                            {element.subPoint}
                          </span>
                          <p>{element.subPointText}</p>
                        </div>
                        <div className={styles.subPointContainerInner}>
                          <span className={styles.pointTitle}>
                            {element.subPoint2 ? element.subPoint2 : ""}
                          </span>
                          <p>{element.subPointText2}</p>
                        </div>
                        <div className={styles.subPointContainerInner}>
                          <span className={styles.pointTitle}>
                            {element.subPoint3}
                          </span>
                          <p>{element.subPointText3}</p>
                        </div>
                        <div className={styles.subPointContainerInner}>
                          <span className={styles.pointTitle}>
                            {element.subPoint4}
                          </span>
                          <p>{element.subPointText4}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          )}
          {id === "marketplace" && (
            <ul>
              {termsMarketplaceData.map((item) => (
                <li key={item.id} className={styles.privacyItem}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.data.map((element) => (
                    <div key={element.id}>
                      <div className={styles.pointContainer}>
                        <span className={styles.pointTitle}>
                          {element.point}
                        </span>
                        <p>{element.pointText}</p>
                      </div>
                      <div className={styles.subPointContainer}>
                        <div className={styles.subPointContainerInner}>
                          <span className={styles.pointTitle}>
                            {element.subPoint}
                          </span>
                          <p>{element.subPointText}</p>
                        </div>
                        <div className={styles.subPointContainerInner}>
                          <span className={styles.pointTitle}>
                            {element.subPoint2 ? element.subPoint2 : ""}
                          </span>
                          <p>{element.subPointText2}</p>
                        </div>
                        <div className={styles.subPointContainerInner}>
                          <span className={styles.pointTitle}>
                            {element.subPoint3}
                          </span>
                          <p>{element.subPointText3}</p>
                        </div>
                        <div className={styles.subPointContainerInner}>
                          <span className={styles.pointTitle}>
                            {element.subPoint4}
                          </span>
                          <p>{element.subPointText4}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TermsConditionsPage;
