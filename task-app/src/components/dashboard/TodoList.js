import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../store/auth-ctx";
import { getTodosList } from "../../util/todos";
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
    const completeHandler = (id) => {
        toggleTodo(
            authCtx.selectedAccount.username,
            authCtx.selectedAccount.password,
            id
        );
        refetch();
    };
    const deleteHandler = (id) => {
        deleteTodo(
            authCtx.selectedAccount.username,
            authCtx.selectedAccount.password,
            id
        );
        refetch();
    };
    return (
        <div className={classes.todos}>
            <div className={classes.container}>
                {isRefetching ? <InfinitySpin
                    width='200'
                    color="#2196f3"
                /> : <ul className={classes.list}>
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
                {add && <AddTask />}
                <button className={classes["add-btn"]} onClick={addHandler}>
                    {add ? "Cancel" : "Add"}
                </button>
            </div>
        </div>
    );
}

export default TodoList;
