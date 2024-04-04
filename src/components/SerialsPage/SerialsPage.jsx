import SideBarFilter from "./SideBarFilter/SideBarFilter";
import Items from "../../reusableComponents/Items/Items";
import "../../reusableStyleFiles/ItemsWrapper.scss";
import { useState } from "react";

const SerialsPage = ({ service }) => {
    const [serialsList, setSerialsList] = useState(service.getSerials);

    const chengeFilter = (serialsList) => {
        setSerialsList(serialsList);
    };

    return (
        <div className="itemsWrapper">
            <SideBarFilter service={service} chengeFilter={chengeFilter} />
            <div className="itemsWrapper-content">
                <h2 className="itemsWrapper-content__label">Serials</h2>
                <div className="itemsWrapper-content__items">
                    <Items getData={serialsList} />
                </div>
            </div>
        </div>
    );
};

export default SerialsPage;
