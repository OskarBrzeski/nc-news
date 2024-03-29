import { Routes, Route } from "react-router-dom";
import "./App.css";
import ArticlesQuery from "./components/ArticlesQuery";
import Header from "./components/Header";
import ArticlePage from "./components/ArticlePage";
import TopicsPage from "./components/TopicsPage";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import PostArticle from "./components/PostArticle";
import LogIn from "./components/LogIn";

const pathNotExistError = {
    message: "Request failed with status code 404",
    response: {
        data: {
            desc: "Invalid URL given",
        },
    },
};

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/articles" element={<ArticlesQuery />} />
                    <Route
                        path="/articles/:article_id"
                        element={<ArticlePage />}
                    />
                    <Route path="/topics" element={<TopicsPage />} />
                    <Route path="/sign-in" element={<LogIn />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/create-article" element={<PostArticle />} />
                    <Route
                        path="*"
                        element={<ErrorPage error={pathNotExistError} />}
                    />
                </Routes>
            </main>
        </>
    );
}

export default App;
