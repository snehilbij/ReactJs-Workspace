import React, { Component } from "react"


class ListTodosComponent extends Component{
    constructor(props){
        super(props)
            this.state = {
                todos : 
                [
                    {id: 1, description: 'Learn React', isCompleted: false, targetDate : new Date()},
                    {id: 2, description: 'Learn Spring Boot', isCompleted: false, targetDate : new Date()},
                    {id: 3, description: 'Practice React and Spring Boot', isCompleted: false, targetDate : new Date()},
                    {id: 4, description: 'Learn theory', isCompleted: false, targetDate : new Date()}
                ]
            }
        }

    render(){
        return(
            <div>
                <h1>Todo's List</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Is Completed</th>
                                <th>Target Date</th>
                            </tr>                        
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.isCompleted.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )    
                            }                    
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent