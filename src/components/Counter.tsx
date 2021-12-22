import { useState } from 'react'


export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementar = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <h3>Counter: useState </h3>
            <span>Valor: {counter} </span>

            <br></br>
            
            <button onClick={ incrementar }>
                +1
            </button>
        </div>
    )
}
