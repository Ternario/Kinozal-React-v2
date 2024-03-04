import { useEffect, useState } from "react";

const SideBarFilter = ({ getList }) => {
    const [state, setState] = useState(null);

    useEffect(() => {
        getList().then((state) => {
            setState({
                state,
            });
        });
    }, [getList]);

    console.log(state);

    const renderItems = (arr) => {
        return arr.state.map(({ id, genre }) => {
            console.log(genre);
            return (
                <div key={id} className="sideBarFilter-genres__genre">
                    {genre}
                </div>
            );
        });
    };

    if (!state) {
        return <div>loading...</div>;
    }

    const items = renderItems(state);

    return (
        <div className="sideBarFilter">
            <div className="sideBarFilter-rating">
                <div>8-10</div>
                <div>6-8</div>
            </div>

            <div className="sideBarFilter-genres">{items}</div>
        </div>
    );
};

export default SideBarFilter;
