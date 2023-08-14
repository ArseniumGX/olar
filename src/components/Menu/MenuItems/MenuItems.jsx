import { NavLink } from "react-router-dom";
import styles from "./MenuItems.module.scss";

export function MenuItems({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.linkDestacado : ""}`
      }
    >
      {children}
    </NavLink>
  );
}
