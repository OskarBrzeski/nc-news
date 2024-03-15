import { useContext, useState } from "react";
import { getUser } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function LogIn() {
    const [username, setUsername] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [disabledButton, setDisabledButton] = useState(false);

    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    function onChange(event) {
        setUsername(event.target.value);
    }

    function onSubmit(event) {
        event.preventDefault();
        
        setErrorMsg("");
        setDisabledButton(true);

        getUser(username)
            .then(() => {
                setUser(username);

                navigate(`/user`);
            })
            .catch((error) => {
                if (error.response) {
                    setErrorMsg(`${username} does not exist`);
                }
                console.log(error);
            })
            .finally(() => {
                setDisabledButton(false);
            });
    }

    return (
        <form className="sign-in-form" onSubmit={onSubmit}>
            <label htmlFor="username">
                <h2>Sign in with your Username</h2>
            </label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={onChange}
            />

            <button disabled={disabledButton} type="submit">
                Sign in
            </button>

            <p>{errorMsg}</p>
        </form>
    );
}

export default LogIn;
