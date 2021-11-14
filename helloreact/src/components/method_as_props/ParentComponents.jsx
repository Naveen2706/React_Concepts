import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponents extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'Parent'
        }
    this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName){                 // functional parameter recived from childcomponent
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>           {/*function is sent as prop attribute in child tag*/} 
            </div>
        )
    }
}
export default  ParentComponents;