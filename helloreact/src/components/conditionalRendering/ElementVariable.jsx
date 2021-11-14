import React, { Component } from 'react'

class ElementVariable extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             status:false
        }
    }
    
    
    render() {

let operation 
        if(this.state.status) {
            operation = <div>status is true</div>
        } else {
            operation = <div>status is false</div>
        }
        return operation
    }
}

export default ElementVariable
