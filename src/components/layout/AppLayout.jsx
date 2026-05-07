import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WarningBanner from "../common/WarningBanner";

const AppLayout = () => {
  return (
    <>
      <WarningBanner />
      <Navbar />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
