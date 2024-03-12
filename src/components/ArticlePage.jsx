import { useParams } from "react-router-dom";
import ArticleBody from "./ArticleBody";
import ArticleComments from "./ArticleComments";

function ArticlePage() {
    const { article_id } = useParams();

    return (
        <section className="article-page">
            <ArticleBody article_id={article_id} />
            <ArticleComments article_id={article_id} />
        </section>
    );
}

export default ArticlePage;
