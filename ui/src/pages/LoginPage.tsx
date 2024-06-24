import React from 'react';
import { useContext, useState, Suspense, lazy, useEffect } from 'react';
import { Button, Icon, CircularProgress } from '@mui/material';

// import type UserInfo from '../types/userInfo';
import { CurrentUserContext } from '../contexts/UserContext';
import UserLogin from '../types/userLogin';
import UserSignUp from '../types/userSignUp';
import PageTemplate from './PageTemplate';
import { useNavigate } from 'react-router-dom';
import { signUpUser, loginUser } from "../api/db/auth";


import Logo from '/logo.svg';

type Message = {
    text: string,
    error: boolean
}
    
const LogInForm = lazy(() => import('../forms/login'))
const SignUpUserForm = lazy(() => import('../forms/signUp'))
const MessageAlert = lazy(() => import("../components/MessageAlert"));

const LoginPage: React.FC = () => {

    const navigate = useNavigate();
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState<Message>({text: "", error: false} as Message);
    const { setUserData } = useContext(CurrentUserContext);    
    const [showLoginIn, setShowLoginIn] = useState<boolean>(true)

    const login = (user: UserLogin) => {
        console.log("Logging in");
        console.log(user);
        loginUser(user).then(res => {
            console.log("user returned")
            console.log(res)
            sessionStorage.setItem("userData", JSON.stringify(res));
            setUserData(res);
            navigate("/");
        }).catch(err => {
            console.log(err);
            setShowMessage(true)
            setMessage({text: "Login user failed", error: true} as Message);
        })
    }

    const signUp = (user: UserSignUp) => {
        console.log("Signing up");
        console.log(user);
        signUpUser(user).then(res => {
            sessionStorage.setItem("userData", JSON.stringify(res));
            setUserData(res);
            setShowMessage(true)
            setMessage({text: "Congratulations you have sign up", error: false} as Message);
        }).catch(err => {
            console.log(err);
            setShowMessage(true)
            setMessage({text: "User sign up failed", error: true} as Message);
        })
    }

    useEffect(() => {
        setShowMessage(false);
        setMessage({text: "", error: false})
    }, [showLoginIn])

    return (
        <PageTemplate>
            <div className="h-lvh py-16">
                <div className="flex justify-center space-x-4">
                    <div className='rounded-lg'>
                        <Button variant="contained" sx={{borderRadius: 2, backgroundColor: 'white', color: 'black' }} disabled={!showLoginIn} onClick={() => {setShowLoginIn(false)}}>
                            Sign Up
                        </Button> 
                    </div>
                    <div className='rounded-lg'>
                        <Button color="primary" variant="contained" sx={{borderRadius: 2,  backgroundColor: 'white', color: 'black' }} disabled={showLoginIn} onClick={() => {setShowLoginIn(true)}}>
                            Log In
                        </Button>
                    </div>
                </div>

                <div className="flex justify-center">

                { showLoginIn ? 
                    <div>
                        <div className="flex justify-center">
                        <h1 className="text-5xl md:text-8xl font-bold m-5 text-center animate-pulse">
                            <span className="header text-green-950">Log In</span>
                        </h1>
                    </div>
                    <Suspense fallback={<CircularProgress/>}>
                        <LogInForm logInUser={login}/>
                    </Suspense>
                    </div> 
                : 
                    <div>
                        <div className="flex justify-center">
                            <h1 className="text-5xl md:text-8xl font-bold m-3 text-center animate-pulse">
                                <span className="header text-green-950">Sign Up</span>
                            </h1>
                        </div>
                        <Suspense fallback={<CircularProgress/>}>
                            <SignUpUserForm submitUser={signUp}/>
                        </Suspense>
                    </div>
                }
                </div>
                {
                    showMessage ?
                    <Suspense fallback={<CircularProgress/>}>
                        <MessageAlert isError={message.error} msg={message.text}/> 
                    </Suspense> : null
                }
                <div className="flex justify-center z-10">
                    <Icon sx={{ width: '200px', height: '205px' }} >
                        <img src={Logo} className='w-full h-full'/>
                    </Icon>
                </div>
            </div>
        </PageTemplate>
        )
}


export default LoginPage;
