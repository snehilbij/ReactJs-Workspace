import React, { Component } from "react"
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class HeaderComponent extends Component{
    render(){
        const isUserLoggedin = AuthenticationService.isUserLoggedin();
        console.log(isUserLoggedin);
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand" href="">MyFirstApp</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedin && <li><Link className="nav-link" to="/welcome/:name">Home</Link></li>}
                        {isUserLoggedin && <li><Link className="nav-link" to="/todos">Welcome</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedin && <li><Link className="nav-link" to="/login">LogIn</Link></li>}
                        {isUserLoggedin && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>LogOut</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent