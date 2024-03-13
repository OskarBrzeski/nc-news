import { useSearchParams } from "react-router-dom";
import ArticleList from "./ArticleList";
import ArticleSort from "./ArticleSort";
import { useState } from "react";
import ErrorPage from "./ErrorPage";

function ArticlesQuery() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [errorOccured, setErrorOccured] = useState(null);

    if (errorOccured) {
        return <ErrorPage error={errorOccured} />;
    }

    return (
        <>
            <ArticleSort
                searchParams={searchParams}
                setSearchParams={setSearchParams}
            />
            <ArticleList
                searchParams={searchParams}
                setErrorOccured={setErrorOccured}
            />
        </>
    );
}

export default ArticlesQuery;
