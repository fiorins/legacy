import React from "react";

import DarkModeToggle from "./DarkModeToggle";
import Switcher from "./switcher"

function Navbar() {
    return (
        <header className="pb-16 md:pb-20 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between w-11/12 sm:w-9/12 md:w-7/12 space-y-4 md:space-y-0">  {/* pb a 16 e dal breakpoint md in poi a 20 */}
            <span className="font-righteous text-2xl dark:text-biancoperla">@DAVIDEFIORINI</span>

            <nav className="flex-row space-x-8 flex items-center text-base">
                <DarkModeToggle />
                <Switcher />
            </nav>
        </header>

    );
}

export default Navbar;