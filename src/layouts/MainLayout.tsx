import { Outlet } from "react-router-dom";
import "../layouts/MainLayout.css";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

export default function MainLayout() {
  return (
    <>
      <div className="grid-container">
        <div className="header-container">
          <Header />
        </div>
        <div className="main-container">
          <Outlet />
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </>
  );
}
