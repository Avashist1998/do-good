import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";

//import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import type UserSignUp from "../types/userSignUp";

const SignUpUserForm = ( props: {
    submitUser : (user: UserSignUp) => void,
    children?: React.ReactNode,
}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [enableSignUpButton, setEnableSignUpButton] = useState(false);

    useEffect(() => {
        let val = true;
        if (name === "") {
            val = val && false;
            setNameError(true);
        } else {
            setNameError(false);
        }
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
    }, [name, email, password])

    const signUpUser = () => {
        const newUser = {
            name: name,
            email: email,
            password: password,
        } as UserSignUp;
        props.submitUser(newUser);
    }
    return (
    <>
        <div>
            <div className="flex flex-col items-center mt-8">
                <div className="w-full md:w-96 p-4 bg-gray-100 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <TextField id="eventName" label="Name" value={name} required onChange={e => setName(e.target.value)} error={nameError}/>
                    </div>
                    <div className="mb-4">
                        <TextField id="creatorEmail" label="Email" value={email} required onChange={e => setEmail(e.target.value)} error={emailError}/>
                    </div>
                    <div className="mb-4">
                        <TextField id="creatorPassword" label="Password" value={password} required onChange={e => setPassword(e.target.value)} type="password" error={passwordError}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="justify-center flex p-2 mt-8">
                <div className="bg-green-900 text-white">
                    <Button variant="contained" color="success" disabled={!enableSignUpButton} onClick={signUpUser}>
                        Sign Up
                    </Button>
                </div>
        </div>
        {props.children}
    </>
    )
}

export default SignUpUserForm;
