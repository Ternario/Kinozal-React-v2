import { useState } from "react";
const SideBarFilter = ({ service, chengeFilter }) => {
    const { getCustomSearch, getCustomMoviesSearch, getCustomTvSearch, getCustomPersonSearch } = service;

    const buttonArray = [
        {
            name: "Multiple",
            get: getCustomSearch,
        },
        {
            name: "Only Movies",
            get: getCustomMoviesSearch,
        },
        {
            name: "Only Serials",
            get: getCustomTvSearch,
        },
        {
            name: "Only Person",
            get: getCustomPersonSearch,
        },
    ];

    const [actiactiveButtonve, setActiveButton] = useState(buttonArray[0].name);

    const items = buttonArray.map(({ name, get }) => {
        return (
            <div
                key={name}
                onClick={() => {
                    if (actiactiveButtonve === name) {
                        return;
                    }
                    setActiveButton(name);
                    chengeFilter(get, name);
                }}
                className={actiactiveButtonve === name ? "wrapper-content active" : "wrapper-content"}
            >
                {name}
            </div>
        );
    });

    return (
        <div className="itemsWrapper-sidebar">
            <div className="itemsWrapper-sidebar__filter">
                <h3 className="label">Filter</h3>
                <div className="wrapper">{items}</div>
            </div>
        </div>
    );
};

export default SideBarFilter;
