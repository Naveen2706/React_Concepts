import React from 'react'

function functionClickN() {
    function clickHandler() {
        console.log('Submitted')
    }
    return (
        <div>
            <button onClick={clickHandler}>Submit</button>           
        </div>                                              // event handler is a function and not a function call
    )
}

export default functionClickN