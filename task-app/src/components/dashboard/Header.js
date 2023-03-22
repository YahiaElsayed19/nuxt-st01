import React, { useContext } from "react";
import { AuthContext } from '../../store/auth-ctx'
const Header = () => {
    const authCtx = useContext(AuthContext)
    const image = authCtx.selectedAccount.avatar
    const username = authCtx.selectedAccount.username
    return (
        <header>
            <div>
                <img src={image}/>
            </div>
            <p>{username}{}{}{}{}</p>
        </header>
    );
};

export default Header;
