import React, { Component } from 'react'
import ChildComponentN from './ChildComponentN'

class ParentComponentN extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             motherName:'anita'
        }
this.parentName=this.parentName.bind(this)
    }
    
parentName(child){
    console.log(`${child} mother's name is ${this.state.motherName}`);
}

    render() {
        return (
            <div>
                <ChildComponentN parentDetail={this.parentName}/>
            </div>
        )
    }
}

export default ParentComponentN
