import axios from "axios";
const baseUrl = "http://localhost:4000/todos"
export const getTodosList = function (username, password) {
    const response = axios.get(baseUrl, {
        auth: {
            username: username,
            password: password
        }
    });
    return response;
};

export const toggleTodo = function (username, password, id) {
    const response = axios.put(`${baseUrl}/${id}`,{}, {
        auth: {
            username: username,
            password: password
        }
    });
    return response;
};
export const deleteTodo = function (username, password, id) {
    const response = axios.delete(`${baseUrl}/${id}`, {
        auth: {
            username: username,
            password: password
        }
    });
    return response;
};