import { Link } from "react-router-dom";
import "./Header.scss";
import SearchPanel from "./SearchPanel/SearchPanel";

const Header = ({ searchItem, showSerchItem }) => {
    return (
        <div className="header">
            <div className="header-logo">
                <div className="container-logo">
                    <div className="container-label">KinoZal</div>
                    <div className="container-description">Find your movie</div>
                </div>
            </div>
            <div className="header-navbar">
                <div className="header-navbar__btn">
                    <div className="btn-item"></div>
                    <div className="btn-item"></div>
                    <div className="btn-item"></div>
                </div>
                <div className="header-navbar__menu">
                    <nav className="menu-item">
                        <Link to="/" className="itemMenu">
                            Main Menu
                        </Link>
                        <Link to="Movies" className="itemMenu">
                            Movies
                        </Link>
                        <Link to="Serials" className="itemMenu">
                            Serials
                        </Link>
                        <Link to="Watchlater" className="itemMenu">
                            Watch Later
                        </Link>
                    </nav>
                </div>
                <SearchPanel searchItem={searchItem} showSerchItem={showSerchItem} />
                <div className="header-navbar__info">
                    <div className="info-item">
                        <div className="itemInfo">Sign Up</div>
                        <div className="itemInfo">Sign In</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
