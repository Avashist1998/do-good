import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";

// import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import type UserLogin from "../types/userLogin";


const LogInForm = ( props: {
    logInUser : (user: UserLogin) => void,
    children?: React.ReactNode,
}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [enableSignUpButton, setEnableSignUpButton] = useState(false);

    useEffect(() => {
        let val = true;
        if (email === "" || !email.includes("@") || !email.includes(".")) {
            val = val && false;
            setEmailError(true)
        } else {
            setEmailError(false);
        }
        if (password === "" || password.length < 8) {
            val = val && false;
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
        setEnableSignUpButton(val);
    }, [email, password])

    const logInUser = () => {
        const newUser = {
            email: email,
            password: password,
        } as UserLogin;
        props.logInUser(newUser);
    }
    return (
    <>
        <div className="flex flex-col items-center mt-8">
            <div className="w-full md:w-96 p-4 bg-gray-100 rounded-lg shadow-lg">
                <div className="mb-4">
                    <TextField id="creatorEmail" label="Email" value={email} required onChange={e => setEmail(e.target.value)} error={emailError} fullWidth/>
                </div>
                <div className="mb-4">
                    <TextField id="creatorPassword" label="Password" value={password} required onChange={e => setPassword(e.target.value)} type="password" error={passwordError} fullWidth/>
                </div>
            </div>
        </div>

        <div className="justify-center flex p-2 mt-8">
            <div className="p-4 border border-solid rounded cursor-pointer transition duration-300 bg-green-900">
                <div className="bg-green-900 text-white">
                    <Button variant="contained" color="success" disabled={!enableSignUpButton} onClick={logInUser}>
                        Log In
                    </Button>
                </div>
            </div>
        </div>


        {props.children}
    </>
    )
}

export default LogInForm;