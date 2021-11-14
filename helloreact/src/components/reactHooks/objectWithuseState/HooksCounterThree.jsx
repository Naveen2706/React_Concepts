import React,{useState} from 'react'

function HooksCounterThree() {
    const[name,setName] = useState({firstName: '',lastName: ''})
    return (
 <form>                                                                                                                     {/*Spread operator is used as useState don't merge the values automatically like setState*/}
     <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName: e.target.value})}/>                 {/*setName-taken only firstname i.e value and rest all from spread operator name,e - event listner element*/}
     <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName: e.target.value})}/>
 <h2>Your first name is - {name.firstName}</h2>
 <h2>your last name is - {name.lastName}</h2>
 <h2>{JSON.stringify(name)}</h2>                {/*to display state name*/}
 </form>)
}

export default HooksCounterThree
