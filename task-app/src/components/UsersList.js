import React from 'react'
import { useQuery } from 'react-query'
import { getUsersList } from '../util/getUsers'

function UsersList() {
    const { data } = useQuery("UsersList", () => getUsersList())
    console.log(data?.data);
    const usersList = data?.data;
    return (
        <div>UsersList</div>
    )
}

export default UsersList