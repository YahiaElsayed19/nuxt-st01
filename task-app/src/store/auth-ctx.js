import { createContext, useState } from "react";
export const AuthContext = createContext({
    selectedAccount: {},
    setSelectedAccount: () => { },
    isSelected: false,
    enterdPassword: "",
    setEnterdPassword: () => { },

})


function AuthProvider({ children }) {
    const [selectedAccount, setSelectedAccount] = useState({})
    const [enterdPassword, setEnterdPassword] = useState("")
    const setSelectedAccountFn = (username, password) => {
        setSelectedAccount({
            username: username,
            password: password,
        })
    }
    const setEnterdPasswordFn = (password) => {
        setEnterdPassword(password)
    }
    const value = {
        selectedAccount: selectedAccount,
        setSelectedAccount: setSelectedAccountFn,
        isSelected: !!selectedAccount.username,
        enterdPassword: enterdPassword,
        setEnterdPassword: setEnterdPasswordFn,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider;