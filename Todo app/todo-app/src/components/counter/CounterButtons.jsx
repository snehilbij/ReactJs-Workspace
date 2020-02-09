import React, {Component} from 'react'
import propTypes from 'prop-types'


class CounterButtons extends Component{
    render(){
        return(
              <div className="counter">
                  <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                  <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
              </div>  
        )
    }

    increment(){
        this.setState({
            counter : this.state.counter+this.props.by
        })
        this.props.incrementMethod(this.props.by);
    }

    decrement(){
        this.setState({
            counter : this.state.counter-this.props.by
        })
        this.props.decrementMethod(this.props.by);
    }
}

CounterButtons.defaultProps = {
    by : 1
}

CounterButtons.propTypes = {
    by : propTypes.number
}

export default CounterButtons