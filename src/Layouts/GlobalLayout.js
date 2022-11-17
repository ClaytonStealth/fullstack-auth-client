import { NavBar } from "../Components/NavBar";
import { Footer } from "../Components/Footer";
import { Outlet } from "react-router-dom";
export const GlobalLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
