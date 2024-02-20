import React from 'react';
import { useContext } from 'react';

import type UserInfo from '../types/userInfo';
import { CurrentUserContext } from '../contexts/UserContext';

const Login: React.FC = () => {
    const { setUserData } = useContext(CurrentUserContext);    
    const login = () => {
        console.log("Logging in");
        sessionStorage.setItem("userData", JSON.stringify({username: "test", role: "admin", token: "test"}));
        setUserData({username: "test", role: "admin", token: "test"} as UserInfo);
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={login}>
                login
            </button>
        </div>
        )
}


export default Login;