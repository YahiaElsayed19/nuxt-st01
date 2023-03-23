import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../store/auth-ctx";
import { addTask, getTodosList } from "../../util/todos";
import AddTask from "./AddTask";
import TodoItem from "./TodoItem";
import { toggleTodo, deleteTodo } from "../../util/todos";
import classes from "./TodoList.module.css";
import { InfinitySpin } from 'react-loader-spinner'
function TodoList() {
    const [add, setAdd] = useState(false);
    const authCtx = useContext(AuthContext);
    const username = authCtx.selectedAccount.username;
    const password = authCtx.selectedAccount.password;
    const { data, refetch, isRefetching } = useQuery("GetTodos", () =>
        getTodosList(username, password)
    );
    const todos = data?.data;
    const addHandler = () => {
        setAdd((prev) => !prev);
    };
    const completeHandler = async (id) => {
        await toggleTodo(
            authCtx.selectedAccount.username,
            authCtx.selectedAccount.password,
            id
        );
        refetch();
    };
    const deleteHandler = async (id) => {
        await deleteTodo(
            authCtx.selectedAccount.username,
            authCtx.selectedAccount.password,
            id
        );
        refetch();
    };
    const addTaskHandler = async (task) => {
        setAdd(false)
        await addTask(
            authCtx.selectedAccount.username,
            authCtx.selectedAccount.password,
            task
        );
        refetch();
    };
    return (
        <div className={classes.todos}>
            <div className={classes.container}>
                {todos?.length===0?<p>There is no tasks start add some! </p> :<ul className={classes.list}>
                    {todos?.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            task={todo.task}
                            completed={todo.completed}
                            onCompleteHandler={completeHandler}
                            onDeleteHandler={deleteHandler}
                        />
                    ))}
                </ul>}
                {add && <AddTask onAddTask={addTaskHandler} />}
                <button className={classes["add-btn"]} onClick={addHandler}>
                    {add ? "Cancel" : "Add"}
                </button>
            </div>
        </div>
    );
}

export default TodoList;
