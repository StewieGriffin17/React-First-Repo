import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleDecrease = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div className="myClass">
            <h3>Rate this from 0 to 10 : {count}</h3>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}