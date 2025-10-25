import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaPaw, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navbar shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("You logged out successfully"))
      .catch(console.error);
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-primary after:bottom-[-4px] after:left-0"
      : "text-gray-700 hover:text-primary transition-all duration-300";

  const links = (
    <>
      <NavLink to="/" className={navLinkClass}>
        Home
      </NavLink>
      <NavLink to="/services" className={navLinkClass}>
        Services
      </NavLink>
      <NavLink to="/profile" className={navLinkClass}>
        My Profile
      </NavLink>
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-100 shadow-lg backdrop-blur-lg border-b border-gray-200 py-2"
          : "bg-gray-100 shadow-lg backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-primary"
        >
          <FaPaw className="text-primary text-3xl" />
          WarmPaws
        </Link>

        {/* Center Navigation (Desktop only) */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          {links}
        </nav>

        {/* Right Section (profile + buttons + menu toggle) */}
        <div className="flex items-center gap-4">
          {/* Profile - visible on all devices */}
          {user && (
            <div className="relative group">
              <img
                src={user.photoURL || "/public/user.png"}
                alt={user.displayName || "User"}
                className="w-10 h-10 rounded-full border-2 border-primary cursor-pointer"
              />
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {user.displayName || "User"}
              </span>
            </div>
          )}

          {/* Auth buttons (desktop only) */}
          {user ? (
            <button
              onClick={handleLogOut}
              className="hidden md:block px-5 py-2 text-sm rounded-full border border-primary hover:text-primary hover:bg-white bg-primary text-white transition-all duration-300"
            >
              Logout
            </button>
          ) : (
            <div className="hidden md:flex gap-3">
              <Link
                to="/login"
                className="px-5 py-2 text-sm rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 text-sm rounded-full border border-primary text-primary  transition-all duration-300"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-primary focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[72px] left-0 w-full bg-white/95 backdrop-blur-md shadow-md flex flex-col items-center gap-6 py-6 text-lg font-medium transition-all duration-500 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {links}

        {user ? (
          <button
            onClick={handleLogOut}
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 rounded-full border border-primary text-primary  transition-all duration-300"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
