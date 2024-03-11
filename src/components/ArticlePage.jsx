import { useParams } from "react-router-dom";
import ArticleBody from "./ArticleBody";

function ArticlePage() {
    const { article_id } = useParams();

    return <ArticleBody article_id={article_id} />;
}

export default ArticlePage;
