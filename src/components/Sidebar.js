import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGaugeSimple,
    faBriefcase,
    faChartLine,
    faCalendarDays,
    faFileLines,
    faHandFist,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
        <aside className="w-full md:w-60 bg-white h-full p-4 md:p-6 flex flex-col justify-between">
            {/* Menu Items */}
            <div>
                <ul className="space-y-4 md:space-y-6">
                    <li className="text-gray-700 font-semibold cursor-pointer flex items-center text-sm md:text-xl hover:text-[#74C0FC]">
                        <FontAwesomeIcon
                            icon={faGaugeSimple}
                            className="text-blue-400 text-lg md:text-xl"
                        />
                        <span className="ml-2 truncate">Dashboard</span>
                    </li>
                    <li className="text-gray-700 font-semibold cursor-pointer flex items-center text-sm md:text-xl hover:text-[#74C0FC]">
                        <FontAwesomeIcon
                            icon={faBriefcase}
                            className="text-blue-400 text-lg md:text-xl"
                        />
                        <span className="ml-2 truncate">My Cases</span>
                    </li>
                    <li className="text-gray-700 font-semibold cursor-pointer flex items-center text-sm md:text-xl hover:text-[#74C0FC]">
                        <FontAwesomeIcon
                            icon={faChartLine}
                            className="text-blue-400 text-lg md:text-xl"
                        />
                        <span className="ml-2 truncate">Activities</span>
                    </li>
                    <li className="text-gray-700 font-semibold cursor-pointer flex items-center text-sm md:text-xl hover:text-[#74C0FC]">
                        <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="text-blue-400 text-lg md:text-xl"
                        />
                        <span className="ml-2 truncate">Calendar</span>
                    </li>
                    <li className="text-gray-700 font-semibold cursor-pointer flex items-center text-sm md:text-xl hover:text-[#74C0FC]">
                        <FontAwesomeIcon
                            icon={faFileLines}
                            className="text-blue-400 text-lg md:text-xl"
                        />
                        <span className="ml-2 truncate">Files</span>
                    </li>
                    <li className="text-gray-700 font-semibold cursor-pointer flex items-center text-sm md:text-xl hover:text-[#74C0FC]">
                        <FontAwesomeIcon
                            icon={faHandFist}
                            className="text-blue-400 text-lg md:text-xl"
                        />
                        <span className="ml-2 truncate">Open a Dispute</span>
                    </li>
                </ul>
            </div>

            {/* Illustration */}
            <div className="mt-6 hidden md:block">
                <img
                    src="Justice.png"
                    alt="Justice Illustration"
                    className="mx-auto w-20 md:w-auto rounded-lg"
                />
            </div>
        </aside>
    );
};

export default Sidebar;
