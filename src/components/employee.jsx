import React, { Component } from "react";
import { Data } from "../data.js";

class Employee extends Component {

    render() {
        return (
            // <div>
            //     {this.state.display === "users" && (    
            <ul>
                {Data.map((user) => {
                    return (
                        <li>
                            {user.name}
                            <ul>
                                <li>{user.title}</li>
                                <li>{user.email}</li>
                                <li>{user.phone}</li>
                                <li>{user.location}</li>
                            </ul>
                        </li>)
                })}
            </ul>
        )
    };

    //         {this.state.display === "todos" && (
    //             <ul>
    //                 {this.state.todos.map((todo) => {
    //                     return (
    //                     <li key={todo.id}>{todo.title}</li>)
    //                 })}
    //             </ul>
    //         )}
    // </div>
}
    export default Employee;