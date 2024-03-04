import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./App.scss";
import Main from "./components/Main/Main";
import CommonPage from "./components/CommonPage/CommonPage";
import ItemsWrapper from "./reusableComponents/ItemsWrapper/ItemsWrapper";

import MoviesData from "./service/Service";

function App() {
    const service = new MoviesData();

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
