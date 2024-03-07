import SideBarFilter from "./SideBarFilter/SideBarFilter";
import Items from "../Items/Items";
import "./ItemsWrapper.scss";

const ItemsWrapper = ({ filterList, getData, getList, title }) => {
    return (
        <div className="itemsWrapper">
            <SideBarFilter filterList={filterList} getList={getList} />

            <div className="itemsWrapper-content">
                <h2 className="itemsWrapper-content__label">{title}</h2>
                <div className="itemsWrapper-content__items">
                    <Items getData={getData} title={title} />
                </div>
            </div>
        </div>
    );
};

export default ItemsWrapper;
