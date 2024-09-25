import App from "./App";
import GetProducts from "./GetProducts";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/shop",
        element: <GetProducts />,
    }
];

export default routes;