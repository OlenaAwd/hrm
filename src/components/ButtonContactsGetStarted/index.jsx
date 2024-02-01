import styles from "./ButtonContactsGetStarted.module.scss";

const ButtonContactsGetStarted = ({ children }) => {
  return <a type="email" href="mailto:info@houserelocationmarketplace.com" className={styles.contactsBtnGetStarted}>{children}</a>;
};

export default ButtonContactsGetStarted;
