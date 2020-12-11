import React, { Component } from "react";
import Header from "./components/header.jsx"
import { Data } from "./data.js";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "",
            sort: "",
            filter: ""
        };

        this.handleSortChange = this.handleSortChange.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.sortCompare = this.sortCompare.bind(this);
        this.filterPosition = this.filterPosition.bind(this);
    }

    handleSortChange(event) {
        this.setState({
            sort: event.target.value,
        });
    }

    handleSort(event) {
        event.preventDefault();
        this.setState({
            display: "sort"
        });
    }

    handleFilterChange(event) {
        this.setState({
            filter: event.target.value,
        });
    }

    handleFilter(event) {
        event.preventDefault();
        this.setState({
            display: "filter"
        });
        console.log(this.state.filter)
    }

    sortCompare(user1, user2) {
        if (this.state.sort === "Name") {
            const nameA = user1.name.toUpperCase();
            const nameB = user2.name.toUpperCase();

            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        } else if (this.state.sort === "Title") {
            const nameA = user1.title.toUpperCase();
            const nameB = user2.title.toUpperCase();

            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        } else if (this.state.sort === "Location") {
            const nameA = user1.location.toUpperCase();
            const nameB = user2.location.toUpperCase();
          
            let comparison = 0;
            if (nameA > nameB) {
              comparison = 1;
            } else if (nameA < nameB) {
              comparison = -1;
            }
            return comparison;
        }
    }

    filterPosition(user) {
        console.log(this.state.filter);
        return user.title === this.state.filter;
        // if (this.state.filter === "Manager") {
        //     return user.title === "Manager"
        // } else if (this.state.filter === "Front-End Developer") {
        //     return user.title === "Front-End Developer"
        // } else if (this.state.filter === "Back-End Developer") {
        //     return user.title === "Back-End Developer"
        // } else if (this.state.filter === "UX/UI Designer") {
        //     return user.title === "UX/UI Designer"
        // } else if (this.state.filter === "Graphic Designer") {
        //     return user.title === "Graphic Designer"
        // } else if (this.state.filter === "Intern") {
        //     return user.title === "Intern"
        // }
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

            {this.state.display === "" && (
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
            )}

            {this.state.display === "sort" && (
                <ul>
                    {Data.sort(this.sortCompare).map((user) => {
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
            )}

            {this.state.display === "filter" && (
                <ul>
                    {Data.filter(this.filterPosition).map((user) => {
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
            )}
        </div>
    );
}
}

export default App;
