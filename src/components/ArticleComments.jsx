import CommentList from "./CommentList";

function ArticleComments({ article_id }) {
    return (
        <>
            <div className="comment-divider">Comments</div>
            <CommentList article_id={article_id} />
        </>
    );
}

export default ArticleComments;
