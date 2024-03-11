import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-moag.onrender.com/api" });

export function getArticles() {
    return api.get("/articles");
}
