import React, { Component } from 'react'

export class EventBindClassArrow extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Message:"form input"
        }
    }
    

    clickHandler = () =>{
        this.setState({
            Message:"form submitted"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.Message}</div>
                <button onClick={this.clickHandler}>submit form</button>
            </div>
        )
    }
}

export default EventBindClassArrow
