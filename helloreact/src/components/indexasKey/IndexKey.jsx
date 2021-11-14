import React from 'react'

function IndexKey() {
    const friends = ['abhishek','adarsh','pratik']
    // const friendList = friends.map((friend,index) => <Friend key={index} friend={friend}/>)
    const friendsList = friends.map((friend,index)=> <h2 key={index}> {index} {friend}</h2>)
    return <div><h2>{friendsList}</h2></div>
}
export default IndexKey
