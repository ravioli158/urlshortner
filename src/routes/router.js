import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
const path = process.env.PUBLIC_URL;
const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    {
      path: "/contact",
      element: <Contact />,
    },
  ],
  {
    basename: { path },
  }
);

export default router;