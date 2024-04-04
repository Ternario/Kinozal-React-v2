import { useEffect, useState } from "react";

const SideBarFilterGenres = ({ getList, chengeFilter, getByGenres, toggleButton, getMovies, resetButton }) => {
    const [genresList, setGenresList] = useState(null);

    const [activeButton, setActiveButton] = useState("All");

    useEffect(() => {
        getList().then((state) => {
            setGenresList({
                state,
            });
        });
    }, [getList]);

    useEffect(() => {
        if (resetButton !== "All") {
            setActiveButton("All");
        }
    }, [resetButton]);

    const renderGenresItems = (stateArray) => {
        return stateArray.state.map(({ id, genre }) => {
            return (
                <div
                    key={id}
                    onClick={() => {
                        if (activeButton === genre) {
                            return;
                        }
                        toggleButton();
                        setActiveButton(genre);
                        chengeFilter(getByGenres(id));
                    }}
                    className={activeButton === genre ? "wrapper-content active" : "wrapper-content"}
                >
                    {genre}
                </div>
            );
        });
    };

    if (!genresList) {
        return <div>loading...</div>;
    }

    const genresItems = renderGenresItems(genresList);

    return (
        <div className="wrapper">
            <div
                onClick={() => {
                    if (activeButton === "All") {
                        return;
                    }
                    setActiveButton("All");
                    chengeFilter(getMovies);
                }}
                className={activeButton === "All" ? "wrapper-content active" : "wrapper-content"}
            >
                All
            </div>
            {genresItems}
        </div>
    );
};

export default SideBarFilterGenres;
