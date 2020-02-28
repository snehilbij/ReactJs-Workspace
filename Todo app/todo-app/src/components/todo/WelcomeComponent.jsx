import React, {Component} from 'react'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component{
    constructor(props){
        super(props)

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage : ''
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
    }

    render(){
        return(
            <>
            <h1>Welcome!</h1>
            <div className="container">
                {this.props.match.params.name}
            </div>
            <div>
                Click here to get a customized welcome message.
                <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Message</button>
            </div>
            <div>
                <h3>{this.state.welcomeMessage}</h3>
                
            </div>
            </>
        )
    }

    retrieveWelcomeMessage(){        
       // HelloWorldService.executeHelloWorldService()
       // .then(Response => this.handleSuccessfulResponse(Response))

        HelloWorldService.executeHelloWorldBeanService()
        .then(Response => this.handleSuccessfulResponse(Response))
    }

    handleSuccessfulResponse(response){
        console.log(response)
        this.setState({welcomeMessage : (response.data.message+response.data.name)})

    }


}   


export default WelcomeComponent