import axios from "axios";

export const getTodosList = function (username, password) {
    const response = axios.get("http://localhost:4000/todos", {
        auth: {
            username: username,
            password: password
        }
    });
    return response;
};
