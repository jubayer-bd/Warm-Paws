import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Navbar />
      <main
        className="flex-1 container mx-auto px-4 py-6 animate__animated animate__fadeIn"
        data-aos="fade-up"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
