import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Wish from "../pages/Wish";
import WishForm from "../pages/WishForm";


export const routes = createBrowserRouter([
    {
        path: "",
        Component: Home
    },

    {
        path: "/wish-form",
        Component: WishForm
    },
    {
        path: "/wish",
        Component: Wish
    },

])