import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../../store/auth-ctx'
import classes from './Header.module.css'
const Header = () => {
    const authCtx = useContext(AuthContext)
    const image = authCtx.selectedAccount.avatar
    const name = authCtx.selectedAccount.name
    const navigate = useNavigate()
    const onLogoutHandler = () => {
        authCtx.logout()
        navigate("/", { replace: true })
    }
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.info}>
                    <div className={classes['image-wrapper']}>
                        <img src={image} alt="avatar" className={classes.image} />
                    </div>
                    <p className={classes.name}>{name}</p>
                </div>
                <button className={classes['logout-btn']} onClick={onLogoutHandler}>LOGOUT</button>
            </div>
        </header>
    );
};

export default Header;
