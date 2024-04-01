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

    return (
        <div className="itemsWrapper-sidebar">
            <div className="itemsWrapper-sidebar__filter">
                <h3 className="label">Filter</h3>
                <div className="wrapper">
                    <div
                        onClick={() => {
                            chengeFilter(getUpcomingMovies);
                        }}
                        className="wrapper-content"
                    >
                        Upcoming
                    </div>
                    <div
                        onClick={() => {
                            chengeFilter(getNowPlayingMovies);
                        }}
                        className="wrapper-content"
                    >
                        Now Playing
                    </div>
                    <div
                        onClick={() => {
                            chengeFilter(getPopularMovies);
                        }}
                        className="wrapper-content"
                    >
                        Popular
                    </div>
                    <div
                        onClick={() => {
                            chengeFilter(getTopRated);
                        }}
                        className="wrapper-content"
                    >
                        Top Rated
                    </div>
                    <div
                        onClick={() => {
                            chengeFilter(getMovies);
                        }}
                        className="wrapper-content"
                    >
                        Clear Filter
                    </div>
                </div>
            </div>

            <div className="itemsWrapper-sidebar__genres">
                <h3 className="label">Genres</h3>
                <SideBarFilterGenres
                    getList={getMoviesList}
                    chengeFilter={chengeFilter}
                    getByGenres={getMoviesByGenres}
                />
            </div>
        </div>
    );
};

export default SideBarFilter;
