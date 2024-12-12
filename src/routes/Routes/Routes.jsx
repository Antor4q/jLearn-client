import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../pages/Home/Home/Home";
import Lessons from "../../pages/Home/UserPages/Lessons/Lessons";
import Tutorials from "../../pages/Home/UserPages/Tutorials/Tutorials";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/lessons",
                element: <Lessons/>
            },
            {
                path: "/tutorials",
                element: <Tutorials/>
            }
        ]
    },
    

])