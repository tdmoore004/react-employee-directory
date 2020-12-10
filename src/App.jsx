import React, { Component } from "react";
import Header from "./components/header.jsx"
import { Data } from "./data.js";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sort: "",
            filter: ""
        };

        this.handleSortChange = this.handleSortChange.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleSortChange(event) {
        this.setState({ sort: event.target.value });
    }

    handleSort(event) {
        event.preventDefault();
        console.log(this.state.sort);
    }

    handleFilterChange(event) {
        this.setState({ filter: event.target.value });
    }

    handleFilter(event) {
        event.preventDefault();
        console.log(this.state.filter);
    }

    render() {
        console.log("Rendered!");
        return (
            <div>

                <Header header="React Employee Directory" />

                <form onSubmit={this.handleSort}>
                    <label>
                        <select value={this.state.sort} onChange={this.handleSortChange}>
                            <option value="" selected>Sort By...</option>
                            <option value="Name">Name</option>
                            <option value="Title">Title</option>
                            <option value="Location">Location</option>
                        </select>
                    </label>
                    <input type="submit" value="Sort" />
                </form>

                <form onSubmit={this.handleFilter}>
                    <label>
                        <select value={this.state.filter} onChange={this.handleFilterChange}>
                            <option value="" selected>Filter by Position...</option>
                            <option value="Manager">Manager</option>
                            <option value="Front-End Developer">Front-End Developer</option>
                            <option value="Back-End Developer">Back-End Developer</option>
                            <option value="UX/UI Designer">UX/UI Designer</option>
                            <option value="Graphic Designer">Graphic Designer</option>
                            <option value="Intern">Intern</option>
                        </select>
                    </label>
                    <input type="submit" value="Filter" />
                </form>

                <ul>
                    {Data.map((user) => {
                        return (
                            <li>
                                {user.name}
                                <ul>
                                    <li>Title: {user.title}</li>
                                    <li>Email: {user.email}</li>
                                    <li>Phone: {user.phone}</li>
                                    <li>City: {user.location}</li>
                                </ul>
                            </li>)
                    })}
                </ul>

            </div>
        );
    }
}

export default App;
