import { useState } from "react";


export default function Counter({ initialCount }) { 
    const [count, setCount] = useState(initialCount);

    const increment = () => { 
        setCount((prev) => prev + 1)
    }

    const decrement = () => { 
        setCount((prev) => prev - 1)
    }

    const restart = () => { 
        setCount(0)
    }

    const switchSigns = () => { 
        setCount((prev) => prev * -1)
    }

    return (
        <>
            <h1>Count:</h1>
            <h1 data-testid='countNumber'>{count}</h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={restart}>Restart</button>
                <button onClick={switchSigns}>Switch Signs</button>
            </div>
        </>
    )
}