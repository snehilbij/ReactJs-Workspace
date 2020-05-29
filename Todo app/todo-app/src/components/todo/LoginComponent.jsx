import React, { Component } from "react"
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username : 'Snehil Sharma',
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
        if(this.state.username==='Snehil Sharma' && this.state.password==='123456'){
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

export default LoginComponent