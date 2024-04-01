import SideBarFilterGenres from "../../../reusableComponents/SideBarFilterGenres/SideBarFilterGenres";

const SideBarFilter = ({ service, chengeFilter }) => {
    const {
        getSerials,
        getAiringTodaySerials,
        getOnTheAirSerials,
        getPopularSerials,
        getTopRatedSerials,
        getMoviesList,
        getSerialsByGenres,
    } = service;

    return (
        <div className="itemsWrapper-sidebar">
            <div className="itemsWrapper-sidebar__filter">
                <h3 className="label">Filter</h3>
                <div className="wrapper">
                    <div
                        onClick={() => {
                            chengeFilter(getAiringTodaySerials);
                        }}
                        className="wrapper-content"
                    >
                        Airing Today
                    </div>
                    <div
                        onClick={() => {
                            chengeFilter(getOnTheAirSerials);
                        }}
                        className="wrapper-content"
                    >
                        On The Air
                    </div>
                    <div
                        onClick={() => {
                            chengeFilter(getPopularSerials);
                        }}
                        className="wrapper-content"
                    >
                        Popular
                    </div>
                    <div
                        onClick={() => {
                            chengeFilter(getTopRatedSerials);
                        }}
                        className="wrapper-content"
                    >
                        Top Rated
                    </div>
                    <div
                        onClick={() => {
                            chengeFilter(getSerials);
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
                    getByGenres={getSerialsByGenres}
                />
            </div>
        </div>
    );
};

export default SideBarFilter;
