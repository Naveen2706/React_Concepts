import React, { Component } from 'react'

class TernaryOperator extends Component {
constructor(props) {
    super(props)

    this.state = {
         status:false
    }
}

    render() {
        return (
                (this.state.status) ? 
                <div>the status is true</div> :
                <div>the status is false</div>
        )
    }
}

export default TernaryOperator
