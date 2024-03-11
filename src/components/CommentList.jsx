import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentCard from "./CommentCard";

function CommentList({ article_id }) {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        getCommentsByArticleId(article_id)
            .then(({ data: { comments } }) => {
                setComments(comments);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (comments === null) {
        return <p>Loading...</p>;
    }

    return (
        <ul className="comment-list">
            {comments.map((comment) => {
                return (
                    <li key={comment.comment_id}>
                        <CommentCard comment={comment} />
                    </li>
                );
            })}
        </ul>
    );
}

export default CommentList;
