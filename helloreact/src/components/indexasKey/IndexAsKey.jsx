import React from 'react'

function IndexAsKey() {
  const names = ['Bruce','Clark','Diana']               //on three condition
                                                            //1)don't have unique id
                                                            //2)static list and list will not change
                                                            //3)list will never reorder and filtered
  const nameList = names.map((name,index)=> <h2 key={index}> {index} {name} </h2> )  //index as key and index is passed as parameter in arrow function
  return <div>{nameList} </div>
}
export default IndexAsKey
