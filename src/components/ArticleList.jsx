import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";

function ArticleList({ searchParams }) {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        getArticles(searchParams)
            .then((articles) => {
                setArticles(articles);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (articles === null) {
        return <Loading />;
    }

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
