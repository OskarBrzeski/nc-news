import { Link } from "react-router-dom";
import { shortenTitle } from "../utils/text";

function ArticleCard({ article }) {
    const { article_id, title, article_img_url } = article;

    return (
        <Link to={`/articles/${article_id}`}>
            <section className="article-card">
                <img src={article_img_url} alt={`article titled ${title}`} />
                <div>{shortenTitle(title)}</div>
            </section>
        </Link>
    );
}

export default ArticleCard;
