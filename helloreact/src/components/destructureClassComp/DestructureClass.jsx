import React, { Component } from 'react'

export default class DestructureClass extends Component {
    render() {
        const{name,heroName} = this.props                   //destructuring is done inside render in class component
        // const{state1,state2} = this.state                //state also work the same for destructuring
        return (
            <div>
                <h1>Welcome {name} a.k.a {heroName}</h1>
            </div>
        )
    }
}
