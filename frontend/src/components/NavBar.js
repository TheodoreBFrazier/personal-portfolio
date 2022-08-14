import { Link } from "react-router-dom";

import DarkMode from "../DarkMode";


function NavBar () {
    return (
        <nav className="navigation">
            <DarkMode />
            <h3 className="nav-logo">
                
                <Link to="/">
                    <h3>Theo's Logo</h3>

                </Link>
            </h3>
        </nav>
    )
}

export default NavBar;