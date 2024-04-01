import { useEffect, useState } from "react";

import "./Items.scss";

const Items = ({ getData }) => {
    const [state, setState] = useState(null);

    useEffect(() => {
        getData.then((state) => {
            setState({
                state,
            });
        });
    }, [getData]);

    const renderItems = (stateArray) => {
        return stateArray.state.map(({ id, poster, title, releaseDate }) => {
            const date = releaseDate.substr(0, 4);

            return (
                <div key={id} className="section">
                    <div className="section-poster">
                        <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt="poster" />
                    </div>
                    <div className="section-title">
                        <div className="section-title__name">{title}</div>
                        <div className="section-title__date">{date}</div>
                    </div>
                </div>
            );
        });
    };

    if (!state) {
        return <div>loading...</div>;
    }

    const items = renderItems(state);

    return <>{items}</>;
};

export default Items;
