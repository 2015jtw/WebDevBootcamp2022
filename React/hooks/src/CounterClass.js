import React, { Component, useState } from 'react';

function CounterClass() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

export default CounterClass;