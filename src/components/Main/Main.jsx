import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = ({ searchItem, showSerchItem }) => {
    return (
        <>
            <Header searchItem={searchItem} showSerchItem={showSerchItem} />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;
