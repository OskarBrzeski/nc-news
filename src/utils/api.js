import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-moag.onrender.com/api" });

export function getArticles() {
    return api.get("/articles");
}

export function getArticleById(article_id) {
    return api.get(`/articles/${article_id}`);
}
