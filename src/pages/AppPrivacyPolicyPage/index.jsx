import React, { useEffect } from "react";
import DOMPurify from "dompurify";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { appPrivacyPolicyData } from "../../mockedData/privacyPolicy";
import styles from "./AppPrivacyPolicyPage.module.scss";
import logo from "../../assets/logo-big.svg";


const AppPrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sanitizer = DOMPurify.sanitize;

  return (
    <>
     <Helmet>
      <title>App Privacy Policy - House Relocation Marketplace</title>
      <meta name="description" content="Read our app privacy policy to understand how House Relocation Marketplace (ACN 667427643) collects and handles personal information via www.houserelocationmarketplace.com. Learn about data collection, access, correction, and complaint procedures." />
      </Helmet>
      <Header />
      <main>
        <section className={styles.commonSection}>
          <div className={styles.imgContainer}>
            <img src={logo} alt="logo" />
          </div>
          <h2 className={styles.sectionTitle}>App Privacy Policy</h2>
          <div className={styles.containerText}>
            <p className={styles.text}>
              This Privacy Policy applies to all personal information collected
              by House Relocation Marketplace (ACN{" "}
              <span style={{ color: "rgb(39 112 158)" }}>667427643</span>) via
              the app located at{" "}
              <a target="_blank" href="www.houserelocationmarketplace.com">
                www.houserelocationmarketplace.com
              </a>
            </p>
            <ul>
              {appPrivacyPolicyData.map((item) => (
                <li key={item.id} className={styles.privacyItem}>
                  <h3>{item.title}</h3>
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

export default AppPrivacyPolicyPage;
