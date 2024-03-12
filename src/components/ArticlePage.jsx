import { useParams } from "react-router-dom";
import ArticleBody from "./ArticleBody";
import ArticleComments from "./ArticleComments";
import { useState } from "react";

function ArticlePage() {
    const { article_id } = useParams();
    const [articleLoaded, setArticleLoaded] = useState(false);

    return (
        <section className="article-page">
            <ArticleBody
                article_id={article_id}
                setArticleLoaded={setArticleLoaded}
            />
            <ArticleComments
                article_id={article_id}
                articleLoaded={articleLoaded}
            />
        </section>
    );
}

export default ArticlePage;
