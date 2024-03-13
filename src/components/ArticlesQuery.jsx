import { useSearchParams } from "react-router-dom";
import ArticleList from "./ArticleList";
import ArticleSort from "./ArticleSort";

function ArticlesQuery() {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            {console.log(searchParams)}
            <ArticleSort
                searchParams={searchParams}
                setSearchParams={setSearchParams}
            />
            <ArticleList searchParams={searchParams} />
        </>
    );
}

export default ArticlesQuery;
