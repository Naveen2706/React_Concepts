import React from 'react'

export default function ChildComponentN(props) {
    return (
        <div>
            <button onClick={() => props.parentDetail('naveen')}>Details</button>
        </div>
    )
}
