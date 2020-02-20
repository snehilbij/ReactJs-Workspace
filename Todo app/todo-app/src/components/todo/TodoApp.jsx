import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import HeaderComponent from './HeaderComponent'
import WelcomeComponent from './WelcomeComponent'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'

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
                <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
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

export default TodoApp