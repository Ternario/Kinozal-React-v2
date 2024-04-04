import { useState } from "react";
import SideBarFilterGenres from "../../../reusableComponents/SideBarFilterGenres/SideBarFilterGenres";

const SideBarFilter = ({ service, chengeFilter }) => {
    const {
        getMovies,
        getUpcomingMovies,
        getTopRated,
        getNowPlayingMovies,
        getPopularMovies,
        getMoviesList,
        getMoviesByGenres,
    } = service;

    const buttonArray = [
        {
            name: "All",
            get: getMovies,
        },
        {
            name: "Popular",
            get: getPopularMovies,
        },
        {
            name: "Upcoming",
            get: getUpcomingMovies,
        },
        {
            name: "Now Playing",
            get: getNowPlayingMovies,
        },
        {
            name: "Top Rated",
            get: getTopRated,
        },
    ];

    const [actiactiveButtonve, setActiveButton] = useState(buttonArray[0].name);

    const toggleButton = () => {
        if (actiactiveButtonve === buttonArray[0].name) {
            return;
        }
        setActiveButton(buttonArray[0].name);
    };

    const items = buttonArray.map(({ name, get }) => {
        return (
            <div
                key={name}
                onClick={() => {
                    if (actiactiveButtonve === name) {
                        return;
                    }
                    setActiveButton(name);
                    chengeFilter(get);
                }}
                className={actiactiveButtonve === name ? "wrapper-content active" : "wrapper-content"}
            >
                {name}
            </div>
        );
    });

    return (
        <div className="itemsWrapper-sidebar">
            <div className="itemsWrapper-sidebar__filter">
                <h3 className="label">Filter</h3>
                <div className="wrapper">{items}</div>
            </div>
            <div className="itemsWrapper-sidebar__genres">
                <h3 className="label">Genres</h3>
                <SideBarFilterGenres
                    getList={getMoviesList}
                    chengeFilter={chengeFilter}
                    getByGenres={getMoviesByGenres}
                    toggleButton={toggleButton}
                    resetButton={actiactiveButtonve}
                    getMovies={getMovies}
                />
            </div>
        </div>
    );
};

export default SideBarFilter;
