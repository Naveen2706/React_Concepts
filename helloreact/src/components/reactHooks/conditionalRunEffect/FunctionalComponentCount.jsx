import React, { useEffect, useState } from 'react'

function FunctionalComponentCount() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
     document.title=`you clicked ${count} times`   
    console.log('useEffect - Updating document title');
    },[count])
   
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>click {count} times</button>
        <input type='text' value={name} onChange={e=>setName(e.target.value)} />
        <h2>{JSON.stringify(name)}</h2>  
        </div>
    )
}

export default FunctionalComponentCount
