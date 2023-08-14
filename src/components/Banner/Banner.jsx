import styles from "./Banner.module.scss";
import minhaFoto from "assets/images/minha-foto.jpeg";
import ciruloColorido from "assets/images/circulo_colorido.png";

export function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__apresentacao}>
        <h1 className={styles.banner__apresentacao__titulo}>Olár!</h1>
        <p className={styles.banner__apresentacao__paragrafo}>
          Bem vindo(a) ao meu espaço pessoal. Sou o José Macedo, codename
          ArseniumGX, desenvolvedor Front-end apaixonado por programação e
          obsecado em aprender coisas novas. Aqui compartilho algumas ideias e
          conhecimentos. Fique a vontade !
        </p>
      </div>
      <div className={styles.banner__imagens}>
        <img
          className={styles.banner__imagens__circuloColorido}
          src={ciruloColorido}
          alt="Ciruculo colorido frufru"
          aria-hidden="true"
        />
        <img
          className={styles.banner__imagens__minhaFoto}
          src={minhaFoto}
          alt="Foto do José, o dev"
        />
      </div>
    </div>
  );
}
