import React from "react";

import DarkModeToggle from "./DarkModeToggle";

function Navbar() {



    return (
        <>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
            <header className="body-font">
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center pb-16 md:pb-20 w-11/12 sm:w-9/12 md:w-7/12">  {/* pb a 16 e dal breakpoint md in poi a 20 */}
                    <h1 className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 font-righteous text-2xl dark:text-biancoperla">@DAVIDEFIORINI</span>
                    </h1>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center" >
                        <ul className="flex flex-row list-none ml-auto items-center">
                            <li className="nav-item pl-4">
                                <DarkModeToggle />
                            </li>
                            <li className="nav-item pl-4">
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex">
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
        </>
    );
}

export default Navbar;