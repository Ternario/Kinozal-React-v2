import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";
import "./App.css";
import "./App.scss";
import Main from "./components/Main/Main";
import CommonPage from "./components/CommonPage/CommonPage";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import SerialsPage from "./components/SerialsPage/SerialsPage";

import MoviesData from "./service/MoviesData";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
    const service = new MoviesData();

    const [query, setQuery] = useState("");

    const showSerchItem = (query) => {
        setQuery(query);
    };

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main showSerchItem={showSerchItem} />}>
                        <Route index element={<CommonPage service={service} />} />
                        <Route path="movies" element={<MoviesPage service={service} />} />
                        <Route path="serials" element={<SerialsPage service={service} />} />
                        <Route path="search/:query" element={<SearchPage service={service} searchQuery={query} />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
