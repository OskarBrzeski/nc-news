import { useState } from "react";

function VoteCounter({ subject_id, votes, voteUpdater }) {
    const [currentVotes, setCurrentVotes] = useState(votes);
    const [responseMsg, setResponseMsg] = useState(null);
    const [disableButtons, setDisableButtons] = useState(false);

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

    return (
        <section className="vote-block">
            <div>Votes: {currentVotes}</div>
            <button disabled={disableButtons} onClick={() => updateVote(1)}>
                ⬆
            </button>
            <button disabled={disableButtons} onClick={() => updateVote(-1)}>
                ⬇
            </button>
            {responseMsg ? <div>{responseMsg}</div> : null}
        </section>
    );
}

export default VoteCounter;
