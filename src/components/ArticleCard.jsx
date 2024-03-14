import { Link } from "react-router-dom";
import { formatDateTime, shortenTitle } from "../utils/text";

function ArticleCard({ article }) {
    const {
        article_id,
        title,
        article_img_url,
        author,
        comment_count,
        created_at,
        votes,
    } = article;

    return (
        <Link to={`/articles/${article_id}`}>
            <section className="article-card">
                <img src={article_img_url} alt={`article titled ${title}`} />
                <h2 className="article-card-title">{shortenTitle(title)}</h2>
                <p className="article-card-left">
                    {formatDateTime(created_at)}
                </p>
                <div className="horizontal-text">
                    <p className="horizontal-left">{author}</p>
                    <p className="horizontal-right">
                        {votes} votes | {comment_count} comments
                    </p>
                </div>
            </section>
        </Link>
    );
}

export default ArticleCard;
