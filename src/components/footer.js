import React from "react";

function Footer() {
    return (
        <footer className="border-t-2 border-primario pt-8 mt-8 mx-auto justify-around flex items-center w-11/12 sm:w-9/12 md:w-7/12 dark:text-gray-300">
            <p>
                <span className="font-righteous">©&nbsp;</span>
                <span className="font-sourcecode">2021</span>
            </p>

            <h1 className="font-sourcecode flex items-center space-x-2 text-xs md:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="">with</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span className="">by Davide Fiorini</span>
            </h1>
        </footer>
    );
}

export default Footer;