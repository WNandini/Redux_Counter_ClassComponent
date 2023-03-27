
import React from 'react'
import { connect } from 'react-redux'
import { addValue, decreaseValue } from '../redux/action'
import { v4 as uuidv4 } from 'uuid'

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0
        }
    }

    handleIncreaseValue = () => {
        this.setState({value: this.state.value+1})
        this.props.addValue({value: this.state.value, id: uuidv4()})
    }

    handleDecreaseValue = () => {
        this.setState({value: this.state.value-1})
        this.props.decreaseValue({value: this.state.value, id: uuidv4()})
    }
    
    render() {
        return (
            <div>
                <h3 >{this.state.value}</h3>
                <button onClick={this.handleIncreaseValue}>Increase</button>
                <button onClick={this.handleDecreaseValue}>Decrease</button>
            </div>
            
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addValue: data => dispatch(addValue(data)),
        decreaseValue: data => dispatch(decreaseValue(data))
    }
}

export default connect(null, mapDispatchToProps)(Counter)