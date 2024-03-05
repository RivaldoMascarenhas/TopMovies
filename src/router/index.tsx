import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { SingIn } from "../pages/sign-in";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SingIn />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
