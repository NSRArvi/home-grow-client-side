import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Navbar from "../shared/Navbar";

const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 20,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF7] text-slate-800 selection:bg-[#71B002] selection:text-white">
      <Header />
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
