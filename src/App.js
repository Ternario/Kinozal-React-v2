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

    const [state, setState] = useState({
        query: "",
        searchQuery: "",
    });

    const searchItem = (e) => {
        setState({
            query: e.target.value,
            // searchQuery: state.query,
        });
    };

    const showSerchItem = (e) => {
        e.preventDefault();
        console.log(state);

        setState({ searchQuery: "123" });
        console.log(state);

        if (state.searchQuery === "") {
            return;
        }

        // setState({ query: "" });
    };

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main searchItem={searchItem} showSerchItem={showSerchItem} />}>
                        <Route index element={<CommonPage service={service} />} />
                        <Route path="Movies" element={<MoviesPage service={service} />} />
                        <Route path="Serials" element={<SerialsPage service={service} />} />
                        <Route
                            path="Search"
                            element={<SearchPage service={service} searchQuery={state.searchQuery} />}
                        />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
