import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.scss";
import logo from "../../assets/HRMlogo.png";
import appStore from "../../assets/appStoreImg.webp";
import googleStore from "../../assets/googlePlayImg.webp";

const Footer = () => {
  let navigate = useNavigate();
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.commonContainer}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            src={logo}
            alt="House Relocation"
            onClick={() => {
              navigate("/");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />
        </div>
        <div className={styles.commonListings}>
          <div className={styles.downloadApp}>
            <h4 className={styles.downloadTitle}>
              Download the House Relocation Marketplace App
            </h4>
            <div className={styles.imagesWrapper}>
              <img
                src={appStore}
                alt="appleStore"
                className={styles.appleStoreImg}
              />
              <img
                src={googleStore}
                alt="googleStore"
                className={styles.googleStoreImg}
              />
            </div>
          </div>
          <div className={styles.responsiveContainer}>
            <div className={styles.linksContainer}>
              <h4 className={styles.footerTitle}>Links</h4>
              <ul>
                <li
                  className={styles.footerItems}
                  onClick={() => {
                    navigate("/privacy-policy");
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Web Privacy Policy
                </li>
                <li
                  className={styles.footerItems}
                  onClick={() => {
                    navigate("/app-privacy-policy");
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  App Privacy Policy
                </li>
                <li
                  className={`${styles.footerItems} ${styles.footerItemsStatic}`}
                >
                  Website Terms and Conditions of Use
                </li>

                <ul>
                  <li
                    className={styles.listInside}
                    onClick={() => {
                      navigate("/terms-and-conditions/marketplace");
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    For Marketplace
                  </li>
                  <li
                    className={styles.listInside}
                    onClick={() => {
                      navigate("/terms-and-conditions/goods");
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    For Goods
                  </li>
                  <li
                    className={styles.listInside}
                    onClick={() => {
                      navigate("/terms-and-conditions/services");
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    For Services
                  </li>
                </ul>
                <li
                  className={`${styles.footerItems} ${styles.footerItemsStatic}`}
                >
                  App Terms and Conditions of Use
                </li>
                <ul>
                  <li
                    className={styles.listInside}
                    onClick={() => {
                      navigate("/app-terms-and-conditions/marketplace");
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    For Marketplace
                  </li>
                  <li
                    className={styles.listInside}
                    onClick={() => {
                      navigate("/app-terms-and-conditions/goods");
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    For Goods
                  </li>
                  <li
                    className={styles.listInside}
                    onClick={() => {
                      navigate("/app-terms-and-conditions/services");
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    For Services
                  </li>
                </ul>
              </ul>
            </div>
            <div className={styles.listingsContainer}>
              <h4 className={styles.footerTitle}>Listings</h4>
              <ul className={styles.listingTextList}>
                <li className={styles.footerItems}>Queensland</li>
                <li className={styles.footerItems}>New South Wales</li>
                <li className={styles.footerItems}>Victoria</li>
                <li className={styles.footerItems}>Tasmania</li>
                <li className={styles.footerItems}>South Australia</li>
                <li className={styles.footerItems}>Western Australia</li>
                <li className={styles.footerItems}>
                  Australian Capital Territory
                </li>
                <li className={styles.footerItems}>Northern Territory</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerContainer}>
        <p className={styles.footerText}>
          Copyright House Relocation Marketplace 2010 - 2023.
        </p>
      </div>
    </div>
  );
};

export default Footer;
