import React from "react";

import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
    return (
        <header>
            <div className="pb-16 md:pb-20 mx-auto flex items-center w-11/12 sm:w-9/12 md:w-7/12">  {/* pb a 16 e dal breakpoint md in poi a 20 */}
                <span className="font-righteous text-2xl dark:text-biancoperla">@DAVIDEFIORINI</span>

                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center" >
                    <ul className="flex flex-row ml-auto items-center space-x-4">
                        <li className="nav-item ">
                            <DarkModeToggle />
                        </li>
                        <li className="nav-item ">
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center">
                                <svg className="rounded" xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 640 480">
                                    <g fill-rule="evenodd" stroke-width="1pt">
                                        <path fill="#fff" d="M0 0h640v479.997H0z" />
                                        <path fill="#009246" d="M0 0h213.331v479.997H0z" />
                                        <path fill="#ce2b37" d="M426.663 0h213.331v479.997H426.663z" />
                                    </g>
                                </svg>
                                <span className="pl-2">ITA</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    );
}

export default Navbar;