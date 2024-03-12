import { useEffect, useState } from "react";
import { getArticleById, updateArticleVotes } from "../utils/api";
import Loading from "./Loading";
import VoteCounter from "./VoteCounter";

function ArticleBody({ article_id }) {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        getArticleById(article_id)
            .then((article) => {
                setArticle(article);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (article === null) {
        return <Loading />;
    }

    return (
        <section className="article-body">
            <h2>{article.title}</h2>
            <div>Author: {article.author}</div>
            <div>Topic: {article.topic}</div>

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
