import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import Loading from "./Loading";

function PostArticleForm({
    inputs,
    setInputs,
    errorMsg,
    handleSubmit,
    waiting,
}) {
    const [topics, setTopics] = useState(null);

    useEffect(() => {
        getTopics().then((topics) => {
            setTopics(topics);
        });
    }, []);

    function handleBlur(event) {
        const element = event.target;

        if (element.value.length === 0) {
            element.classList.add("form-empty");
        } else {
            element.classList.remove("form-empty");
        }
    }

    function hangleChange(event) {
        const element = event.target;

        setInputs((inputs) => {
            const newInputs = { ...inputs };
            newInputs[element.name] = element.value;
            return newInputs;
        });
    }

    function topicOptions() {
        return topics.map((topic) => {
            return (
                <option key={topic.slug} value={topic.slug}>
                    {topic.slug}
                </option>
            );
        });
    }

    if (!topics) {
        return <Loading />;
    }

    return (
        <form onSubmit={handleSubmit} className="post-article-form">
            <label htmlFor="title">Title*</label>
            <input
                type="text"
                name="title"
                id="title"
                value={inputs.title}
                onChange={hangleChange}
                onBlur={handleBlur}
            />

            <label htmlFor="topic">Topic*</label>
            <select
                name="topic"
                id="topic"
                value={inputs.topic}
                onChange={hangleChange}
                onBlur={handleBlur}
            >
                <option hidden disabled value="empty"></option>
                {topicOptions()}
            </select>

            <label htmlFor="body">Body*</label>
            <textarea
                name="body"
                id="body"
                rows="10"
                value={inputs.body}
                onChange={hangleChange}
                onBlur={handleBlur}
            ></textarea>

            <label htmlFor="image_url">Article Image URL</label>
            <input
                type="text"
                name="image_url"
                id="image_url"
                value={inputs.image_url}
                onChange={hangleChange}
            />

            <button type="submit" disabled={waiting}>
                Publish Article
            </button>

            <p>{errorMsg}</p>
        </form>
    );
}

export default PostArticleForm;
