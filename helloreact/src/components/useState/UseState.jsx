import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=>console.log('call back value',this.state.count))          //callback   //whenever you want to execute something after state change pass it as callback
       
        this.setState((prevState) => ({                                      //update value by passing function as the incrementFive depends on the prev values
            count:prevState.count + 1
        }))
        console.log(this.state.count);                                      //as setState is async function
    }
    
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                  <div>  count - {this.state.count}</div>
                    <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}
export default Counter