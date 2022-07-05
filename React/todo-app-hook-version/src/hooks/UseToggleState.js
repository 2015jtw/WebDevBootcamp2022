import { useState } from 'react';

export default function UseToggleState(initialVal = false) {

    // call useState, reserve piece of state
    const [state, setState] = useState(initialVal);

    const toggle = () => {
        setState(!state);
    };

    return [state, toggle]
}

