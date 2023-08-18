import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__marca}>&#174;</p>
      <p>Desenvolvido por ArseniumGX</p>
    </footer>
  );
}
