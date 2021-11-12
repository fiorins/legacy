import profilo from '../img/foto-profilo-3.png';
import Typewriter from "typewriter-effect";
import './carta.css';

function Carta() {
    return (
        <div className="pt-4 pb-10 px-8 bg-primary shadow-lg rounded-lg m-auto w-11/12 sm:w-9/12 md:w-7/12">
            <div className="flex justify-center md:justify-end -mt-16">
                <img className="avatar w-28 h-28 object-cover rounded-full border-2 border-indigo-500" src={profilo} alt="" />
            </div>
            <div>
                <h1 className="text-gray-800 text-4xl font-semibold">Hey there! 👋</h1>
                <span className="flex mt-2 text-gray-700 text-base md:text-3xl">
                    {"I'm Davide, I like\u00A0"}
                    <Typewriter
                        options={{
                            strings: [
                                "to play chess",
                                "listening to music",
                                "programming",
                                "to play football",
                                "reading comics",
                                "nature",
                            ],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </span>

            </div>
        </div>
    );
}

export default Carta;