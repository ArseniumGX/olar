import styles from "./Posts.module.scss";
import posts from "assets/json/posts.json";
import { PostCards } from "components";

export function Posts() {
  return (
    <ul className={styles.posts}>
      {posts.map(({ id, titulo }) => (
        <PostCards key={id} title={titulo} id={id} />
      ))}
    </ul>
  );
}
