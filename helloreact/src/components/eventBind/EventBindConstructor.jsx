import React, { Component } from 'react'

class EventBindConstructor extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"hello buddy"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message:"submitted"
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
<button onClick={this.clickHandler}>submit</button>
            </div>
        )
    }
}

export default EventBindConstructor
