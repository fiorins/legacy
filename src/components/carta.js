import profilo from '../img/foto-profilo-3.png';
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next';

import './carta.css';

function Carta() {
    const { t } = useTranslation(); //const { t, i18n } = useTranslation(); assegna alle costanti t e i18n quella funzione 

    return (
        <section className="py-8 m-auto w-11/12 sm:w-9/12 md:w-7/12">
            <div className="pt-4 pb-10 px-8 m-auto bg-primario shadow-lg rounded-lg">
                <div className="flex justify-center md:justify-end -mt-16">
                    <img className="avatar w-28 h-28 object-cover rounded-full" src={profilo} alt="" />
                </div>
                <div className="font-sourcecode">
                    <h1 className="text-gray-800 text-3xl sm:text-4xl font-bold">{t('saluto')} 👋</h1>
                    <span className="flex flex-col mt-2 text-gray-700 xs:text-lg sm:text-xl md:text-2xl lg:text-2xl">
                        <span>
                            {t('nome')}
                            {t('presentazione')}
                        </span>
                        <span>
                            <Typewriter
                                options={{
                                    strings: [
                                        t('interessi.frase1'),
                                        t('interessi.frase2'),
                                        t('interessi.frase3'),
                                        t('interessi.frase4'),
                                        t('interessi.frase5'),
                                        t('interessi.frase6'),
                                        t('interessi.frase7'),
                                        t('interessi.frase8'),
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </span>

                </div>
            </div>
        </section >

    );
}

export default Carta;