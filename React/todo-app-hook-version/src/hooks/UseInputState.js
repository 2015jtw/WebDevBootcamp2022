import { useState } from "react";

export default function UseInputState(initialVal) {

    const [value, setValue] = useState(initialVal);

    // useful to change the value of something like email or age
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    // useful for resetting the value of email or age back to nothing
    const reset = () => {
        setValue("")
    }

    // returning these 3 value to use in other projects
    return [value, handleChange, reset]
}