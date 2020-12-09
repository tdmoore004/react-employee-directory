import React, { Component } from "react";
import Header from "./components/header.jsx"
import Employee from "./components/employee.jsx"

class App extends Component {
    state = {
        count: 0,
        firstName: "",
        lastName: "",
        users: [],
        todos: [],
        display: "users"
    };

    componentDidMount = () => {
        console.log("Component Mounted!");
    }

    // handleInputChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // };

    // submitInput = (event) => {
    //     event.preventDefault();
    //     console.log(this.state.firstName, this.state.lastName);
    // }

    handleIncrement = () => {
        console.log("Hit Counter")
        this.setState({
            count: this.state.count + 10
        })
    }

    render() {
        console.log("Rendered!");
        return (
            <div>

                <Header header="React Employee Directory" />

                <form>
                    <select id="city-input">
                        <option value="" selected>Sort By...</option>
                        <option value="Salt Lake City">Name</option>
                        <option value="Orem">Title</option>
                        <option value="Ogden">Location</option>
                    </select>
                    <button onClick={this.submitInput}>
                        Sort
                </button>
                </form>

                <form>
                    <input
                        placeholder="Filter by Location"
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.submitInput}>
                        Filter
                </button>
                </form>

                <form>
                    <input
                        placeholder="Filter by Title"
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.submitInput}>
                        Filter
                </button>
                </form>

                <Employee />

            </div>
        );
    }
}

export default App;
