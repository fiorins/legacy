import React, { Component } from "react";
//import Logo from 'react-svgporn';
import { ReactSVG } from 'react-svg'

class Skill extends Component {
    render() {
        return (
            <div className="col flex items-center space-x-2 overflow-hidden text-gray-900  dark:text-gray-100">
                {/*<Logo name="Github"/> questo sarebbe il metodo piu comodo, peccato non abbia molte icone*/}
                <ReactSVG src={this.props.path} />
                <span>{this.props.name}</span>
            </div>
        );
    }
}

export default Skill;


