import SideBarFilter from "./SideBarFilter/SideBarFilter";
import Items from "../../reusableComponents/Items/Items";
import "./ItemsWrapper.scss";
import { useState } from "react";

const MoviesPage = ({ service }) => {
    const [movieList, setMovieList] = useState(service.getMovies);

    const chengeFilter = (movieList) => {
        setMovieList(movieList);
    };

    return (
        <div className="itemsWrapper">
            <SideBarFilter service={service} chengeFilter={chengeFilter} />

            <div className="itemsWrapper-content">
                <h2 className="itemsWrapper-content__label">Movies</h2>
                <div className="itemsWrapper-content__items">
                    <Items getData={movieList} />
                </div>
            </div>
        </div>
    );
};

export default MoviesPage;
