import styles from "./Posts.module.scss";
import posts from "assets/json/posts.json";
import { Post } from "components";

export function Posts() {
  return (
    <ul className={styles.posts}>
      {posts.map(({ id, titulo }) => (
        <Post key={id} title={titulo} id={id} />
      ))}
    </ul>
  );
}
