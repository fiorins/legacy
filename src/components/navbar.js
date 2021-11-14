import React from "react";

import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
    return (
        <header className="pb-16 md:pb-20 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between w-11/12 sm:w-9/12 md:w-7/12 space-y-4 md:space-y-0">  {/* pb a 16 e dal breakpoint md in poi a 20 */}
            <span className="font-righteous text-2xl dark:text-biancoperla">@DAVIDEFIORINI</span>

            <nav className="flex-row space-x-8 flex items-center text-base">
                <DarkModeToggle />

                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center space-x-2">
                    <svg className="rounded" xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 640 480">
                        <g fillRule="evenodd" strokeWidth="1pt">
                            <path fill="#fff" d="M0 0h640v479.997H0z" />
                            <path fill="#009246" d="M0 0h213.331v479.997H0z" />
                            <path fill="#ce2b37" d="M426.663 0h213.331v479.997H426.663z" />
                        </g>
                    </svg>
                    <span>ITA</span>
                </button>
            </nav>
        </header>

    );
}

export default Navbar;