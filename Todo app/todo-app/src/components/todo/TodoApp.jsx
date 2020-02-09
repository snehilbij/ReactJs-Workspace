import React, { Component } from "react";

class TodoApp extends Component{
    render(){
        return(
            <div className="todoApp">
                <LoginComponent/>
            </div>
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
            this.setState({isLoginSussessful : true})
            this.setState({isLoginFailed : false})
        }else{
            this.setState({isLoginSussessful:false})
            this.setState({isLoginFailed : true})
        }
    }
    
    render(){
        return(
            <div>
                {this.state.isLoginSussessful && <div>Login Successfull</div>}
                {this.state.isLoginFailed && <div>Invalid Credentials</div>}
                User Name : <input type="text" name="username" value={this.state.username} onChange={this.handChange}/>
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>            
        )
    }
}

export default TodoApp