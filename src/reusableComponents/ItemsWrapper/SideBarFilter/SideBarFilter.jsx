import { useEffect, useState } from "react";

const SideBarFilter = ({ filterList, getList }) => {
    const [state, setState] = useState(null);

    useEffect(() => {
        getList().then((state) => {
            setState({
                state,
            });
        });
    }, [getList]);

    const renderGenresItems = (arr) => {
        return arr.state.map(({ id, genre }) => {
            return (
                <div key={id} className="wrapper-content">
                    {genre}
                </div>
            );
        });
    };

    const renderFilterItems = (arr) => {
        return arr.map(({ id, title }) => {
            return (
                <div key={id} className="wrapper-content">
                    {title}
                </div>
            );
        });
    };

    if (!state) {
        return <div>loading...</div>;
    }

    const listItems = renderFilterItems(filterList);
    const genresItems = renderGenresItems(state);

    return (
        <div className="itemsWrapper-sidebar">
            <div className="itemsWrapper-sidebar__filter">
                <h3 className="label">Filter</h3>
                <div className="wrapper">{listItems}</div>
            </div>

            <div className="itemsWrapper-sidebar__genres">
                <h3 className="label">Genres</h3>
                <div className="wrapper">{genresItems}</div>
            </div>
        </div>
    );
};

export default SideBarFilter;
