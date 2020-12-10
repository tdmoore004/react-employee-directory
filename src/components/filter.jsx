import React, { Component } from "react";

class Filter extends Component {
    state = {
        filter: ""
    };

    componentDidMount = () => {
        console.log("Component Mounted!");
    }

    handleIncrement = () => {
        console.log("Hit Counter")
        this.setState({
            count: this.state.count + 10
        })
    }

    render() {
        console.log("Rendered!");
        return (
            <form>
                <select id="positionFilter">
                    <option value="" selected>Filter by Position</option>
                    <option value="Manager">Manager</option>
                    <option value="Front-End Developer">Front-End Developer</option>
                    <option value="Back-End Developer">Back-End Developer</option>
                    <option value="UX UI Designer">UX/UI Designer</option>
                    <option value="Graphic Designer">Graphic Designer</option>
                    <option value="Intern">Intern</option>
                </select>
                <button onClick={this.submitInput}>
                    Filter
                    </button>
            </form>
        );
    }
}

export default Filter;