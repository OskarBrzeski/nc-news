import ArticleList from "./ArticleList";

function UserContent({ username, setErrorOccured }) {
    return (
        <section>
            <h2 className="user-article-divider">Articles</h2>
            <ArticleList searchParams={{}} setErrorOccured={setErrorOccured} filterByUser={username}/>
        </section>
    );
}

export default UserContent;
