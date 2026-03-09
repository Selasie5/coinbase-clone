import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
