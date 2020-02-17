import React, { Component } from "react"
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class TodoApp extends Component{
    render(){
        return(
            <div className="todoApp">
            <Router>
                <>
                <HeaderComponent/>
                <Switch>
                <Route path="/" exact component={LoginComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/welcome/:name" component={WelcomeComponent}/>
                <Route path="/todos" component={ListTodosComponent}/>
                <Route path="/logout" component={LogoutComponent}/>
                <Route component={ErrorComponent}/>
                </Switch>
                <FooterComponent/>
                </>
            </Router>
            </div>
        )
    }
}

function ErrorComponent(){
    return(
        <div>
            An error occured !!
        </div>
    )
}

class HeaderComponent extends Component{
    render(){
        const isUserLoggedin = AuthenticationService.isUserLoggedin();
        console.log(AuthenticationService.isUserLoggedin());
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand" href="">MyFirstApp</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedin && <li><Link className="nav-link" to="/welcome/:name">Home</Link></li>}
                        <li><Link className="nav-link" to="/todos">Welcome</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">LogIn</Link></li>
                        <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>LogOut</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component{
    render(){
        return(
            <footer className="footer">
                <span className="text-muted">All right reserved @snehil_sharma</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component{
    render(){
        return(
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank you for visiting.
                </div>
            </>
        )
    }
}

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
                                    <tr>
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

class WelcomeComponent extends Component{
    render(){
        return(
            <>
            <h1>Welcome!</h1>
            <div className="container">
                {this.props.match.params.name}
            </div>
            </>
        )
    }
}

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username : 'snehil_sharma',
            password : '',
            isLoginSussessful : false,
            isLoginFailed : false
        }
        this.handChange = this.handChange.bind(this)    
        this.loginClicked = this.loginClicked.bind(this)
    }

    handChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    loginClicked(){
        if(this.state.username==='snehil_sharma' && this.state.password==='123456'){
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({isLoginSussessful : true})
            // this.setState({isLoginFailed : false})
        }else{
            this.setState({isLoginSussessful:false})
            this.setState({isLoginFailed : true})
        }
    }
    
    render(){
        return(
            <div>
                <h1>Login</h1>
                 <div className="container">
                    {this.state.isLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    User Name : <input type="text" name="username" value={this.state.username} onChange={this.handChange}/>
                    Password : <input type="password" name="password" value={this.state.password} onChange={this.handChange}/>
                    <button  className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>            
        )
    }
}

export default TodoApp