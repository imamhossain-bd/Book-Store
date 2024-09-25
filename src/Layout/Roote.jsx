import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";


const Roote = () => {
    return (
        <div>
            <NavBar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Roote;