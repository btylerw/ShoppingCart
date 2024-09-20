import App from "./App";
import GetProducts from "./GetProducts";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Landing from "./Landing";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/:name",
        element: <Landing />,
    }
];

export default routes;