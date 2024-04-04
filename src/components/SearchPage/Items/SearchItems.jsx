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
        console.log(stateArray);
        return stateArray.state.map(({ id, photo, name, popularity }) => {
            return (
                <div key={id} className="section">
                    <div className="section-poster">
                        <img src={`https://image.tmdb.org/t/p/original/${photo}`} alt="poster" />
                    </div>
                    <div className="section-title">
                        <div className="section-title__name">{name}</div>
                        <div className="section-title__date">{popularity}</div>
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
