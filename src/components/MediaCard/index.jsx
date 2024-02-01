import styles from "./MediaCard.module.scss";

const MediaCard = ({ src, title }) => {
  return (
    <div className={styles.card}>
      <img src={src} alt={title} className={styles.img} />
      <h6 className={styles.title}>{title}</h6>
    </div>
  );
};

export default MediaCard;
