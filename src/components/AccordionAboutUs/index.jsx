import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./AccordionAboutUs.module.scss";

const AboutUsAccordion = ({
  visionTitle,
  onClickVision,
  storyTitle,
  onClickStory,
  servicesTitle,
  onClickServices,
  valuesTitle,
  onClickValues,
  circularTitle,
  onClickCircular,
}) => {
  return (
    <div className={styles.accordion}>
      <ul>
        <p className={styles.aboutUsTitle}>
          <KeyboardArrowDownIcon style={{ fill: "#fff" }} />
          ABOUT US
        </p>
        <li className={styles.accordionItem} onClick={onClickVision}>
          <KeyboardArrowRightIcon style={{ fill: "#64B930" }} />

          {visionTitle}
        </li>
        <li className={styles.accordionItem} onClick={onClickStory}>
          <KeyboardArrowRightIcon style={{ fill: "#64B930" }} />
          {storyTitle}
        </li>
        <li className={styles.accordionItem} onClick={onClickServices}>
          <KeyboardArrowRightIcon style={{ fill: "#64B930" }} />
          {servicesTitle}
        </li>
        <li className={styles.accordionItem} onClick={onClickValues}>
          <KeyboardArrowRightIcon style={{ fill: "#64B930" }} />
          {valuesTitle}
        </li>
        <li className={`${styles.accordionItem}`} onClick={onClickCircular}>
          <KeyboardArrowRightIcon style={{ fill: "#64B930" }} />
          {circularTitle}
        </li>
      </ul>
    </div>
  );
};
export default AboutUsAccordion;
