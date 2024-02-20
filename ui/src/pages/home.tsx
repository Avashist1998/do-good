import { useContext } from 'react';
import React from 'react';

import { CurrentUserContext } from '../contexts/UserContext';

const Home: React.FC = () => {

    const { userData, setUserData } = useContext(CurrentUserContext);

    const logout = () => {
        console.log("Logging out");
        setUserData(null);
        sessionStorage.removeItem("userData");
    }
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome {userData?.username}</p>
            <p>Your role is {userData?.role}</p>
            <p>Your token is {userData?.token}</p>
            <button onClick={logout}>
                Logout
            </button>
        </div>
    )
}

export default Home;
