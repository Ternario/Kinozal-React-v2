import search from "../../../img/icons-search.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchPanel = ({ showSerchItem }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [query, setQuery] = useState("");

    const searchItem = (e) => {
        setQuery(e.target.value);
    };

    const functionTransfer = (e) => {
        e.preventDefault();

        if (query === "") {
            return;
        }

        showSerchItem(query);

        if (location.pathname === `/search/${query}`) {
            setQuery("");
            return;
        }

        navigate(`search/${query}`);
        setQuery("");
    };

    return (
        <div className="header-navbar__searchPanel">
            <form className="searchForm" onSubmit={functionTransfer}>
                <input
                    type="search"
                    className="searchForm-input"
                    placeholder="Site search"
                    onChange={searchItem}
                    value={query}
                />
                <button type="submit" className="searchForm-btn">
                    <img src={search} alt="search" className="searchBtn-image" />
                </button>
            </form>
        </div>
    );
};

export default SearchPanel;
