import SearchItems from "./Items/SearchItems";
import Items from "../../reusableComponents/Items/Items";
import { useEffect, useState } from "react";

import SideBarFilter from "./SideBarFilter/SideBarFilter";

const SearchPage = ({ service, searchQuery }) => {
    const [searchResult, setSearchResult] = useState(() => service.getCustomSearch(searchQuery));
    const [toggleComponent, setToggleComponent] = useState("Multiple");

    useEffect(() => {
        switch (toggleComponent) {
            case "Multiple":
                return setSearchResult(() => service.getCustomSearch(searchQuery));
            case "Only Movies":
                return setSearchResult(() => service.getCustomMoviesSearch(searchQuery));
            case "Only Serials":
                return setSearchResult(() => service.getCustomTvSearch(searchQuery));
            case "Only Person":
                return setSearchResult(() => service.getCustomPersonSearch(searchQuery));
            default:
                return console.error();
        }
    }, [searchQuery, toggleComponent, service]);

    const chengeFilter = (query, name) => {
        setToggleComponent(name);
        setSearchResult(() => query(searchQuery));
    };

    return (
        <div className="itemsWrapper">
            <SideBarFilter service={service} chengeFilter={chengeFilter} />
            <div className="itemsWrapper-content">
                <h2 className="itemsWrapper-content__label">Search by "{searchQuery}" </h2>
                <div className="itemsWrapper-content__items">
                    {toggleComponent === "Only Person" ? (
                        <SearchItems getData={searchResult} />
                    ) : (
                        <Items getData={searchResult} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
