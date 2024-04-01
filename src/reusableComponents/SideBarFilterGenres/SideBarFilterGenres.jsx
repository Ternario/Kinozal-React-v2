import { useEffect, useState } from "react";

const SideBarFilterGenres = ({ getList, chengeFilter, getByGenres }) => {
    const [state, setState] = useState(null);

    useEffect(() => {
        getList().then((state) => {
            setState({
                state,
            });
        });
    }, [getList]);

    const renderGenresItems = (stateArray) => {
        return stateArray.state.map(({ id, genre }) => {
            return (
                <div
                    key={id}
                    onClick={() => {
                        chengeFilter(getByGenres(id));
                    }}
                    className="wrapper-content"
                >
                    {genre}
                </div>
            );
        });
    };

    if (!state) {
        return <div>loading...</div>;
    }

    const genresItems = renderGenresItems(state);

    return <div className="wrapper">{genresItems}</div>;
};

export default SideBarFilterGenres;
