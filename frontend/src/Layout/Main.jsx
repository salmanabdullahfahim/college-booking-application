import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Toaster />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Main;
