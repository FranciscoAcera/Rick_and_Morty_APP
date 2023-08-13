import { Link } from "react-router-dom";
import SearchBar from "../../components/Searchbar/SearchBar";
import styles from "./Nav.module.css";

const Nav = ({ onSearch, logout }) => (
  <div className={styles.container}>
    <button onClick={logout}>
    <i class="gg-log-out"></i>
      <link href='https://unpkg.com/css.gg@2.0.0/icons/css/log-out.css' rel='stylesheet'/>
    </button>
    <div className={styles.container2}>
      <Link to="/home">
        <button className={styles.navigationButton}>Home</button>
      </Link>
      <Link to="/about">
        <button className={styles.navigationButton}>About</button>
      </Link>
      <Link to="/favorites">
        <button className={styles.navigationButton}>Favorites</button>
      </Link>
    </div>
    <SearchBar onSearch={onSearch} />;
  </div>
);

export default Nav;
