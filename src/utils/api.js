import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-moag.onrender.com/api" });

export function getArticles() {
    return api.get("/articles").then((response) => {
        return response.data.articles;
    });
}

export function getArticleById(article_id) {
    return api.get(`/articles/${article_id}`).then((response) => {
        return response.data.article;
    });
}

export function getCommentsByArticleId(article_id) {
    return api.get(`/articles/${article_id}/comments`).then((response) => {
        return response.data.comments;
    });
}

export function updateArticleVotes(article_id, voteChange) {
    return api
        .patch(`/articles/${article_id}`, { inc_votes: voteChange })
        .then((response) => {
            return response.data.article.votes;
        });
}
