import React from 'react';
import { useContext, useState } from 'react';
import { Button, Icon } from '@mui/material';

import type UserInfo from '../types/userInfo';
import { CurrentUserContext } from '../contexts/UserContext';
import LogInForm from '../forms/login';
import UserLogin from '../types/userLogin';
import SignUpUserForm from '../forms/signUp';
import UserSignUp from '../types/userSignUp';
import PageTemplate from './PageTemplate';
import { useNavigate } from 'react-router-dom';

import Logo from '/logo.svg';

const LoginPage: React.FC = () => {

    const navigate = useNavigate();
    const { setUserData } = useContext(CurrentUserContext);    
    const [showLoginIn, setShowLoginIn] = useState<boolean>(true)

    const login = (user: UserLogin) => {
        console.log("Logging in");
        console.log(user);
        sessionStorage.setItem("userData", JSON.stringify({username: "test", role: "admin", token: "test"}));
        setUserData({username: "test", role: "admin", token: "test"} as UserInfo);
        navigate("/")
    }

    const signUp = (user: UserSignUp) => {
        console.log("Signing up");
        console.log(user);
        sessionStorage.setItem("userData", JSON.stringify({username: "test", role: "admin", token: "test"}));
        setUserData({username: "test", role: "admin", token: "test"} as UserInfo);
    }
    return (
        <PageTemplate>
            <div className="h-lvh py-16">
            <div className="flex justify-center space-x-4">
                <Button variant="contained" sx={{borderRadius: 0, backgroundColor: 'white', color: 'black' }} disabled={!showLoginIn} onClick={() => {setShowLoginIn(false)}}>
                    Sign Up
                </Button> 
                <Button color="primary" variant="contained" sx={{borderRadius: 0,  backgroundColor: 'white', color: 'black' }} disabled={showLoginIn} onClick={() => {setShowLoginIn(true)}}>
                    Log In
                </Button>
            </div>

            <div className="flex justify-center">

                { showLoginIn ? 
                <div>
                <div className="flex justify-center">
                    <h1 className="text-5xl md:text-8xl font-bold m-5 text-center animate-pulse">
                        <span className="header text-green-950">Log In</span>
                    </h1>
                </div>
                <LogInForm logInUser={login}/>
            </div> 
            : 
            <div>
                <div className="flex justify-center">
                    <h1 className="text-5xl md:text-8xl font-bold m-3 text-center animate-pulse">
                        <span className="header text-green-950">Sign Up</span>
                    </h1>
                </div>
                <SignUpUserForm submitUser={signUp}/>
            </div>
                }
            </div>
            <div className="flex justify-center">
                <Icon sx={{ width: '200px', height: '205px' }} >
                    <img src={Logo} className='w-full h-full'/>
                </Icon>
            </div>
            </div>
        </PageTemplate>
        )
}


export default LoginPage;
