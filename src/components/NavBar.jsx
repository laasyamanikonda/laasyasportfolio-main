
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles["main-nav"]}>
      <NavLink to="/" end className={styles["nav-item"]}>
        home
      </NavLink>
      <NavLink to="/experience" className={styles["nav-item"]}>
        experience
      </NavLink>
      <NavLink to="/projects" className={styles["nav-item"]}>
        projects
      </NavLink>
      <NavLink to="/favorites" className={styles["nav-item"]}>
        favorites
      </NavLink>
    </nav>
  );
}