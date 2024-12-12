import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Lessons from "../../pages/Home/UserPages/Lessons/Lessons";
import Tutorials from "../../pages/Home/UserPages/Tutorials/Tutorials";
import LessonDetails from "../../pages/Home/UserPages/LessonDetails/LessonDetails";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import ManageLesson from "../../pages/Dashboard/ManageLesson/ManageLesson";
import ManageVocabulary from "../../pages/Dashboard/ManageVocabulary/ManageVocabulary";
import ManageUsers from "../../pages/Dashboard/ManageUsers/ManageUsers";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
           
            {
                path: "/",
                element: <PrivateRoute allowedRoles={["user"]}>
                    <Lessons/>
                </PrivateRoute>
            },
            {
                path: "/tutorials",
                element: <PrivateRoute allowedRoles={["user"]}>
                    <Tutorials/>
                </PrivateRoute>
            },
            {
                path: "/lessons/:id",
                element: <PrivateRoute allowedRoles={["user"]}>
                    <LessonDetails/>
                </PrivateRoute>
            }
        ]
    },
    {
        path:"dashboard",
        element: <Dashboard/>,
        children: [
            {
                path: "/dashboard",
                element: <PrivateRoute allowedRoles={["admin"]}>
                    <ManageLesson/>
                </PrivateRoute>
            },
            {
                path: "manageVocabulary",
                element: <PrivateRoute allowedRoles={["admin"]}>
                    <ManageVocabulary/>
                </PrivateRoute>
            },
            {
                path: "manageUsers",
                element: <PrivateRoute allowedRoles={["admin"]}>
                    <ManageUsers/>
                </PrivateRoute>
            }
        ]
    },
    {
        path: "signIn",
        element: <SignIn/>
    },
    {
        path: "signUp",
        element: <SignUp/>
    }

])