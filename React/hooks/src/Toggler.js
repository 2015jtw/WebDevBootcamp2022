import React from 'react';
import useToggle from './hooks/useToggle';


function Toggler() {

    const [isHappy, toggleHappy] = useToggle(true);
    const [isFull, toggleFull] = useToggle(false);

    return (
        <div>
            <h1 onClick={toggleHappy}>{isHappy ? 'yay' : 'sad'}</h1>
            <h1 onClick={toggleFull}>{isFull ? 'so full' : 'so hungry'}</h1>
        </div>
    )
}

export default Toggler;