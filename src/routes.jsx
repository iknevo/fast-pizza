import { createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Error from "./ui/Error.jsx";
import Menu, { menuLoader } from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart.jsx";
import CreateOrder, { orderAction } from "./features/order/CreateOrder.jsx";
import Order, { orderLoader } from "./features/order/Order.jsx";
import AppLayout from "./ui/AppLayout.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: orderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        errorElement: <Error />,
        loader: orderLoader,
      },
    ],
  },
]);

export default router;
