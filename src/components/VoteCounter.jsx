import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

function VoteCounter({ subject_id, votes, voteUpdater }) {
    const [currentVotes, setCurrentVotes] = useState(votes);
    const [responseMsg, setResponseMsg] = useState(null);
    const [disableButtons, setDisableButtons] = useState(false);

    const { user } = useContext(UserContext);

    function updateVote(voteChange) {
        setDisableButtons(true);
        setResponseMsg(null);
        setCurrentVotes((currVotes) => currVotes + voteChange);

        voteUpdater(subject_id, voteChange)
            .then((serverVotes) => {
                setCurrentVotes(() => serverVotes);
            })
            .catch((error) => {
                setResponseMsg("Failed to vote");
                setCurrentVotes((currentVotes) => currentVotes - voteChange);
            })
            .finally(() => {
                setDisableButtons(false);
            });
    }

    function renderButtons() {
        if (user) {
            return (
                <>
                    <button
                        disabled={disableButtons}
                        onClick={() => updateVote(1)}
                    >
                        ⬆
                    </button>
                    <button
                        disabled={disableButtons}
                        onClick={() => updateVote(-1)}
                    >
                        ⬇
                    </button>
                </>
            );
        }
    }

    return (
        <section className="vote-block">
            <p>Votes: {currentVotes}</p>
            {renderButtons()}
            {responseMsg ? <div>{responseMsg}</div> : null}
        </section>
    );
}

export default VoteCounter;
