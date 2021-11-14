
import './App.css';
import { Component } from "react";
import Navbar from "./components/navbar";
import Carta from "./components/carta";
//import Repo from "./components/repo";
import Skill from "./components/skill";
import Footer from "./components/footer";

import { FaGithub, FaYoutube, } from 'react-icons/fa';
import { GrMail, } from 'react-icons/gr';

import javascript from './img/icons/icons8-javascript.svg';
import html5 from './img/icons/icons8-html-5.svg';
import css3 from './img/icons/icons8-css3.svg';
import java from './img/icons/icons8-java.svg';
import python from './img/icons/icons8-python.svg';
import wordpress from './img/icons/icons8-wordpress.svg';
import matlab from './img/icons/icons8-matlab.svg';
import photoshop from './img/icons/icons8-adobe-photoshop.svg';
import illustrator from './img/icons/icons8-adobe-illustrator.svg';
import finalcutpro from './img/icons/icons8-final-cut-pro-x.svg';


class App extends Component {

  state = {
    repos: [
      { id: 0, name: "fiorins.github.io" },
      { id: 1, name: "onepiece" },
      { id: 2, name: "python-notebooks" },
    ]
  };

  state = {
    skills: [
      //coding
      { id: 0, name: "JavaScript", path: javascript },
      { id: 1, name: "HTML5", path: html5 },
      { id: 2, name: "CSS3", path: css3 },
      { id: 3, name: "Java", path: java },
      { id: 4, name: "Python", path: python },
      { id: 5, name: "Wordpress", path: wordpress },
      { id: 6, name: "MatLab", path: matlab },
      //videoediting
      { id: 7, name: "Photoshop", path: photoshop },
      { id: 8, name: "Illustrator", path: illustrator },
      { id: 9, name: "FinalCut Pro", path: finalcutpro },
    ]
  };

  render() {
    return (
      <div className='container p-5 dark:bg-scuro2'>
        <Navbar />
        <Carta />

        {/* c'e un bug nel modulo che non riconosce le emoji, per ora tolgo questa funzione
        <section id="repositories" className="mt-4 mx-5">
          <h2 className="fw-bold">My GitHub repositories:</h2>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          /* mappa la lista 
            {this.state.repos.map(card => (
              <Repo
                key={card.id}      /* quando si itera su una lista in REACT va sempre messo il componente key
                myrepo={card.nome}
              /*anche solo card={card} si potrebbe usare per evitare di scrivere tutti i valori
              />
            ))}
          </div>
        </section>
        */}

        <section id="technologies" className="py-8 m-auto w-11/12 sm:w-9/12 md:w-7/12">
          <h2 className="font-bold text-2xl mb-8 dark:text-biancoperla">Technologies I know:</h2>
          <div className="mt-4 grid gap-2 grid-cols-2 sm:grid-cols-3">
            {this.state.skills.map(skill => (
              <Skill
                key={skill.id}
                name={skill.name}
                path={skill.path}
              />
            ))}
          </div>
        </section>

        <section id="contacts" className="py-8 m-auto w-11/12 sm:w-9/12 md:w-7/12">
          <h2 className="font-bold text-2xl mb-4 dark:text-biancoperla">You can find me on:</h2>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-4 mr-4 rounded inline-flex items-center">
            <GrMail />
            <a href="mailto:davidefiorini@outlook.com" className="pl-2">E-Mail</a>
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-4 mr-4 rounded inline-flex items-center">
            <FaGithub />
            <a href="https://github.com/fiorins" className="pl-2">GitHub</a>
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-4 mr-4 rounded inline-flex items-center">
            <FaYoutube />
            <a href="https://www.youtube.com/davidefiorini96" className="pl-2">YouTube</a>
          </button>
        </section>



        <Footer />

      </div>
    );
  }
}

export default App;
