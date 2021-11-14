import React from 'react'

const PropsN = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>The price per piece is {props.val}</h3>
            <p>And your 10 unit {props.name} order total is {props.val*10}</p>
        </div>
    )
}

export default PropsN