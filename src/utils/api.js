import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-moag.onrender.com/api" });

export function getTopics() {
    return api.get("/topics").then((response) => {
        return response.data.topics;
    });
}

export function getArticles(searchParams) {
    return api.get("/articles", { params: searchParams }).then((response) => {
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

export function updateCommentVotes(comment_id, voteChange) {
    return api
        .patch(`/comments/${comment_id}`, { inc_votes: voteChange })
        .then((response) => {
            return response.data.comment.votes;
        });
}

export function postArticle(author, title, body, topic, article_img_url = "") {
    return api
        .post("/articles", {
            author,
            title,
            body,
            topic,
            article_img_url,
        })
        .then((response) => {
            return response.data.article;
        });
}

export function postComment(article_id, username, body) {
    return api
        .post(`/articles/${article_id}/comments`, { username, body })
        .then((response) => {
            return response.data.comment;
        });
}

export function deleteComment(comment_id) {
    return api.delete(`/comments/${comment_id}`);
}

export function getUser(username) {
    return api.get(`/users/${username}`).then((response) => {
        return response.data.user;
    });
}
