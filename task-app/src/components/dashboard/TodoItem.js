import React, { useContext, useState } from 'react'
import { AuthContext } from '../../store/auth-ctx'
import classes from './TodoItem.module.css'

const TodoItem = ({ task, completed, id, onCompleteHandler }) => {
    const authCtx = useContext(AuthContext)
    let taskClasses = `${classes.task} ${completed && classes.completed}`

    return (
        <li className={taskClasses}>
            <div>
                {task}
            </div>
            <div className={classes.actions}>
                <button className={classes.action} onClick={onCompleteHandler.bind(this, id)}>Completed</button>
                <button className={classes.action}>Delete</button>
            </div>
        </li>
    )
}

export default TodoItem