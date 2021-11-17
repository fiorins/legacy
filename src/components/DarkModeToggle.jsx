
import * as React from "react";

import useDarkMode from "use-dark-mode";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function DarkModeToggle() {
    // eslint-disable-next-line no-useless-rename
    const { value: isDarkMode, toggle: toggle } = useDarkMode(false, {
        classNameDark: "dark",
        classNameLight: "light",
    });
 
    return (
        <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggle}
            size={30}
            moonColor={"#F3F6FD"}
            //sunColor={"white"}
        /> 
    );
}

export default DarkModeToggle;