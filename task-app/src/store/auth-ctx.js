import { createContext, useState } from "react";
export const AuthContext = createContext({
    selectedAccount: {},
    setSelectedAccount: () => { },
})


function AuthProvider({ children }) {
    const [selectedAccount, setSelectedAccount] = useState({})
    const setSelectedAccountFn = (username, password) => {
        setSelectedAccount({
            username: username,
            password: password,
        })
    }
    const value = {
        selectedAccount: selectedAccount,
        setSelectedAccount: setSelectedAccountFn,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider;