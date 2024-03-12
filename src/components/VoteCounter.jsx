import { useState } from "react";

function VoteCounter({ article_id, votes, voteUpdater }) {
    const [currentVotes, setCurrentVotes] = useState(votes);
    const [responseMsg, setResponseMsg] = useState(null);
    const [disableButtons, setDisableButtons] = useState(false);

    function updateVote(voteChange) {
        setDisableButtons(true);
        setResponseMsg("Waiting for confirmation");
        setCurrentVotes((currVotes) => currVotes + voteChange);

        voteUpdater(article_id, voteChange)
            .then((serverVotes) => {
                setResponseMsg("Your vote has been counted");
                setCurrentVotes(() => serverVotes);
            })
            .catch((error) => {
                setResponseMsg("Your vote was lost in transit");
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
