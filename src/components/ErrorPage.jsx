function ErrorPage({ error }) {
    return (
        <section>
            <h2>{error.message}</h2>
            <p>{error.response.data.desc}</p>
        </section>
    );
}

export default ErrorPage;
