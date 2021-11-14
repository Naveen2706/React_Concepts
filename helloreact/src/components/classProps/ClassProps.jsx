import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        return (
            <div>
                <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
            </div>
        )
    }
}
