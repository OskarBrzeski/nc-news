import { shortenTitle } from "../utils/text";

function ArticleCard({ article }) {
    const { title, article_img_url } = article;

    return (
        <section className="article-card">
            <img src={article_img_url} alt={`article titled ${title}`} />
            <div>{shortenTitle(title)}</div>
        </section>
    );
}

export default ArticleCard;
