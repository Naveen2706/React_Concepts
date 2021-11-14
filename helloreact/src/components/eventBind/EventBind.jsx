import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Message:"hello"
        }

        // this.eventHandler = this.eventHandler.bind(this)   //third way by direct binding in constructor
    }
    
//     eventHandler(){
// this.setState({
//     Message:"Good Bye"
// })
//     }
    
eventHandler = () =>{
    this.setState({
        Message:"Good Bye"
    })
}
    render() {
        return (
            <div>
                <div>{this.state.Message}</div>
                {/* <button onClick={this.eventHandler.bind(this)}>click first way</button>       event binding with this ,first way okay for small component  */}
      {/* <button onClick={()=>this.eventHandler()}>click second way</button>           arrow function is used to call the eventhandler */}
         {/* <button onClick={this.eventHandler}>click third way</button>           //third way by binding in constructor */}
           <button onClick={this.eventHandler}>click fourth way</button>   {/*class arrow function method*/}
            </div>                                                                  
        )
    }
}

export default EventBind
