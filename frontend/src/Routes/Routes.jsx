import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";
import { ErrorElement } from "../Components/Error/ErrorElement";
import CollegeContainer from "../Pages/College/CollegeContainer";
import SingleCollege from "../Components/Cardsection/SingleCollege";

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
        element: <SingleCollege />,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/colleges/${params.id}`),
      },
    ],
  },
]);

export default router;
