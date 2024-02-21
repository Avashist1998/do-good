import React from 'react';
import { useContext, useState } from 'react';
import { Button } from '@mui/material';

import type UserInfo from '../types/userInfo';
import { CurrentUserContext } from '../contexts/UserContext';
import LogInForm from '../forms/login';
import UserLogin from '../types/userLogin';
import SignUpUserForm from '../forms/signUp';
import UserSignUp from '../types/userSignUp';
import PageTemplate from './PageTemplate';
import '../components/login.css'

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
        <PageTemplate>
            <div className="flex justify-center">   
                <Button color="primary" variant="contained" sx={{borderRadius: 0, }} disabled={!showLoginIn} onClick={() => {setShowLoginIn(false)}}>
                    Sign Up
                </Button> 
                <Button color="success" variant="contained" sx={{borderRadius: 0,}} disabled={showLoginIn} onClick={() => {setShowLoginIn(true)}}>
                    Log In
                </Button>
            </div>
            <div className="flex justify-center">

                { showLoginIn ? 
                <div>
                    <div className="flex justify-center">
                        <h1 className="text-8xl font-bold m-5 text-center"><div className="header">Log In</div></h1>
                    </div>
                    <LogInForm logInUser={login}/>
                </div> : 
                <div>
                    <div className="flex justify-center">
                        <h1 className="text-8xl font-bold m-3 text-center"><div className="header">Sign Up</div></h1>
                    </div>
                    <SignUpUserForm submitUser={signUp}/>
                </div>
                }
            </div>
        </PageTemplate>
        )
}


export default Login;