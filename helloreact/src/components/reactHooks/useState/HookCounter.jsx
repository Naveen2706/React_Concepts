import React,{useState} from 'react'

//hooks//
//call  at the top
//don't call inside loops,conditions,nested funct
//only call hooks from react function

function HookCounter() {
    
    const [count, setCount] = useState(0)  //use state function takes three things -> initial val,current val, funct for update
    
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter
