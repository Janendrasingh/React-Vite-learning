import styles from "./buttonContainer.module.css";

const ButtonContainer = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button}>C</button>
      <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>3</button>
      <button className={styles.button}>4</button>
    </div>
  );
};

export default ButtonContainer;