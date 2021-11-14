import React, { Component } from 'react'

class ShortCircuitOperator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             status:true
        }
    }
    
    render() {
        return (
this.state.status && <div>status is true</div>
        )
    }
}

export default ShortCircuitOperator
