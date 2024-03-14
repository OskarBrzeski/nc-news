import { getCommentsByArticleId } from "../utils/api";
import { useState, useEffect } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import Loading from "./Loading";

function ArticleComments({ article_id, articleLoaded }) {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        getCommentsByArticleId(article_id)
            .then((comments) => {
                setComments(comments);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (comments === null) {
        return articleLoaded ? <Loading /> : null;
    }

    return (
        <>
            <h2 className="comment-divider">Comments</h2>
            <AddComment article_id={article_id} setComments={setComments} />
            <CommentList article_id={article_id} comments={comments} />
        </>
    );
}

export default ArticleComments;
