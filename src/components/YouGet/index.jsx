import React from "react";
import DOMPurify from "dompurify";
import ModalEarlyBirdDiscount from "../ModalEarlyBirdDiscount";
import styles from "./YouGet.module.scss";
import doneIcon from "../../assets/doneIcon.svg";
// import zPay from "../../assets/zpay.svg";
import applePay from "../../assets/applePay.svg";
import gPay from "../../assets/gPay.svg";
import mastercard from "../../assets/mastercard.svg";
import visa from "../../assets/visa.svg";
import secured from "../../assets/securedImg.svg";
import computerImg from "../../assets/computer-min.webp";

const YouGet = ({ title, childrenArr }) => {
  const sanitizer = DOMPurify.sanitize;
  return (
    <section className={styles.commonSection}>
      {title}
      <div className={styles.computerContainer}>
        <img src={computerImg} alt="computer" />
      </div>
      <div className={styles.whatYouGet}>
        <h5 className={styles.whatYouGetTitle}>What You Get:</h5>
        <ul className={styles.whatYouGetList}>
          {childrenArr.map((item, index) => (
            <li className={styles.whatYouGetItem} key={index}>
              <img src={doneIcon} alt="done" />
              <p
                className={styles.whatYouGetText}
                dangerouslySetInnerHTML={{ __html: sanitizer(item.text) }}
              />
            </li>
          ))}
        </ul>
        <div className={styles.paymentCardWrapper}>
          <div className={styles.paymentCardLeft}>
            <h5 className={styles.paymentCardTitle}>Yearly Subscription</h5>
            <p className={styles.paymentCardSubTitle}>Perfect for people researching houses</p>
            <div className={styles.underline}></div>
            <div className={styles.paymentDescription}>
            <p className={styles.payText}>Pay yearly, cancel anytime.</p>
            <div>
            <p className={styles.newPayText}>
              <span className={styles.newActualPrice}>$ 44</span>
              </p>
              <p className={styles.newActualDescription}>a year, includes GST</p>
              </div>
              </div>
            <ModalEarlyBirdDiscount
              children={
                <div className={styles.joinBtnContainer}>
                  <button className={styles.joinMembershipBtn}>
                   Subscribe
                  </button>
                </div>
              }
            />
          </div>
          <div className={styles.paymentCardRight}>
            <div className={styles.paymentCardRightHeader}>
              <p className={styles.valueText}>best value</p>
              <h5 className={styles.valueHeader}>
              Yearly Membership
              </h5>
            </div>
            <p className={styles.paymentCardSubTitle}>Perfect for people who are ready to master House Relocation and acquire a house.</p>
            <div className={styles.paymentDescription}>
                <p className={styles.payTextRight}>Pay yearly, cancel anytime.</p>
            <p className={styles.newPayTextRight}>
              <span className={styles.newOldPriceRight}>$ 2,090</span>{" "}
              <span className={styles.newActualPriceRight}>$ 990</span> 
              <p className={styles.newActualDescription}>annual fee, includes GST</p>
            </p>
            </div>
          
            <ModalEarlyBirdDiscount
              children={
                <div className={styles.joinBtnContainer}>
                  <button className={styles.joinMembershipAnnualBtn}>
                    Join Membership
                  </button>
                </div>
              }
            />
          </div>
        </div>
        <div className={styles.paymentsWrapper}>
          <div className={styles.payments}>
            <img src={applePay} alt="applePay" />
            <img src={gPay} alt="gPay" />
            <img src={mastercard} alt="mastercard" />
            <img src={visa} alt="visa" />
          </div>

          <div className={styles.securedContainer}>
            <img src={secured} alt="secured" />
            <p className={styles.securedText}>
              For your security, all orders are processed on a secured server.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouGet;
