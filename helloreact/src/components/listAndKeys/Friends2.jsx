import React from 'react'

function Friend2({friend}) {
    return (
        <div>
        <h1>Hello I am {friend.name}, my age is {friend.age} and I am from {friend.city}</h1>            
        </div>
    )
}

export default Friend2
