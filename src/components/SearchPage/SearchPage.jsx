import Items from "../../reusableComponents/Items/Items";
import "./ItemsWrapper.scss";
import { useState } from "react";

import SideBarFilter from "./SideBarFilter/SideBarFilter";

const SearchPage = ({ service, searchQuery }) => {
    const [serialsList, setSerialsList] = useState(service.getSerials);

    const chengeFilter = (serialsList) => {
        setSerialsList(serialsList);
    };

    return (
        <div className="itemsWrapper">
            <SideBarFilter service={service} chengeFilter={chengeFilter} />
            <div className="itemsWrapper-content">
                <h2 className="itemsWrapper-content__label">Search by "{searchQuery}" </h2>
                <div className="itemsWrapper-content__items">
                    <Items getData={serialsList} />
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
