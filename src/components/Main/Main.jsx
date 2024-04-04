import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = ({ showSerchItem }) => {
    return (
        <>
            <Header showSerchItem={showSerchItem} />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;
