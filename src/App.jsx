import { Routes, Route } from "react-router-dom";
import "./App.css";
import ArticlesQuery from "./components/ArticlesQuery";
import Header from "./components/Header";
import ArticlePage from "./components/ArticlePage";
import TopicsPage from "./components/TopicsPage";

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/articles" element={<ArticlesQuery />} />
                    <Route
                        path="/articles/:article_id"
                        element={<ArticlePage />}
                    />
                    <Route path="/topics" element={<TopicsPage />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
