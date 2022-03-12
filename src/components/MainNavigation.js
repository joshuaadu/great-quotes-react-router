import { Link } from "react-router-dom";
import classes from "./layout/MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/all-quotes">All Quotes</Link>
          </li>
          <li>
            <Link to="/new-quotes">Add Quotes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
