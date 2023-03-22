import React from 'react'
import classes from './UserItem.module.css'

function UserItem({ avatar, name }) {
    return (
        <li className={classes['user-item']}>
            <div className={classes['img-wrapper']}> <img src={avatar} alt="avatar" /></div>
            <p>{name}</p>
        </li>
    )
}

export default UserItem