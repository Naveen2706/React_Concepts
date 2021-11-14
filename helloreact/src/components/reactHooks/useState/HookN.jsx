import React,{useState} from 'react'

function HookN() {
    const val = 100;
    const [count,updateCount] = useState(val)
    return (
        <div>
            <button onClick={()=>updateCount(count - 5)}>count {count}</button>
        </div>
    )
}

export default HookN
