import React, { useContext } from "react";
import { AuthContext } from "../store/auth-ctx";
import classes from "./UserItem.module.css";
function UserItem({ avatar, username ,name}) {
    const authCtx = useContext(AuthContext)
    const onSelectHandler = () => {
        let password = ""
        if (username === "zucker") {
            password = "123456"
        }
        if (username === "felon") {
            password = "123123"
        }
        if (username === "robon") {
            password = "secret"
        }
        authCtx.setSelectedAccount(username, password,avatar,name)
    }
    let userItemClasses = `${classes["user-item"]} ${username === authCtx.selectedAccount.username && classes.active}`
    return (
        <li className={userItemClasses} onClick={onSelectHandler}>
            <div className={classes["img-wrapper"]}>
                <img src={avatar} alt="avatar" />
            </div>
            <p>@{username}</p>
        </li>
    );
}

export default UserItem;
