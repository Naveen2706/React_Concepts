import React from 'react'

const DestructFunct = (props) => {
    const {name,designation} = props
    return (
        <div>
            <h2>I am {name} and I am a {designation}</h2>
        </div>
    )
}

export default DestructFunct
