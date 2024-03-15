import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function Header() {
    const { user } = useContext(UserContext);

    function renderUser() {
        if (user) {
            return <Link to="/user">My Profile</Link>;
        } else {
            return <Link to="/sign-in">Sign in</Link>;
        }
    }

    return (
        <header>
            <h1>NC News</h1>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/topics">Topics</Link>
                {renderUser()}
            </nav>
        </header>
    );
}

export default Header;
