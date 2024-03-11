import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";

function ArticleBody({ article_id }) {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        getArticleById(article_id)
            .then(({ data: { article } }) => {
                setArticle(article);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (article === null) {
        return <p>Loading...</p>;
    }

    return (
        <section className="article-body">
            <h2>{article.title}</h2>
            <div>Author: {article.author}</div>
            <div>Topic: {article.topic}</div>
            
            <img src={article.article_img_url} alt="current article" />
            <p>{article.body}</p>
            <div>Votes: {article.votes}</div>
        </section>
    );
}

export default ArticleBody;
