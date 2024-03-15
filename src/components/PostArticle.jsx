import { useContext, useState } from "react";
import PostArticleForm from "./PostArticleForm";
import ArticleCard from "./ArticleCard";
import { postArticle } from "../utils/api";
import { UserContext } from "../contexts/UserContext";

function PostArticle() {
    const [newArticle, setNewArticle] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [waiting, setWaiting] = useState(false);
    const [inputs, setInputs] = useState({
        title: "",
        topic: "empty",
        body: "",
        image_url: "",
    });

    const { user } = useContext(UserContext);

    function handleSumbit(event) {
        event.preventDefault();

        setErrorMsg(null);
        setWaiting(true);

        if (inputs.title.length === 0) {
            setErrorMsg("Form not filled in correctly");
            setWaiting(false);
        } else if (inputs.topic === "empty") {
            setErrorMsg("Form not filled in correctly");
            setWaiting(false);
        } else if (inputs.body.length === 0) {
            setErrorMsg("Form not filled in correctly");
            setWaiting(false);
        } else {
            setErrorMsg("Waiting for server response");
            postArticle(
                user,
                inputs.title,
                inputs.body,
                inputs.topic,
                inputs.image_url
            )
                .then((article) => {
                    setErrorMsg(null);
                    setNewArticle(article);
                    setInputs({
                        title: "",
                        topic: "empty",
                        body: "",
                        image_url: "",
                    });
                })
                .catch((error) => {
                    setErrorMsg("Something went wrong");
                    console.log(error);
                })
                .finally(() => {
                    setWaiting(false);
                });
        }
    }

    function renderArticleCard() {
        if (newArticle) {
            return (
                <div className="article-card-li">
                    <h2>New Article Successfully Published</h2>
                    <ArticleCard
                        className="post-article-card"
                        article={newArticle}
                    />
                </div>
            );
        }
    }

    return (
        <section className="post-article">
            <h2>Create a New Article</h2>
            <PostArticleForm
                inputs={inputs}
                setInputs={setInputs}
                errorMsg={errorMsg}
                handleSubmit={handleSumbit}
                waiting={waiting}
            />
            {renderArticleCard()}
        </section>
    );
}

export default PostArticle;
