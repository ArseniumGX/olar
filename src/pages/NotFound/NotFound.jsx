import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";
import erro404 from "assets/images/erro_404.png";
import { Button } from "components";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.container}>
        <span className={styles.container__texto404}>404</span>
        <h2 className={styles.container__titulo}>Ops! Página não encontrada</h2>
        <p className={styles.container__paragrafo}>
          Tem certeza que era isso que estava procurando?
        </p>
        <p className={styles.container__paragrafo}>
          Aguarde alguns intantes e recarregue a página, ou volte para a página
          inicial.
        </p>
        <div
          className={styles.container__btnVoltar}
          onClick={() => navigate(-1)}
        >
          <Button tamanho="lg">Voltar</Button>
        </div>
        <img
          className={styles.container__imagemDog}
          src={erro404}
          alt="Cachorro de óculos e vestido como humano"
        />
      </section>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
