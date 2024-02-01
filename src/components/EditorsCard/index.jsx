import { editorsCardData } from "../../mockedData/data";
import styles from "./EditorsCard.module.scss";

const EditorsCard = () => {
  return (
    <>
      {editorsCardData.map((card, index) => (
        <div className={styles.cardContainer} key={index}>
          <img className={styles.cardImg} src={card.src} alt={card.name} />
          <h6 className={styles.cardTitle}>{card.title}</h6>
        </div>
      ))}
    </>
  );
};

export default EditorsCard;
