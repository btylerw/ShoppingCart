import App from "./App";
import GetProducts from "./GetProducts";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/:name",
        element: <App />,
    }
];

export default routes;