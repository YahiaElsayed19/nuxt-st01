import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/auth-ctx";
import classes from "./Button.module.css";
function Button() {
    const [error, setError] = useState(false);
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const onLoginHandler = () => {
        if (authCtx.enterdPassword === authCtx.selectedAccount.password) {
            navigate("/home", { replace: true });
            authCtx.setLoggedIn()
        } else {
            setError(true);
        }
    };
    return (
        <>
            <button className={classes["login-btn"]} onClick={onLoginHandler}>
                LOGIN
            </button>
            {error && <p className={classes['err-msg']}>Wrong password!</p>}
        </>
    );
}

export default Button;
