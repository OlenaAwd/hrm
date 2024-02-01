import styles from "./BlogCard.module.scss";

const BlogCard = ({ src, section, title, onClick }) => {
  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <img className={styles.cardImg} src={src} alt="test" />
      <div className={styles.contentContainer}>
        <p className={styles.cardDescription}>{section}</p>
        <h6 className={styles.cardTitle}>{title}</h6>
      </div>
    </div>
  );
};

export default BlogCard;
