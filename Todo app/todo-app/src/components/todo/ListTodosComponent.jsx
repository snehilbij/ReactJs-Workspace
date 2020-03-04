import React, { Component } from "react"
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'


class ListTodosComponent extends Component{
    constructor(props){
        super(props)
            this.state = {
                todos : 
                [
                   // {id: 1, description: 'Learn React', isCompleted: false, targetDate : new Date()},
                   // {id: 2, description: 'Learn Spring Boot', isCompleted: false, targetDate : new Date()},
                   // {id: 3, description: 'Practice React and Spring Boot', isCompleted: false, targetDate : new Date()},
                   // {id: 4, description: 'Learn theory', isCompleted: false, targetDate : new Date()}
                ]
            }
        }
    shouldComponentUpdate(nextProps, nextState){
            //console.log(nextProps)
            //console.log(nextState)
            return true
    }
        
    componentDidMount(){
        let username = AuthenticationService.getLoggedinUser()
        TodoDataService.retrieveAllTodos(username)
        .then(
            Response => {
                //console.log(Response.data)
                this.setState({
                    todos : Response.data
                })
            }
        )

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
                                        <td>{todo.done}</td>
                                        <td>{todo.targetDate}</td>
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