import { useContext } from "react"
import Login from "../components/Login"
import { AuthContext } from "../store/auth-ctx"

function LoginPage() {
    const authCtx = useContext(AuthContext)
    console.log(authCtx.idToken);
    return (
        <Login />
    )
}

export default LoginPage