import React, { Component } from "react";
import RepoCard from "react-repo-card";

class Repo extends Component {
    render() {
        return (
            <div className="col">
                <RepoCard username="fiorins" repository={this.props.myrepo} />
            </div>
        );
    }
}

export default Repo;