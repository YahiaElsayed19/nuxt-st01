import React from 'react'
import { useQuery } from 'react-query'
import { getUsersList } from '../util/getUsers'
import UserItem from './UserItem';
import classes from './UsersList.module.css'
function UsersList() {
    const { data } = useQuery("UsersList", () => getUsersList())
    console.log(data?.data);
    const usersList = data?.data;
    return (
        <div className={classes['login-page']}>
            <div className={classes.container}>
                <ul className={classes['users-list']}>
                    {usersList?.map((user) => <UserItem key={user.id} name={user.username} avatar={user.avatar} />)}
                </ul>
            </div>
        </div>
    )
}

export default UsersList