import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../components/app-component/App";
import List from "../components/list-component/List";
import ErrorPage from "../components/error-component/ErrorPage";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/table",
        element: <List/>,
    },
    {
        path: "/errorPage",
        element: <ErrorPage/>,
    }
]);