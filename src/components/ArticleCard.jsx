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
                <div className="article-card-title">{shortenTitle(title)}</div>
                <div className="article-card-left">
                    {formatDateTime(created_at)}
                </div>
                <div className="horizontal-text">
                    <div className="horizontal-left">{author}</div>
                    <div className="horizontal-right">
                        {votes} votes | {comment_count} comments
                    </div>
                </div>
            </section>
        </Link>
    );
}

export default ArticleCard;
