import React, { Component } from 'react'

class UserGreet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {                      //jsx doesn't support if else block so is taken out of jsx
                
                                                                                                            //first if else 
        // if(this.state.isLoggedIn){
                //    return <div>hello vishwas this is first approach if else</div>
                // }
                // else{
                //   return  <div>hello guest this is first approach if else</div>
                // }
                                                                                                            //second element variable  
                // let message 
                // if(this.state.isLoggedIn){
                //   message = <div>hello vishwas this is second approach element variable</div>
                // } else {
                //     message = <div>hello guest this is second approach element variable</div>
                // }
    
                // return <div>{message}</div>             //this is second approach of calling message

                                                                                                                //third ternary operator
                // return(
                //         this.state.isLoggedIn ?                         
                //         <div>hello vishwas this is third approach ternary</div>:                //id ternary is true
                //         <div>hello guest  this is third approach ternary</div>                      //if ternary is false
                // )
                                                                                                        //fourth approach short circuit
            return this.state.isLoggedIn && <div>welcome viswas fourth approach of short circuit</div>          // first condition is checked and if first true second executed
            }

}

export default UserGreet
