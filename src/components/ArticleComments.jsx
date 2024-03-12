import { getCommentsByArticleId } from "../utils/api";
import { useState, useEffect } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

function ArticleComments({ article_id }) {
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

    return (
        <>
            <div className="comment-divider">Comments</div>
            <AddComment article_id={article_id} />
            <CommentList article_id={article_id} comments={comments} />
        </>
    );
}

export default ArticleComments;
