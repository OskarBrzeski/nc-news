import { useSearchParams } from "react-router-dom";
import ArticleList from "./ArticleList";

function ArticlesQuery() {
    const [searchParams, setSearchParams] = useSearchParams();
    
    return <ArticleList searchParams={searchParams} />;
}

export default ArticlesQuery;
