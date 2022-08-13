import { Link } from "react-router-dom";



function NavBar () {
    return (
        <nav className="navigation">
            <h3 className="nav-logo">
                <Link to="/">
                    <h3>Theo's Logo</h3>

                </Link>
            </h3>
        </nav>
    )
}

export default NavBar;