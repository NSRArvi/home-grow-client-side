import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../img/logo-hg.png";
import {
  HiBars3CenterLeft,
  HiXMark,
  HiArrowUpRight,
  HiArrowRight,
} from "react-icons/hi2";
import {
  IoLocationSharp,
  IoPhonePortraitOutline,
  IoTimeOutline,
} from "react-icons/io5";

const NAV_ITEMS = [
  { label: "Home", path: "/", end: true },
  { label: "Gallery", path: "/photogalary" },
  { label: "Products", path: "/product" },
  { label: "About Us", path: "/about" },
  { label: "Process", path: "/process" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
      isActive
        ? "bg-[#71B002] text-white shadow-sm shadow-[#71B002]/30"
        : "text-slate-200 hover:text-[#8ED116] hover:bg-white/10"
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0D1F12] text-slate-200 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <img
                src={Logo}
                alt="Home Grow Logo"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation driven from single NAV_ITEMS array */}
            <nav
              className="hidden lg:flex items-center gap-1.5"
              aria-label="Main Navigation"
            >
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  className={navLinkClasses}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/product"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#71B002] hover:bg-[#8ED116] hover:text-[#0D1F12] text-white text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span>Explore Catalog</span>
                <HiArrowUpRight className="text-base" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle Menu"
                aria-expanded={mobileOpen}
                className="p-2.5 rounded-xl text-slate-200 hover:bg-white/10 focus:outline-none"
              >
                <HiBars3CenterLeft className="text-3xl text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Responsive Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden bg-[#0D1F12] text-white flex flex-col justify-between overflow-y-auto overscroll-contain transition-all duration-300 ease-out ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Top Bar inside Full-Screen Menu */}
        <div className="flex items-center justify-between px-5 h-20 border-b border-white/10 shrink-0">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3"
          >
            <img
              src={Logo}
              alt="Home Grow Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close Menu"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#71B002] text-white flex items-center justify-center transition-colors"
          >
            <HiXMark className="text-2xl" />
          </button>
        </div>

        {/* Center Full-Screen Navigation Links */}
        <nav
          aria-label="Mobile Navigation"
          className="flex-grow flex flex-col justify-center px-6 py-8 space-y-2"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `group flex items-center justify-between px-5 py-4 rounded-2xl text-xl sm:text-2xl font-bold tracking-tight transition-all duration-200 ${
                  isActive
                    ? "bg-[#71B002] text-white shadow-lg shadow-[#71B002]/25"
                    : "text-slate-200 hover:bg-white/10 hover:text-[#8ED116]"
                }`
              }
            >
              <span>{item.label}</span>
              <HiArrowRight className="text-xl opacity-70 group-hover:translate-x-1 transition-transform" />
            </NavLink>
          ))}

          <div className="pt-4">
            <Link
              to="/product"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#8ED116] hover:bg-[#71B002] text-[#0D1F12] hover:text-white text-base font-extrabold transition-all duration-300 shadow-lg"
            >
              <span>Explore Full Product Catalog</span>
              <HiArrowUpRight className="text-lg" />
            </Link>
          </div>
        </nav>

        {/* Bottom Contact Footer Strip inside Full-Screen Menu */}
        <div className="px-6 py-6 bg-black/25 border-t border-white/10 space-y-2.5 text-xs sm:text-sm text-slate-300 shrink-0">
          <div className="flex items-center gap-2.5">
            <IoLocationSharp className="text-base text-[#8ED116] shrink-0" />
            <span>Kadim Gaziaron, Goshingga, Shreepur, Gazipur.</span>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <IoPhonePortraitOutline className="text-base text-[#8ED116] shrink-0" />
              <a href="tel:+8801731106046" className="hover:text-white">
                +880 1731106046
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <IoTimeOutline className="text-base text-[#8ED116] shrink-0" />
              <span>9:00 - 6:00 (GMT+6)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
