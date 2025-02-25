import { Outlet } from "react-router-dom";
import TopBar from "../TopBar";
import Footer from "../Footer";

const Layout = () => {
    return (
        <>
            <TopBar />  {/* This remains persistent */}
            <Outlet />  {/* Page content changes here */}
            <Footer />
        </>
    );
};

export default Layout;
