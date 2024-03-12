import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import inc_logo from "../../assets/images/logo.png";
import "../../components/styles/navbar.css";
import { logoutAdmin } from "../../api/index.js";
import { toast } from "../../components/index.js";

function AdminNavbar() {
  const [selected, setSelected] = useState("#home");
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Update selected based on the current path
    const path = location.pathname;
    setSelected(path === "/" ? "#home" : path);
  }, [location]);

  const handleSelect = (e) => {
    // Navigate to the corresponding URL based on the selected option
    navigate(`/admin/allocations/${e.target.value.toLowerCase()}`);
  };

  const handleLogout = () => {
    logoutAdmin()
    toast.success('logged out')
    navigate('/')
  };




  return (
    <nav className="navbar sticky w-full">
      <div className="shadow-lg shadow-light_blue/20 w-full border border-light_blue/50 bg-light_blue/30 backdrop-blur">
        <div className="max-w-full mx-auto px-4 py-2 text-white">
          <div className="flex justify-between text-lg">
            <div className="flex space-x-7">
              <a
                href="https://pictinc.org"
                className="flex items-center py-4 px-2"
              >
                <img src={inc_logo} alt="inc_Logo" className="h-12 w-12 mr-2" />
                <span className="font-black text-white text-2xl">
                  PICT InC 2024
                </span>
              </a>
              <div className="hidden lg:flex items-center justify-content space-x-3">
                <NavLink
                  to="/admin"
                  className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${selected === "/admin"
                    ? "border-light_blue/80 text-gold"
                    : "hover:text-gold border-transparent"
                    }`}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/admin/events/registrations/view"
                  className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${selected === "/admin/events/registrations/view"
                    ? "border-light_blue/80 text-gold"
                    : "hover:text-gold border-transparent"
                    }`}
                >
                  View registrations
                </NavLink>

                <NavLink
                  to="/admin/events/registrations/verify"
                  className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${selected === "/admin/events/registrations/verify"
                    ? "border-light_blue/80 text-gold"
                    : "hover:text-gold border-transparent"
                    }`}
                >
                  Verify registrations
                </NavLink>

                <select
                  className="mt-2 w-40 py-4 px-4 font-semibold text-gold border-transparent bg-faint_blue/30 hover:border-sky-800/80 bg-blue-600/30 hover:bg-blue-600/10 rounded-xl border transition duration-300"
                  defaultValue={"Allocations"}
                  onClick={handleSelect}
                >
                  <option disabled>Allocations</option>
                  <option>Impetus</option>
                  <option>Concepts</option>
                  <option>Pradnya</option>
                </select>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <button onClick={handleLogout} className="py-4 px-6 text-white font-semibold hover:text-gold border-transparent hover:border-light_blue/80 bg-faint_blue/30 hover:bg-faint_blue/10 rounded-xl border transition duration-300">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
