import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>       {/*PARAMETER child is sent to parent function*/}
        </div>
    )
}

export default ChildComponent
