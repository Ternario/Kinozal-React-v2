import React from "react";
import News from "./News/News";

const MovieNews = ({ movieNews }) => {
    const elements = movieNews.map(({ id, image, title, content }) => {
        return <News key={id} image={image} title={title} content={content} />;
    });

    return (
        <div className="main-movieNews">
            <div className="main-movieNews__label">
                <h2 className="label">Movie news</h2>
            </div>
            <div className="main-movieNews__wrapper">{elements}</div>
        </div>
    );
};

export default MovieNews;
