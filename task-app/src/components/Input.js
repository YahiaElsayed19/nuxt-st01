import React, { useContext, useRef } from 'react'
import { AuthContext } from '../store/auth-ctx'
import classes from './Input.module.css'
function Input() {
    const passwordRef = useRef()
    const authCtx = useContext(AuthContext)
    const onEnterPassword = () => {
        authCtx.setEnterdPassword(passwordRef.current.value)
        console.log(authCtx.enterdPassword);
    }
    return (
        <input type="password" className={classes.input} placeholder="enter your password" ref={passwordRef} onChange={onEnterPassword} />
    )
}

export default Input