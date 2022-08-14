import { Link } from "react-router-dom";

import DarkMode from "../DarkMode";

function NavBar() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/" className="nav-logo">
            <h3>THEODORE FRAZIER</h3>
          </Link>
        </li>
        <li>
          <div className="darkmode-toggle">
            <DarkMode />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
