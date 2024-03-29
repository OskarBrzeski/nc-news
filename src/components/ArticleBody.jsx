import { useEffect, useState } from "react";
import { getArticleById, updateArticleVotes } from "../utils/api";
import VoteCounter from "./VoteCounter";
import Loading from "./Loading";

function ArticleBody({ article_id, setArticleLoaded, setErrorOccured }) {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        getArticleById(article_id)
            .then((article) => {
                setArticle(article);
                setArticleLoaded(true);
            })
            .catch((error) => {
                setErrorOccured(error);
            });
    }, []);

    if (article === null) {
        return <Loading />;
    }

    return (
        <section className="article-body">
            <h2>{article.title}</h2>
            <p className="article-body-meta">Author: {article.author}</p>
            <p className="article-body-meta">Topic: {article.topic}</p>

            <img src={article.article_img_url} alt="current article" />
            <p>{article.body}</p>
            <VoteCounter
                subject_id={article_id}
                votes={article.votes}
                voteUpdater={updateArticleVotes}
            />
        </section>
    );
}

export default ArticleBody;
