import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function UserDetails({ userInfo }) {
    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    function signOut() {
        setUser(null);
        navigate("/");
    }

    return (
        <section className="user-details">
            <img src={userInfo.avatar_url} alt="user profile picture" />
            <div className="user-details-text">
                <h2>{userInfo.username}</h2>
                <h3>{userInfo.name}</h3>
                <button onClick={signOut}>Sign out</button>
            </div>
        </section>
    );
}

export default UserDetails;
