function UserDetails({ userInfo }) {
    return (
        <section className="user-details">
            <img src={userInfo.avatar_url} alt="user profile picture" />
            <div className="user-details-text">
                <h2>{userInfo.username}</h2>
                <h3>{userInfo.name}</h3>
            </div>
        </section>
    );
}

export default UserDetails;
