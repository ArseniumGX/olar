import styles from "./Post.module.scss";

export function Post({ id, title }) {
  return (
    <li className={styles.post}>
      <img
        className={styles.post__capa}
        src={`/assets/posts/${id}/capa.png`}
        alt={`Capa ${title}`}
      />
      <h2 className={styles.post__titulo}>{title}</h2>
      <button className={styles.post__btnLer}>Ler</button>
    </li>
  );
}
