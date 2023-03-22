import axios from "axios";

export const getUsersList = function () {
    const response = axios.get("http://localhost:4000/users");
    return response;
};
