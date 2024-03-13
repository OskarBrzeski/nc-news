import { useParams } from "react-router-dom";
import ArticleBody from "./ArticleBody";
import ArticleComments from "./ArticleComments";
import { useState } from "react";
import ErrorPage from "./ErrorPage";

function ArticlePage() {
    const { article_id } = useParams();
    const [articleLoaded, setArticleLoaded] = useState(false);
    const [errorOccured, setErrorOccured] = useState(null);

    if (errorOccured) {
        return <ErrorPage error={errorOccured}/>
    }

    return (
        <section className="article-page">
            <ArticleBody
                article_id={article_id}
                setArticleLoaded={setArticleLoaded}
                setErrorOccured={setErrorOccured}
            />
            <ArticleComments
                article_id={article_id}
                articleLoaded={articleLoaded}
            />
        </section>
    );
}

export default ArticlePage;
