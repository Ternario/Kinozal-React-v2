import "./CommonPage.scss";
import Items from "../../reusableComponents/Items/Items";
import MovieNews from "./MovieNews/MovieNews";
import DataNews from "../../localData/dataNews.json";
import News from "../../localData/movieNews.json";
import RatingMovie from "../../localData/ratingMovie.json";
import SideBar from "./SideBar/SideBar";
import { useState } from "react";

const CommonPage = ({ service }) => {
    const [state, setState] = useState({
        upcoming: service.getUpcomingMovies(),
        topRated: service.getTopRated(),
    });

    return (
        <div className="container">
            <SideBar dataNews={DataNews} ratingMovie={RatingMovie} />
            <div className="main">
                <div className="sectionWrapper">
                    <div className="sectionWrapper-label">
                        <h2 className="label-new">Upcoming</h2>
                    </div>
                    <div className="sectionWrapper-items">
                        <Items getData={state.upcoming} />
                    </div>
                </div>

                <div className="sectionWrapper">
                    <div className="sectionWrapper-label">
                        <h2 className="label-top">TOP Rated</h2>
                    </div>
                    <div className="sectionWrapper-items">
                        <Items getData={state.topRated} />
                    </div>
                </div>

                <MovieNews movieNews={News} />
            </div>
        </div>
    );
};

export default CommonPage;
