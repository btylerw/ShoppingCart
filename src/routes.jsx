import App from "./App";
import GetProducts from "./GetProducts";
import ErrorPage from "./ErrorPage";
import { ShoppingCart } from "./ShoppingCart";

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/shop",
        element: <GetProducts />,
    },
    {
        path: "/cart",
        element: <ShoppingCart />,
    }
];

export default routes;