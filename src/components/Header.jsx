import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>NC News</h1>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/topics">Topics</Link>
                <Link to="/user">User</Link>
            </nav>
        </header>
    );
}

export default Header;
