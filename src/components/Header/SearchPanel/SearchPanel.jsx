import search from "../../../img/icons-search.png";
import { useNavigate } from "react-router-dom";

const SearchPanel = ({ searchItem, showSerchItem }) => {
    let navigate = useNavigate();

    return (
        <div className="sideBar-searchPanel">
            <form className="wrapper-form" onSubmit={showSerchItem}>
                <input
                    type="search"
                    className="inputSearch"
                    placeholder="Site search"
                    onChange={searchItem}
                    // value={state}
                />
                <button
                    type="submit"
                    className="searchBtn"
                    onClick={() => {
                        navigate("Search");
                    }}
                >
                    <img src={search} alt="search" className="searchBtn-image" />
                </button>
            </form>
        </div>
    );
};

export default SearchPanel;
