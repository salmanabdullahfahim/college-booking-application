import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";
import { ErrorElement } from "../Components/Error/ErrorElement";
import CollegeContainer from "../Pages/College/CollegeContainer";
import SingleCollege from "../Components/Cardsection/SingleCollege";
import PrivateRoutes from "./PrivateRoutes";
import Admission from "../Pages/Admisssion/Admission";
import Apply from "../Pages/Apply/Apply";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/colleges",
        element: <CollegeContainer />,
      },
      {
        path: "/colleges/:id",
        element: (
          <PrivateRoutes>
            <SingleCollege />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://college-booking-app.vercel.app/colleges/${params.id}`),
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/apply/:id",
        element: (
          <PrivateRoutes>
            <Apply />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://college-booking-app.vercel.app/colleges/${params.id}`),
      },
    ],
  },
]);

export default router;
