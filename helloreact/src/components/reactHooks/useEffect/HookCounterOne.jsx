import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    
    //use effect runs everytimes component is rendered, it is used to implement sideeffects in funct comp and is alternative for life cycle methods of componentmount, compupdate and compunmount
    useEffect(() => {
     document.title = `you clicked ${count} times`                              
    })

    return (
            <button onClick={() => setCount(count + 1)}>Cliked {count} times</button>
    )
}

export default HookCounterOne
