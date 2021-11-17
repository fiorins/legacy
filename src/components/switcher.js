import React, { useState, useCallback } from "react";
import { useTranslation } from 'react-i18next';


const Ita = () =>
   <>
      <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center space-x-2">
         <svg className="rounded" xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 640 480">
            <g fillRule="evenodd" strokeWidth="1pt">
               <path fill="#fff" d="M0 0h640v479.997H0z" />
               <path fill="#009246" d="M0 0h213.331v479.997H0z" />
               <path fill="#ce2b37" d="M426.663 0h213.331v479.997H426.663z" />
            </g>
         </svg>
         <span className="font-sourcecode font-bold">ITA</span>
      </div>
   </>;
const Eng = () =>
   <>
      <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center space-x-2">
         <svg className="rounded" xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 640 480">
            <defs>
               <clipPath id="a">
                  <path fill-opacity=".67" d="M-85.333 0h682.67v512h-682.67z" />
               </clipPath>
            </defs>
            <g clip-path="url(#a)" transform="translate(80) scale(.94)">
               <g stroke-width="1pt">
                  <path fill="#006" d="M-256 0H768.02v512.01H-256z" />
                  <path d="M-256 0v57.244l909.535 454.768H768.02V454.77L-141.515 0H-256zM768.02 0v57.243L-141.515 512.01H-256v-57.243L653.535 0H768.02z" fill="#fff" />
                  <path d="M170.675 0v512.01h170.67V0h-170.67zM-256 170.67v170.67H768.02V170.67H-256z" fill="#fff" />
                  <path d="M-256 204.804v102.402H768.02V204.804H-256zM204.81 0v512.01h102.4V0h-102.4zM-256 512.01L85.34 341.34h76.324l-341.34 170.67H-256zM-256 0L85.34 170.67H9.016L-256 38.164V0zm606.356 170.67L691.696 0h76.324L426.68 170.67h-76.324zM768.02 512.01L426.68 341.34h76.324L768.02 473.848v38.162z" fill="#c00" />
               </g>
            </g>
         </svg>
         <span className="font-sourcecode font-bold">ENG</span>
      </div>
   </>;

function useToggle(initialValue = false) {
   const [value, setValue] = useState(initialValue);

   const toggle = useCallback(() => {
      setValue(v => !v);
   }, []);

   return [value, toggle];
}

const Switcher = () => {
   const { i18n } = useTranslation();

   const changeLanguage = (language) => {
      i18n.changeLanguage(language);
   };

   const [isOn, toggleIsOn] = useToggle();

   return (
      <>
         <button onClick={toggleIsOn}>
            {isOn ? (
               <div onClick={() => changeLanguage('en')}>
                  <Eng />
               </div>
            ) : (
               <div onClick={() => changeLanguage('it')}>
                  <Ita />
               </div>
            )}
         </button>
      </>
   )
}
export default Switcher;