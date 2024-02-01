import { NavLink } from "react-router-dom";
import styles from "./ValuesCard.module.scss";

const ValuesCard = ({ src, title, description, url }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={src} alt="values" />
      <p className={styles.cardDescription}>{description}</p>
      <h6 className={styles.cardTitle}>{title}</h6>
      <NavLink to={url} className={styles.readMore}>
        Read More
      </NavLink>
    </div>
  );
};

export default ValuesCard;
