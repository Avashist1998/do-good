import React from 'react';
import { useContext, useState } from 'react';

import getLocation from '../api/location';
import { CurrentUserContext } from '../contexts/UserContext';
import LocationData from '../types/location';

const Home: React.FC = () => {

    const { userData, setUserData } = useContext(CurrentUserContext);
    const [location, setLocation] = useState<LocationData | null>(null);

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
            <p>Your location is {location?.lat || ""}, {location?.log || ""}</p>
            <div>                
                <button onClick={() => {
                        getLocation().then((res) => {
                            setLocation(res);
                        }).catch((error) => {
                            console.log(error);
                            setLocation({lat: -1, log: -1} as LocationData);
                        })
                    }}>
                        Get Location
                    </button>
            </div>
            <div>
            <button onClick={logout}>
                Logout
            </button>
            </div>
        </div>
    )
}

export default Home;
