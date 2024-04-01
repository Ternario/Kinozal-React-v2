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
                <h3 className="label">Search</h3>
                <div className="wrapper">
                    <div
                        onClick={() => {
                            chengeFilter(getAiringTodaySerials);
                        }}
                        className="wrapper-content"
                    >
                        Multiple
                    </div>
                    <div
                        onClick={() => {
                            chengeFilter(getOnTheAirSerials);
                        }}
                        className="wrapper-content"
                    >
                        Only Movies
                    </div>
                    <div
                        onClick={() => {
                            chengeFilter(getPopularSerials);
                        }}
                        className="wrapper-content"
                    >
                        Only Serials
                    </div>
                    <div
                        onClick={() => {
                            chengeFilter(getTopRatedSerials);
                        }}
                        className="wrapper-content"
                    >
                        Only Person
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
        </div>
    );
};

export default SideBarFilter;
