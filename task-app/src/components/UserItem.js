import React, { useContext } from "react";
import { AuthContext } from "../store/auth-ctx";
import classes from "./UserItem.module.css";
function UserItem({ avatar, name }) {
    const authCtx = useContext(AuthContext)
    const onSelectHandler = () => {
        let password = ""
        if (name === "zucker") {
            password = "123456"
        }
        if (name === "felon") {
            password = "123123"
        }
        if (name === "robon") {
            password = "secret"
        }
        authCtx.setSelectedAccount(name, password)
    }
    let userItemClasses = `${classes["user-item"]} ${name === authCtx.selectedAccount.username && classes.active}`
    return (
        <li className={userItemClasses} onClick={onSelectHandler}>
            <div className={classes["img-wrapper"]}>
                <img src={avatar} alt="avatar" />
            </div>
            <p>@{name}</p>
        </li>
    );
}

export default UserItem;
