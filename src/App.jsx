import { Routes, Route } from "react-router-dom";
import "./App.css";
import ArticlesQuery from "./components/ArticlesQuery";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/articles" element={<ArticlesQuery />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
