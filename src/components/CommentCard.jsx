import { useContext, useState } from "react";
import { formatDateTime } from "../utils/text";
import { deleteComment, updateCommentVotes } from "../utils/api";
import VoteCounter from "./VoteCounter";
import { UserContext } from "../contexts/UserContext";

function CommentCard({ comment }) {
    const { comment_id, author, created_at, body, votes } = comment;

    const [deleted, setDeleted] = useState("");
    const [disabledButton, setDisabledButton] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const { user } = useContext(UserContext);

    function deleteCommentHandler(event) {
        setDeleted("Awaiting confirmation");
        setDisabledButton(true);
        setErrorMsg("");

        deleteComment(comment_id)
            .then(() => {
                setDeleted("This comment has been deleted");
            })
            .catch((error) => {
                setDeleted("");
                setErrorMsg("Failed to delete");
                setDisabledButton(false);
            });
    }

    function renderDeleteButton() {
        if (author === user) {
            return (
                <div className="simple-flex-row">
                    <button
                        className="comment-delete-button"
                        disabled={disabledButton}
                        onClick={deleteCommentHandler}
                    >
                        Delete Comment
                    </button>
                    <div className="comment-delete-msg">{errorMsg}</div>
                </div>
            );
        }
    }

    if (deleted) {
        return (
            <section className="comment-card">
                <div>{deleted}</div>
            </section>
        );
    }

    return (
        <section className="comment-card">
            <div>
                {author} - {formatDateTime(created_at)}
            </div>
            <div className="comment-body">{body}</div>
            <VoteCounter
                subject_id={comment_id}
                votes={votes}
                voteUpdater={updateCommentVotes}
            />
            {renderDeleteButton()}
        </section>
    );
}

export default CommentCard;
