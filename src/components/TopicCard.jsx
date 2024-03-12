import { Link } from "react-router-dom";

function TopicCard({ topic }) {
    const { slug, description } = topic;

    return (
        <section className="topic-card">
            <Link to={`/articles?topic=${slug}`}>
                <h2>{slug}</h2>
            </Link>
            <p>{description}</p>
        </section>
    );
}

export default TopicCard;
