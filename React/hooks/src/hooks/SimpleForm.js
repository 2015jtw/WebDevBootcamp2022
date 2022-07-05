import React from 'react'
import useFormState from './useFormState'


export default function SimpleForm() {

    // initialized the 3 exported values from useFormState to use here --> separate the functions
    const [email, updateEmail, resetEmail] = useFormState();
    const [password, updatePassword, resetPassword] = useFormState();

    return (
        <div>
            <h1>The value is: {email} and password is: {password} </h1>
            <input type="text" value={email} onChange={updateEmail} placeholder="email" />
            <input type="text" value={password} onChange={updatePassword} placeholder="password" />
            <button onClick={resetEmail}>Reset Email</button>
            <button onClick={resetPassword}>Reset Password</button>
        </div>
    )
}
