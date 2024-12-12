import { Outlet } from "react-router-dom";

import NavbarComponent from "../../shared/NavbarComponent/NavbarComponent";
import FooterComponent from "../../shared/FooterComponent/FooterComponent";




const Root = () => {
    return (
        <div>
            <NavbarComponent/>
             <div className="min-h-screen">
             <Outlet/>
             </div>
            <FooterComponent/>
        </div>
    );
};

export default Root;