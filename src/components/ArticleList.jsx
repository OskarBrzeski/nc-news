import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";

function ArticleList({ searchParams, setErrorOccured, filterByUser }) {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        setArticles(null);

        getArticles(searchParams)
            .then((articles) => {
                if (filterByUser) {
                    setArticles(
                        articles.filter((article) => {
                            return article.author === filterByUser;
                        })
                    );
                } else {
                    setArticles(articles);
                }
            })
            .catch((error) => {
                setErrorOccured(error);
            });
    }, [searchParams]);

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
