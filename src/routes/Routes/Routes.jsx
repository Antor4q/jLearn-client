import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../pages/Home/Home/Home";
import Lessons from "../../pages/Home/UserPages/Lessons/Lessons";
import Tutorials from "../../pages/Home/UserPages/Tutorials/Tutorials";
import LessonDetails from "../../pages/Home/UserPages/LessonDetails/LessonDetails";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import ManageLesson from "../../pages/Dashboard/ManageLesson/ManageLesson";
import ManageVocabulary from "../../pages/Dashboard/ManageVocabulary/ManageVocabulary";
import ManageUsers from "../../pages/Dashboard/ManageUsers/ManageUsers";

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
            },
            {
                path: "/lessons/:id",
                element: <LessonDetails/>
            }
        ]
    },
    {
        path:"dashboard",
        element: <Dashboard/>,
        children: [
            {
                path: "/dashboard",
                element: <ManageLesson/>
            },
            {
                path: "manageVocabulary",
                element: <ManageVocabulary/>
            },
            {
                path: "manageUsers",
                element: <ManageUsers/>
            }
        ]
    }

])