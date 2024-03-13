function ErrorPage({ error }) {
    return (
        <section>
            <h2>{error.message}</h2>
            <p>{error.response ? error.response.data.desc : null}</p>
        </section>
    );
}

export default ErrorPage;
