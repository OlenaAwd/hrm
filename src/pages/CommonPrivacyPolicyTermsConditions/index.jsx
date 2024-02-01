import React from "react";
import { Helmet } from "react-helmet-async";
import DOMPurify from "dompurify";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { goods } from "../../mockedData/privacyPolicy";
import {appTermsData,  appTermsServicesData} from "../../mockedData/termsAndConditions";
import styles from "./PrivacyPolicyTermsConditions.module.scss";
import logo from "../../assets/logo-big.svg";



const CommonPrivacyPolicyTermsConditions = () => {
  const sanitizer = DOMPurify.sanitize;
  return (
    <>
     <Helmet>
      <title>App Terms and Conditions of Use - House Relocation Marketplace</title>
      <meta name="description" content="Read the terms and conditions of use for House Relocation Marketplace's app. Understand the rules and guidelines for using our platform and services on your mobile device." />
      </Helmet>
      <Header />
      <main>
        <section className={styles.commonSection}>
          <div className={styles.imgContainer}>
            <img src={logo} alt="logo" />
          </div>
          <h2
            className={`${styles.sectionTitle} ${styles.additionalSectionTitle}`}
          >
            APP TERMS AND CONDITIONS OF USE (GOODS)
          </h2>
          <div className={styles.containerText}>
            <ul>
              {goods.map((item) => (
                <li key={item.id} className={styles.privacyItem}>
                  <h3>{item.title}</h3>
                  {item.data.map((element) => (
                    <div key={element.id}>
                      <div className={styles.pointContainer}>
                        <span className={styles.pointTitle}>
                          {element.point}
                        </span>
                        <p
                          style={{ display: "flex", flexWrap: "wrap" }}
                          dangerouslySetInnerHTML={{
                            __html: sanitizer(element.pointText),
                          }}
                        />
                      </div>
                      <div className={styles.subPointContainer}>
                        <span className={styles.pointTitle}>
                          {element.subPoint}
                        </span>
                        <p>{element.subPointText}</p>
                      </div>
                      <div className={styles.subPointContainer}>
                        <span className={styles.pointTitle}>
                          {element.subPoint2}
                        </span>
                        <p>{element.subPointText2}</p>
                      </div>
                      <div className={styles.subPointContainer}>
                        <span className={styles.pointTitle}>
                          {element.subPoint3}
                        </span>
                        <p>{element.subPointText3}</p>
                      </div>
                      {element.subPointText4 && (
                        <div className={styles.subPointContainer}>
                          <span className={styles.pointTitle}>
                            {element.subPoint4}
                          </span>
                          <p>{element.subPointText4}</p>
                        </div>
                      )}
                      {element.subPointText5 && (
                        <div className={styles.subPointContainer}>
                          <span className={styles.pointTitle}>
                            {element.subPoint5}
                          </span>
                          <p>{element.subPointText5}</p>
                        </div>
                      )}
                      {element.subPointText6 && (
                        <div className={styles.subPointContainer}>
                          <span className={styles.pointTitle}>
                            {element.subPoint6}
                          </span>
                          <p>{element.subPointText6}</p>
                        </div>
                      )}
                      {element.subPointText7 && (
                        <div className={styles.subPointContainer}>
                          <span className={styles.pointTitle}>
                            {element.subPoint7}
                          </span>
                          <p>{element.subPointText7}</p>
                        </div>
                      )}
                      {element.subPointText8 && (
                        <div className={styles.subPointContainer}>
                          <span className={styles.pointTitle}>
                            {element.subPoint8}
                          </span>
                          <p>{element.subPointText8}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
          <h2
            className={`${styles.sectionTitle} ${styles.additionalSectionTitle}`}
          >
            APP TERMS AND CONDITIONS OF USE
          </h2>
          <div className={styles.containerText}>
            <ul>
              {appTermsData.map((item) => (
                <li key={item.id} className={styles.privacyItemUse}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.data.map((element) => (
                    <div key={element.id}>
                      <div className={styles.pointContainerUse}>
                        <span className={styles.pointTitleUse}>
                          {element.point}
                        </span>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: sanitizer(element.pointText),
                          }}
                        />
                      </div>

                      <div className={styles.subPointContainerUse}>
                        <div className={styles.subPointContainerInnerUse}>
                          <span className={styles.pointTitleUse}>
                            {element.subPoint}
                          </span>
                          <p>{element.subPointText}</p>
                        </div>
                        <div className={styles.subPointContainerInnerUse}>
                          <span className={styles.pointTitleUse}>
                            {element.subPoint2 ? element.subPoint2 : ""}
                          </span>
                          <p>{element.subPointText2}</p>
                        </div>
                        <div className={styles.subPointContainerInnerUse}>
                          <span className={styles.pointTitleUse}>
                            {element.subPoint3}
                          </span>
                          <p>{element.subPointText3}</p>
                        </div>
                        <div className={styles.subPointContainerInnerUse}>
                          <span className={styles.pointTitleUse}>
                            {element.subPoint4}
                          </span>
                          <p>{element.subPointText4}</p>
                        </div>
                        {element.pointText2 && <p>{element.pointText2}</p>}
                      </div>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
          <h2
            className={`${styles.sectionTitle} ${styles.additionalSectionTitle}`}
          >
            APP TERMS AND CONDITIONS OF USE (SERVICES)
          </h2>
          <div className={styles.containerText}>
            <ul>
              {appTermsServicesData.map((item) => (
                <li key={item.id} className={styles.privacyItemUse}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.data.map((element) => (
                    <div key={element.id}>
                      <div className={styles.pointContainerUse}>
                        <span className={styles.pointTitleUse}>
                          {element.point}
                        </span>
                        <p>{element.pointText}</p>
                      </div>
                      <div className={styles.subPointContainerUse}>
                        <div className={styles.subPointContainerInnerUse}>
                          <span className={styles.pointTitleUse}>
                            {element.subPoint}
                          </span>
                          <p>{element.subPointText}</p>
                        </div>
                        <div className={styles.subPointContainerInnerUse}>
                          <span className={styles.pointTitleUse}>
                            {element.subPoint2 ? element.subPoint2 : ""}
                          </span>
                          <p>{element.subPointText2}</p>
                        </div>
                        <div className={styles.subPointContainerInnerUse}>
                          <span className={styles.pointTitleUse}>
                            {element.subPoint3}
                          </span>
                          <p>{element.subPointText3}</p>
                        </div>
                        <div className={styles.subPointContainerInnerUse}>
                          <span className={styles.pointTitleUse}>
                            {element.subPoint4}
                          </span>
                          <p>{element.subPointText4}</p>
                        </div>
                        <div className={styles.subPointContainerInnerUse}>
                          <span className={styles.pointTitleUse}>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CommonPrivacyPolicyTermsConditions;
