import { formatDateTime } from "../utils/text";

function CommentCard({ comment }) {
    const { author, created_at, body, votes } = comment;

    return (
        <section className="comment-card">
            <div>{author} - {formatDateTime(created_at)}</div>
            <div className="comment-body">{body}</div>
            <div>Votes: {votes}</div>
        </section>
    );
}

export default CommentCard;
