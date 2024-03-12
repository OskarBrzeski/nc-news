import { useContext, useState } from "react";
import { postComment } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import CommentList from "./CommentList";

function AddComment({ article_id }) {
    const [inputComment, setInputComment] = useState("");
    const [inputStatus, setInputStatus] = useState(null);
    const [disabledButton, setDisabledButton] = useState(false);
    const [successfulComments, setSuccessfulComments] = useState([]);

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
                setSuccessfulComments((comments) => {
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
            return <div>Waiting for response from server</div>;
        } else if (inputStatus === "empty") {
            return <div>Cannot post empty comment</div>;
        } else if (inputStatus === "error") {
            return <div>An error occured and your comment was not posted</div>;
        } else {
            return <div>Unknown error occured</div>;
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="add-comment-form">
                <label htmlFor="comment">Enter comment</label>
                <textarea
                    name="comment"
                    rows="3"
                    value={inputComment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <button disabled={disabledButton} type="submit">
                    Sumbit
                </button>
            </form>
            {renderStatusMessage()}
            <CommentList comments={successfulComments}/>
        </>
    );
}

export default AddComment;
