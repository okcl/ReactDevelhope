import React, { useState } from "react";

function useCounter( initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement(){
        setCounter((c) => c + 1)
    }

    function handleCounterDecrement(){
        setCounter((c) => c - 1)
    }

    function handleCounterReset(){
        setCounter(initialValue)
    }

    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset
    }
}

function HookCounter({ initialValue = 0}) {

    const {counter, onIncrement, onDecrement, onReset} = useCounter()

    return (
        <div className="text-white">
            <h2>Counter: {counter}</h2>
            <button className="bg-gray-700 hover:bg-gray-600 text-white rounded py-2 mx-1 px-4 border-none" onClick={onIncrement}>Increment </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white rounded py-2 mx-1 px-4 border-none" onClick={onDecrement}>Decrement </button>
            <button className="bg-red-800 hover:bg-red-700 text-white rounded py-2 px-4 border-none" onClick={onReset}>Reset</button>
        </div>
    )
}

export default HookCounter