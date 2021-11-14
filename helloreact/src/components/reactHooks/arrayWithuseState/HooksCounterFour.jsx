import React,{useState} from 'react'

function HooksCounterFour() {
    const [items, setItem] = useState([])

    const addItem = () => {
        setItem([ ...items, {
            id: items.length,
            value: Math.floor(Math.random()*10) + 1
        }])                                                     //function to add new number to array,
    }

    return (
        <div>
    <button onClick={addItem}>Add a number</button>                     {/*button for adding new number and calls the addItem funct*/}
        <ul>
        {items.map(item => <li key={item.id}>{item.value}</li>)  }                     {/*for returning value and printing it per click*/}
        </ul>    
        </div>
    )
}

export default HooksCounterFour
