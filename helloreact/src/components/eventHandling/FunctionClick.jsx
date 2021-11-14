import React from 'react'

function functionClick() {
    function clickHandler() {                               //function inside function
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>           
        </div>                                              // event handler is a function and not a function call
    )
}

export default functionClick