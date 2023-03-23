import React from 'react'
import classes from './TodoItem.module.css'

const TodoItem = ({ task, completed }) => {
    let taskClasses = `${classes.task} ${completed && classes.completed}`
    return (
        <li className={taskClasses}>
            <div>
                {task}
            </div>
            <div className={classes.actions}>
                <button className={classes.action}>Completed</button>
                <button className={classes.action}>Delete</button>
            </div>
        </li>
    )
}

export default TodoItem