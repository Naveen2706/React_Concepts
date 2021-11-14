import React, { Component } from 'react'

class MessageN extends Component {
    constructor() {
        super();
        this.state=({
            name:'Rahul patil',
            Message:'Hey'
        })
    }

    clickHandler(){
        this.setState({                        
            name:'Rahul',
            Message:'you are in the portal',
            greet:"Welcome"

        })
    }

    render() {
        return (
            <div>
                <h1> {this.state.name}, {this.state.Message}</h1>
                <h2>{this.state.greet}</h2>
                <button onClick={() => this.clickHandler()}>Click</button>      
            </div>
        )
    }
}
export default  MessageN