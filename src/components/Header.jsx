import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>NC News</h1>
            <nav className="navbar">
                <Link to="/articles">Articles</Link>
                <Link to="/topics">Topics</Link>
            </nav>
        </header>
    );
}

export default Header;
