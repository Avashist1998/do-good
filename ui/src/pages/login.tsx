import React from 'react';
import { useContext, useState } from 'react';
import { Button } from '@mui/material';

import type UserInfo from '../types/userInfo';
import { CurrentUserContext } from '../contexts/UserContext';
import LogInForm from '../forms/login';
import UserLogin from '../types/userLogin';
import SignUpUserForm from '../forms/signUp';
import UserSignUp from '../types/userSignUp';

const Login: React.FC = () => {
    const { setUserData } = useContext(CurrentUserContext);    
    const [showLoginIn, setShowLoginIn] = useState<boolean>(true)

    const login = (user: UserLogin) => {
        console.log("Logging in");
        console.log(user);
        sessionStorage.setItem("userData", JSON.stringify({username: "test", role: "admin", token: "test"}));
        setUserData({username: "test", role: "admin", token: "test"} as UserInfo);
    }

    const signUp = (user: UserSignUp) => {
        console.log("Signing up");
        console.log(user);
        sessionStorage.setItem("userData", JSON.stringify({username: "test", role: "admin", token: "test"}));
        setUserData({username: "test", role: "admin", token: "test"} as UserInfo);
    }
    return (
        <div>
            <div className="flex justify-center">            
                <Button color="primary" variant="contained" sx={{borderRadius: 0, }} disabled={!showLoginIn} onClick={() => {setShowLoginIn(false)}}>
                    Sign Up
                </Button>
                <Button color="success" variant="contained" sx={{borderRadius: 0,}} disabled={showLoginIn} onClick={() => {setShowLoginIn(true)}}>
                    Log In
                </Button>
            </div>
            { showLoginIn ? 
            <div>
                <h1>Login</h1>
                <LogInForm logInUser={login}/>
            </div> : 
            <div>
                <h1>Sign Up</h1>
                <SignUpUserForm submitUser={signUp}/>
            </div>
            }
        </div>
        )
}


export default Login;