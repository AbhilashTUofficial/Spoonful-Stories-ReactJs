import { Outlet } from "react-router-dom";
import TopBar from "../TopBar";

const Layout = () => {
    return (
        <>
            <TopBar />  {/* This remains persistent */}
            <Outlet />  {/* Page content changes here */}
        </>
    );
};

export default Layout;
