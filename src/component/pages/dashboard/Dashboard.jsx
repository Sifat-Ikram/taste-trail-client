import { Outlet } from "react-router-dom";
import NavbarSecond from "../../shared/navbarSecond/NavbarSecond";
import Footer from "../../shared/footer/Footer";


const Dashboard = () => {
    return (
        <div>
            <NavbarSecond />
            <div className="w-11/12 mx-auto my-10 min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;