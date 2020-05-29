import React, { Component } from "react"
import moment from 'moment'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import TodoDataService from "../../api/todo/TodoDataService"
import AuthenticationService from "./AuthenticationService"

class TodoComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            id : this.props.match.params.id,
            description : '',
            targetDate : moment(new Date()).format('YYYY-MM-DD'),
            iscompleted : [],
            selectedValue : '',
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
        this.getIsCompletedItems = this.getIsCompletedItems.bind(this)
        this.handleDropdownChange = this.handleDropdownChange.bind(this)
    }

    handleDropdownChange(e){
        console.log(e.target.value)
        this.setState({
            selectedValue : e.target.value
        })        
    }

    getIsCompletedItems(){
        let username = AuthenticationService.getLoggedinUser()
        TodoDataService.retrieveAllIsCompletedItems(username)
        .then(response => this.setState({
            iscompleted : response.data
        }))
    }

    componentDidMount(){
        if(this.state.id === -1){
            return
        }
        let username = AuthenticationService.getLoggedinUser()
        TodoDataService.retrieveTodo(username, this.state.id)
        .then(response => this.setState({
            description : response.data.description,
            targetDate : moment(response.data.targetDate).format('YYYY-MM-DD')
        }))
    }

    onSubmit(values){
        let username = AuthenticationService.getLoggedinUser()
        let todo = ({id : this.state.id,
            description : values.description,
            targetDate : values.targetDate})
        if(this.state.id===-1){
            TodoDataService.createTodo(username, todo)
            .then(() => {this.props.history.push('/todos')})
        }else{
            TodoDataService.updateTodo(username, this.state.id, todo)
            .then(() => {this.props.history.push('/todos')})
        }        
    }

    validate(values){
        let errors = {}
        if(!values.description){
            errors.description = 'Enter a description'
        }else if(values.description.length < 5){
            errors.description = 'Enter atleast 5 characters in decription'
        }

        if(!moment(values.targetDate).isValid){
            errors.targetDate = 'Enter a valid date'
        }

        return errors
    }

    render(){
        let {description, targetDate} = this.state
    return(
    <div>
            <h1>Todo</h1>
            <div className="container">
                <Formik
                    initialValues={{
                          description, targetDate
                    }}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate = {this.validate}
                    enableReinitialize = {true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"></ErrorMessage>
                                <fieldset className="form-group">
                                <label>Description</label>
                                <Field className="form-control" type="text" name="description"></Field>
                                </fieldset>

                                <fieldset>
                                    <label>Is Completed</label>
                                    <select className="form-control" name="iscompleted" onClick={this.getIsCompletedItems} 
                                    onChange={this.handleDropdownChange}>
                                        {this.state.iscompleted.map(
                                            iscompleted =>
                                            <option value={iscompleted.id}>{iscompleted.name}</option>
                                        )}                                       
                                    </select>
                                </fieldset>
                                
                                <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field className="form-control" type="date" name="targetDate"></Field>
                                </fieldset>
                                
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }                    
                </Formik>
            </div>
        
    </div>
    )
    }
}

export default TodoComponent