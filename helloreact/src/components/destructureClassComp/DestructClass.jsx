import React, { Component } from 'react'

export default class DestructClass extends Component {
    render() {
        const{name,designation} = this.props                   //destructuring is done inside render in class component outside return
        return (
            <div>
                <h1>I am {name} and I am a {designation}</h1>
            </div>
        )
    }
}
