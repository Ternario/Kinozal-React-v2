import SideBarFilter from "./SideBarFilter/SideBarFilter";
import Items from "../Items/Items";
import "./ItemsWrapper.scss";

const ItemsWrapper = ({ getData, getList, title }) => {
    return (
        <div className="itemsWrapper">
            <div className="itemsWrapper-sidebar">
                <SideBarFilter getList={getList} />
            </div>

            <div className="itemsWrapper-content">
                <h2 className="label">{title}</h2>
                <div className="itemsWrapper-items">
                    <Items getData={getData} title={title} />
                </div>
            </div>
        </div>
    );
};

export default ItemsWrapper;
