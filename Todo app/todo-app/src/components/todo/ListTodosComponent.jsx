import React, { Component } from "react"
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'


class ListTodosComponent extends Component{
    constructor(props){
        super(props)
            this.state = {
                todos : [],
                message : null
            }
            this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
            this.updateTodoClicked = this.updateTodoClicked.bind(this)
            this.createTodoClicked = this.createTodoClicked.bind(this)
            this.refreshTodos = this.refreshTodos.bind(this)
            
        }
    shouldComponentUpdate(nextProps, nextState){
            //console.log(nextProps)
            //console.log(nextState)
            return true
    }
        
    componentDidMount(){
        this.refreshTodos()
    }   
    
    refreshTodos(){
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
    
    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedinUser()
        console.log(username, id)
        TodoDataService.deleteTodo(username, id)
        .then(
            Response => {this.setState({message : `Delete of state ${id} successful!`})
            this.refreshTodos()
            }
        )
    }

    updateTodoClicked(id){
        this.props.history.push(`/todos/${id}`)       
    }

    createTodoClicked(){
        this.props.history.push(`/todos/-1`) 
    }

    render(){
        return(
            <div>
                <h1>Todo's List</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Is Completed</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th>
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
                                        <td>{moment(todo.targetDate).format("MMM Do, YYYY")}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    </tr>
                                )    
                            }                    
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.createTodoClicked}>Add Todo</button>            
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent