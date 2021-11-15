import profilo from '../img/foto-profilo-3.png';
import Typewriter from "typewriter-effect";
import './carta.css';

function Carta() {
    return (
        <section className="py-8 m-auto w-11/12 sm:w-9/12 md:w-7/12">
            <div className="pt-4 pb-10 px-8 m-auto bg-primario shadow-lg rounded-lg">
                <div className="flex justify-center md:justify-end -mt-16">
                    <img className="avatar w-28 h-28 object-cover rounded-full" src={profilo} alt="" />
                </div>
                <div>
                    <h1 className="text-gray-800 text-4xl font-semibold">Hey there! 👋</h1>
                    <span className="flex mt-2 text-gray-700 text-sm xs:text-base md:text-2xl lg:text-3xl">
                        {"I'm Davide, I love\u00A0"}
                        <Typewriter
                            options={{
                                strings: [
                                    "to play chess",
                                    "enjoy music",
                                    "programming",
                                    "to play football",
                                    "reading comics",
                                    "nature",
                                    "open source",
                                ],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </span>
                </div>
            </div>
        </section>

    );
}

export default Carta;