import React, { Component } from 'react'

class UseStateN extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 100
        }
    }
    
    decrement(){
        // this.setState({
        //     count:this.state.count - 1
        // },()=>console.log("callback value",this.state.count))
    
    this.setState((prevState)=>({
        count:prevState.count - 1
    }),()=>console.log('callback value',this.state.count))
    }
    
    decrementFive(){
        this.decrement()
        this.decrement()
        this.decrement()
        this.decrement()
        this.decrement()
    }

    render() {
        return (
            <div> 
            <div>count - {this.state.count}</div>
           <button onClick={()=>this.decrementFive()}>Decrement</button>
            </div>
        )
    }
}

export default UseStateN;
