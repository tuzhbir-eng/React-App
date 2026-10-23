import Routing from "../Routing";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useMatch,
  useNavigate,
  BrowserRouter as Router,
} from "react-router-dom";
import styles from "../Routing.module.sass";

const linkStyle = ({ isActive }) => (isActive ? { background: " rgb(72, 107, 180)" } : {});

export default function Header() {
  return (
    <header className={styles.head}>
      <h1>Routing</h1>
      <nav>
        <ul className={styles.navContainer}>
          <li>
            <NavLink to="/" style={linkStyle} className={styles.navElement}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={linkStyle} className={styles.navElement}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/components" style={linkStyle} className={styles.navElement}>
              Components
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
