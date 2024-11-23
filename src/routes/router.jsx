import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import HomePage from "../Page/HomePage";
import LearnPage from "../Page/LearnPage";

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
        children: [
            {
                path: "",
                element: <HomePage></HomePage>
            },
            {
                path: "/learn",
                element: <LearnPage></LearnPage>,
                loader: fetchData,
            }
        ]
    },
    {
        path: "/auth",
        element: <h1>auth</h1>,
        children: [
            {
                path: "/auth/login",
                element: <h1>login</h1>
            },
            {
                path: "/auth/register",
                element: <h1>register</h1>
            }
        ]
    },
    {
        path: "*",
        element: <h1>error</h1>
    }
]);

export default router;