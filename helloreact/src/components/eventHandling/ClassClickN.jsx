import React, { Component } from 'react'

 class ClassClickN extends Component {
   
   clickHandler(){
       console.log('clicked the button');
       console.log('submitted sucessfully');
   }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Submit</button>
            </div>
        )
    }
}

export default ClassClickN
