import { Link } from "react-router-dom";
import styles from "./PostCards.module.scss";
import { Button } from "components";

export function PostCards({ id, title }) {
  return (
    <Link to={`/posts/${id}`}>
      <li className={styles.post}>
        <img
          className={styles.post__capa}
          src={`/assets/posts/${id}/capa.png`}
          alt={`Capa ${title}`}
        />
        <h2 className={styles.post__titulo}>{title}</h2>
        <Button>Ler</Button>
      </li>
    </Link>
  );
}
