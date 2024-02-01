import React from "react";
import StepsItemCard from "../StepsItemCard";
import styles from "./YouOrder.module.scss";
import step1 from "../../assets/memberStep1-min.webp";
import step2 from "../../assets/memberStep2-min.webp";
import step3 from "../../assets/memberStep3-min.webp";
import number1 from "../../assets/Number1-min.png";
import number2 from "../../assets/Number2-min.png";
import number3 from "../../assets/Number3-min.png";

const YouOrder = () => {
  return (
    <div className={styles.hrm}>
      <div className={styles.innerContainer}>
        <h2 className={styles.membersTitle}>What happens after you order</h2>
        <div className={styles.stepsList}>
          <StepsItemCard
            src={step1}
            img={number1}
            spanText="Secure checkout page"
            text="Click the purchase button above and you’ll be taken to a
                  secure checkout page."
          />
          <StepsItemCard
            src={step2}
            img={number2}
            spanText="Log into your account"
            text="Complete your order and check your email for your login instructions."
          />
          <StepsItemCard
            src={step3}
            img={number3}
            spanText="Enjoy your new program"
            text="Complete your House Relocation Goals to find matched listings, become a subscriber to message Listing Home Owners and become a member to relocate the house of your dreams."
          />
        </div>
      </div>
    </div>
  );
};

export default YouOrder;
