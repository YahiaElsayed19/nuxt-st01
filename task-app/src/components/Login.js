import React from 'react'
import classes from "./Login.module.css";
import UsersList from './UsersList';

function Login() {
    return (
        <div className={classes["login-page"]}>
            <div className={classes.container}>
                <UsersList />
            </div>
        </div>
        )
}

export default Login