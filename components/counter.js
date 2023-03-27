
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
            <div className='flex flex-col justify-center items-center bg-gradient-to-b from-cyan-500 to-blue-500 h-screen'>
                <div className='bg-slate-50 p-p border-solid border-2 border-black rounded-lg'>
                    <p className='text-lg text-center'>{this.state.value}</p>
                    <button className='my-3 w-full bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={this.handleIncreaseValue}>Increase</button>
                    <button className='my-3 w-full bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={this.handleDecreaseValue}>Decrease</button>
                </div>
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