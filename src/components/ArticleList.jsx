import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles()
            .then(({ data: { articles } }) => {
                setArticles(articles);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <ul className="article-list">
            {articles.map((article) => {
                return (
                    <li key={article.article_id}>
                        <ArticleCard article={article} />
                    </li>
                );
            })}
        </ul>
    );
}

export default ArticleList;
