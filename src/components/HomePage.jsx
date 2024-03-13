import { useState } from "react";
import ArticleList from "./ArticleList";
import ErrorPage from "./ErrorPage";

function HomePage() {
    const [errorOccured, setErrorOccured] = useState(null);

    function renderContent() {
        if (errorOccured) {
            return <ErrorPage error={errorOccured} />;
        }

        return (
            <ArticleList
                searchParams={{ limit: 6, sorted_by: "votes" }}
                setErrorOccured={setErrorOccured}
            />
        );
    }

    return (
        <section>
            <h2>Welcome to NC News</h2>

            <p>Here is a selection of our readers' favourite articles!</p>

            {renderContent()}
        </section>
    );
}

export default HomePage;
