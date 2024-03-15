import { Link } from "react-router-dom";
import ArticleList from "./ArticleList";

function UserContent({ username, setErrorOccured }) {
    return (
        <section>
            <h2 className="user-article-divider">Articles</h2>
            <Link to="/create-article">
                <button className="new-article-button">
                    Create New Article
                </button>
            </Link>
            <ArticleList
                searchParams={{}}
                setErrorOccured={setErrorOccured}
                filterByUser={username}
            />
        </section>
    );
}

export default UserContent;
