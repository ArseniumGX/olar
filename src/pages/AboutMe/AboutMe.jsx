import styles from "./AboutMe.module.scss";
import { PostModel } from "components";
import fotoCapa from "assets/images/sobre_mim_capa.png";
import fotoSobreMim from "assets/images/minha-foto.jpeg";

export function AboutMe() {
  return (
    <PostModel fotoCapa={fotoCapa} titulo={"Sobre Mim"}>
      <h3 className={styles.subtitulo}>Olá, eu sou o José!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Antônio Evaldo sorrindo"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi,
        error tenetur incidunt doloremque, voluptatibus sequi laborum pariatur
        consequatur quae corporis aliquam officiis! Fuga, ipsum et. Unde magni
        harum iure.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi,
        error tenetur incidunt doloremque, voluptatibus sequi laborum pariatur
        consequatur quae corporis aliquam officiis! Fuga, ipsum et. Unde magni
        harum iure.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi,
        error tenetur incidunt doloremque, voluptatibus sequi laborum pariatur
        consequatur quae corporis aliquam officiis! Fuga, ipsum et. Unde magni
        harum iure.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi,
        error tenetur incidunt doloremque, voluptatibus sequi laborum pariatur
        consequatur quae corporis aliquam officiis! Fuga, ipsum et. Unde magni
        harum iure.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi,
        error tenetur incidunt doloremque, voluptatibus sequi laborum pariatur
        consequatur quae corporis aliquam officiis! Fuga, ipsum et. Unde magni
        harum iure.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi,
        error tenetur incidunt doloremque, voluptatibus sequi laborum pariatur
        consequatur quae corporis aliquam officiis! Fuga, ipsum et. Unde magni
        harum iure.
      </p>
    </PostModel>
  );
}
