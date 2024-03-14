import { useContext, useState } from "react";
import { postComment } from "../utils/api";
import { UserContext } from "../contexts/UserContext";

function AddComment({ article_id, setComments }) {
    const [inputComment, setInputComment] = useState("");
    const [inputStatus, setInputStatus] = useState(null);
    const [disabledButton, setDisabledButton] = useState(false);

    const { user } = useContext(UserContext);

    function handleChange(event) {
        setInputComment(event.target.value);
    }

    function handleBlur(event) {
        if (inputComment.length === 0) {
            event.target.classList.add("add-comment-form-empty");
        } else {
            event.target.classList.remove("add-comment-form-empty");
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        setDisabledButton(true);
        setInputStatus("loading");

        if (inputComment.length === 0) {
            setInputStatus("empty");
            setDisabledButton(false);
            return;
        }

        postComment(article_id, user, inputComment)
            .then((comment) => {
                setComments((comments) => {
                    const newComments = [comment, ...comments];
                    return newComments;
                });
                setInputStatus(null);
                setInputComment("");
            })
            .catch((error) => {
                console.log(error);
                setInputStatus("error");
            })
            .finally(() => {
                setDisabledButton(false);
            });
    }

    function renderStatusMessage() {
        if (inputStatus === null) {
            return null;
        } else if (inputStatus === "loading") {
            return <span>Waiting for response from server</span>;
        } else if (inputStatus === "empty") {
            return <span>Cannot post empty comment</span>;
        } else if (inputStatus === "error") {
            return <span>An error occured and your comment was not posted</span>;
        } else {
            return <span>Unknown error occured</span>;
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="add-comment-form">
                <label htmlFor="comment">Enter comment</label>
                <textarea
                    id="comment"
                    name="comment"
                    rows="3"
                    value={inputComment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <button disabled={disabledButton} type="submit">
                    Add Comment
                </button>
            </form>
            {renderStatusMessage()}
        </>
    );
}

export default AddComment;
