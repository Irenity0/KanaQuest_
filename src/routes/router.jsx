import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import HomePage from "../Page/HomePage";
import LearnPage from "../Page/LearnPage";
import Lesson from "../components/Lesson";
import TutorialPage from "../Page/TutorialPage";
import AboutUs from "../components/AboutUs";
import ErrorPage from "../Page/ErrorPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Page/LoginPage";
import Register from "../Page/RegisterPage";
import PrivateRoute from "./privateRoute";

const fetchData = async () => {
    const response = await fetch("/vocab.json");
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "",
                element: <HomePage></HomePage>
            },
            {
                path: "/lessons",
                element: <LearnPage></LearnPage>,
                loader: fetchData,
            },
            {
                path: "/lessons/:id",
                element: <PrivateRoute><Lesson></Lesson></PrivateRoute>
            },
            {
                path: "/tutorial",
                element: <PrivateRoute><TutorialPage></TutorialPage></PrivateRoute>
            },
            {
                path: "/aboutus",
                element: <AboutUs></AboutUs>
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;