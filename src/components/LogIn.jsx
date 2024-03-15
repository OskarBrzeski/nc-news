import { useContext, useState } from "react";
import { getUser } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function LogIn() {
    const [username, setUsername] = useState("");

    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    function onChange(event) {
        setUsername(event.target.value);
    }

    function onSubmit(event) {
        event.preventDefault();

        getUser(username)
            .then(() => {
                setUser(username);

                navigate(`/user`);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <form className="sign-in-form" onSubmit={onSubmit}>
            <label htmlFor="username"><h2>Sign in with your Username</h2></label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={onChange}
            />

            <button type="submit">Sign in</button>
        </form>
    );
}

export default LogIn;
