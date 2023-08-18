import styles from "./Post.module.scss";
import { Route, Routes, useParams } from "react-router-dom";
import "./Post.scss";
import posts from "assets/json/posts.json";
import { PostCards, PostModel } from "components";
import ReactMarkdown from "react-markdown";
import { NotFound } from "pages";

export function Post() {
  const param = useParams();

  const post = posts.find((post) => +param.id === post.id);

  if (!post) {
    return <NotFound />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== +param.id)
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Routes>
      <Route
        path="*"
        element={
          <PostModel
            fotoCapa={`/assets/posts/${param.id}/capa.png`}
            titulo={post.titulo}
          >
            <div className="post-markdown-container">
              <ReactMarkdown>{post.texto}</ReactMarkdown>
            </div>

            <h2 className={styles.tituloOutrosPosts}>
              Outros posts que você pode gostar:
            </h2>
            <ul className={styles.postsRecomendados}>
              {postsRecomendados.map((post) => (
                <PostCards key={post.id} id={post.id} title={post.titulo} />
              ))}
            </ul>
          </PostModel>
        }
      />
    </Routes>
  );
}
