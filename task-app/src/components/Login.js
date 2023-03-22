import React, { useContext } from 'react'
import { AuthContext } from '../store/auth-ctx';
import classes from "./Login.module.css";
import UsersList from './UsersList';
import Input from "./Input";
import Button from './Button';

function Login() {
    const authCtx = useContext(AuthContext)
    return (
        <div className={classes["login-page"]}>
            <div className={classes.container}>
                <h1>Choose an account.</h1>
                <UsersList />
                {authCtx.isSelected && <><Input /> <Button /></>}
            </div>
        </div>
    )
}

export default Login