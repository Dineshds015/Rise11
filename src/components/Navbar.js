import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md p-4 flex items-center justify-between md:px-10 lg:px-20">
            {/* Left: Logo */}
            <div className="flex items-center space-x-2">
                <img src="jurLOGO.jpg" className="w-8 h-8 md:w-10 md:h-10" alt="LOGO" />
                <span className="text-black text-lg md:text-2xl font-bold">Jur</span>
            </div>

            {/* Right: Notifications and User Profile */}
            <div className="flex items-center space-x-4 md:space-x-6">
                <button className="p-2 focus:outline-none">
                    <FontAwesomeIcon icon={faBell} className="text-blue-400 text-lg md:text-xl" />
                </button>
                <button className="p-2 focus:outline-none">
                    <FontAwesomeIcon icon={faUser} className="text-blue-400 text-lg md:text-xl" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
