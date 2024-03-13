import { useState } from "react";
import TopicsList from "./TopicsList";
import ErrorPage from "./ErrorPage";

function TopicsPage() {
    const [errorOccured, setErrorOccured] = useState(null);

    if (errorOccured) {
        return <ErrorPage error={errorOccured} />;
    }

    return <TopicsList setErrorOccured={setErrorOccured} />;
}

export default TopicsPage;
