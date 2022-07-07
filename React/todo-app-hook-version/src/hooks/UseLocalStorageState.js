import React, { useState, useEffect } from 'react';


export default function UseLocalStorageState(key, defaultValue) {

    // make piece of state based off of value in localStorage
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
        }
        catch {
            val = defaultValue;
        }
        return val;
    })

    // useEffect to update localStorage when that piece of state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state, setState]
}