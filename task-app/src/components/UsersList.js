import React from "react";
import { useQuery } from "react-query";
import { getUsersList } from "../util/getUsers";
import UserItem from "./UserItem";
import classes from "./UsersList.module.css";
function UsersList() {
    const { data } = useQuery("UsersList", () => getUsersList());
    const usersList = data?.data;
    return (
        <ul className={classes["users-list"]}>
            {usersList?.map((user) => (
                <UserItem key={user.id} name={user.name} username={user.username} avatar={user.avatar} />
            ))}
        </ul>
    );
}

export default UsersList;
