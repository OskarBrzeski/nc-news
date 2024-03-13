import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import TopicCard from "./TopicCard";
import Loading from "./Loading";

function TopicsList({ setErrorOccured }) {
    const [topics, setTopics] = useState(null);

    useEffect(() => {
        getTopics()
            .then((topics) => {
                setTopics(topics);
            })
            .catch((error) => {
                console.log(error)
                setErrorOccured(error)
            });
    }, []);

    if (topics === null) {
        return <Loading />;
    }

    return (
        <ul className="topic-list">
            {topics.map((topic) => {
                return (
                    <li key={topic.slug}>
                        <TopicCard topic={topic} />
                    </li>
                );
            })}
        </ul>
    );
}

export default TopicsList;
