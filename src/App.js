import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./App.scss";
import Main from "./components/Main/Main";
import CommonPage from "./components/CommonPage/CommonPage";
import ItemsWrapper from "./reusableComponents/ItemsWrapper/ItemsWrapper";

import MoviesData from "./service/Service";

function App() {
    const service = new MoviesData();

    const movieFilterList = [
        { id: "Upcoming", title: "Upcoming" },
        { id: "NowPlaying", title: "Now Playing" },
        { id: "Popualr", title: "Popular" },
        { id: "TopRated", title: "Top Rated" },
    ];

    const serialsFilterList = [
        { id: "AiringToday", title: "Airing Today" },
        { id: "OnTheAir", title: "On The Air" },
        { id: "Popualr", title: "Popular" },
        { id: "TopRated", title: "Top Rated" },
    ];

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route
                            index
                            element={
                                <CommonPage
                                    getUpcomingMovies={service.getUpcomingMovies}
                                    getTopRated={service.getTopRated}
                                />
                            }
                        />
                        <Route
                            path="Movies"
                            element={
                                <ItemsWrapper
                                    service={service}
                                    filterList={movieFilterList}
                                    getData={service.getMovies}
                                    getList={service.getMoviesList}
                                    title={"Movies"}
                                />
                            }
                        />
                        <Route
                            path="Serials"
                            element={
                                <ItemsWrapper
                                    filterList={serialsFilterList}
                                    getData={service.getSerials}
                                    getList={service.getSerialsList}
                                    title={"Serials"}
                                />
                            }
                        />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
