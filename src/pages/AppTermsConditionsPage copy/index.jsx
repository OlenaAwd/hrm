import React, { useEffect } from "react";
import DOMPurify from "dompurify";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./AppTermsConditionsPage.module.scss";
import logo from "../../assets/logo-big.svg";
import { useParams } from "react-router-dom";
import {
  appTermsGoodsData,
  appTermsMarketplaceData,
  appTermsServicesData,
} from "../../mockedData/termsAndConditions";


const AppTermsConditionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
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

          {id === "services" && (
            <>
              <h2 className={styles.sectionTitle}>
                APP TERMS AND CONDITIONS OF USE (SERVICES)
              </h2>
              <ul>
                {appTermsServicesData.map((item) => (
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
            </>
          )}
          {id === "goods" && (
            <>
              <h2 className={styles.sectionTitle}>
                APP TERMS AND CONDITIONS OF USE (GOODS)
              </h2>
              <ul>
                {appTermsGoodsData.map((item) => (
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
            </>
          )}
          {id === "marketplace" && (
            <>
              <h2 className={styles.sectionTitle}>
                APP TERMS AND CONDITIONS OF USE (MARKETPLACE)
              </h2>
              <ul>
                {appTermsMarketplaceData.map((item) => (
                  <li key={item.id} className={styles.privacyItem}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    {item.data.map((element) => (
                      <div key={element.id}>
                        <div className={styles.pointContainer}>
                          <span className={styles.pointTitle}>
                            {element.point}
                          </span>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: sanitizer(element.pointText),
                            }}
                          />
                          {/* {element.pointText}
                        </p> */}
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
                          <div className={styles.subPointContainerInner}>
                            <span className={styles.pointTitle}>
                              {element.subPoint6}
                            </span>
                            <p>{element.subPointText6}</p>
                          </div>
                          <div className={styles.subPointContainerInner}>
                            <span className={styles.pointTitle}>
                              {element.subPoint7}
                            </span>
                            <p>{element.subPointText7}</p>
                          </div>
                          <div className={styles.subPointContainerInner}>
                            <span className={styles.pointTitle}>
                              {element.subPoint8}
                            </span>
                            <p>{element.subPointText8}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AppTermsConditionsPage;
