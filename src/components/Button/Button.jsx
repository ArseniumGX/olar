import styles from "./Button.module.scss";

export function Button({ children, tamanho }) {
  return (
    <button className={`${styles.button} ${styles[tamanho]}`}>
      {children}
    </button>
  );
}
