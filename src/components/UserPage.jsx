import { useContext, useState, useEffect } from "react";
import UserContent from "./UserContent";
import UserDetails from "./UserDetails";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";
import { UserContext } from "../contexts/UserContext";
import { getUser } from "../utils/api";

function UserPage() {
    const [userInfo, setUserInfo] = useState(null);
    const [errorOccured, setErrorOccured] = useState(null);

    const { user } = useContext(UserContext);

    useEffect(() => {
        getUser(user)
            .then((user) => {
                setUserInfo(user);
            })
            .catch((error) => {
                setErrorOccured(error);
            });
    }, []);

    if (errorOccured) {
        return <ErrorPage error={errorOccured} />;
    }

    if (!userInfo) {
        return <Loading />;
    }

    return (
        <section>
            <UserDetails userInfo={userInfo} />
            <UserContent username={user} setErrorOccured={setErrorOccured}/>
        </section>
    );
}

export default UserPage;
