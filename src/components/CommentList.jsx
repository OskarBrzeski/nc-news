import CommentCard from "./CommentCard";
import Loading from "./Loading";

function CommentList({ comments }) {
    if (comments === null) {
        return <Loading />;
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
