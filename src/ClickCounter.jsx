import React, {useState} from "react";


function ClickCounter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
        setCounter(c => c + 1)
    }

    function handleCounterReset() {
        setCounter(initialValue)
    }

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button className="bg-gray-700 hover:bg-gray-600 text-white rounded py-2 mx-1 px-4 border-none" onClick={handleCounterIncrement}>Increment </button>
            <button className="bg-red-800 hover:bg-red-700 text-white rounded py-2 px-4 border-none" onClick={handleCounterReset}>Reset</button>
        </div>
    )
}

export default ClickCounter