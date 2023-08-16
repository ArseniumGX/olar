import { useEffect } from "react";
import styles from "./PostModel.module.scss";

export function PostModel({ fotoCapa, titulo, children }) {
  useEffect(() => {
    console.info(fotoCapa);
  }, []);
  return (
    <article className={styles.postModelContainer}>
      <div
        className={styles.postModelContainer__fotoCapa}
        style={{ "--background-image": `url(${fotoCapa})` }}
      />
      <h2 className={styles.postModelContainer__titulo}>{titulo}</h2>
      <div className={styles.postModelContainer__postConteudoContainer}>
        {children}
      </div>
    </article>
  );
}
