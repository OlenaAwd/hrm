import styles from "./Button.module.scss";

const ButtonComponent = ({ children, classes, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${classes && classes}`}
      variant="contained"
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
