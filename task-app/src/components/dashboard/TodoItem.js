import React, { useContext, useState } from 'react'
import { AuthContext } from '../../store/auth-ctx'
import { toggleTodo } from '../../util/todos'
import classes from './TodoItem.module.css'

const TodoItem = ({ task, completed, id }) => {
    const [edit, setEdit] = useState(false)
    const authCtx = useContext(AuthContext)
    let taskClasses = `${classes.task} ${completed && classes.completed}`
    const onCompleteHandler = () => {
        toggleTodo(authCtx.selectedAccount.username, authCtx.selectedAccount.password, id)
    }
    return (
        <li className={taskClasses}>
            <div>
                {task}
            </div>
            <div className={classes.actions}>
                <button className={classes.action} onClick={onCompleteHandler}>Completed</button>
                <button className={classes.action}>Delete</button>
            </div>
        </li>
    )
}

export default TodoItem