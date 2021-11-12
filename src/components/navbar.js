function Navbar() {
    return (
        <>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center pb-16 md:pb-20 w-11/12 sm:w-9/12 md:w-7/12">  {/* pb a 16 e dal breakpoint md in poi a 20 */}
                    <h1 className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">@davidefiorini</span>
                    </h1>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center" >
                        <ul className="flex flex-row list-none ml-auto">
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75" href="www.facebook.com" >
                                    <i className="fab fa-facebook-square text-lg leading-lg opacity-75"></i>
                                    <span className="ml-2">ENG</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75" href="www.facebook.com">
                                    <i className="fab fa-twitter text-lg leading-lg opacity-75"></i>
                                    <span className="ml-2">Dark</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;