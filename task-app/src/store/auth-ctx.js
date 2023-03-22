import { createContext, useState } from "react";
export const AuthContext = createContext({
    selectedAccount: {},
    setSelectedAccount: () => { },
    isSelected: false,
    enterdPassword: "",
    setEnterdPassword: () => { },
    logout: () => { },

})


function AuthProvider({ children }) {
    const [selectedAccount, setSelectedAccount] = useState({})
    const [enterdPassword, setEnterdPassword] = useState("")
    const setSelectedAccountFn = (username, password, avatar, name) => {
        setSelectedAccount({
            username: username,
            password: password,
            avatar: avatar,
            name: name,
        })
    }
    const setEnterdPasswordFn = (password) => {
        setEnterdPassword(password)
    }
    const logoutFn = () => {
        setSelectedAccount({})
        setEnterdPassword("")
    }
    const value = {
        selectedAccount: selectedAccount,
        setSelectedAccount: setSelectedAccountFn,
        isSelected: !!selectedAccount.username,
        enterdPassword: enterdPassword,
        setEnterdPassword: setEnterdPasswordFn,
        logout: logoutFn,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider;