import styles from "./Menu.module.scss";
import { MenuItems } from "./MenuItems/MenuItems";

export function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuItems className={styles.navegacao__link} to="/">
          Início
        </MenuItems>
        <MenuItems className={styles.navegacao__link} to="/sobre-mim">
          Sobre Mim
        </MenuItems>
      </nav>
    </header>
  );
}
