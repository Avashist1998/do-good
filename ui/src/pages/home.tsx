import React from 'react';
import { useContext, useState } from 'react';

import getLocation from '../api/location';
import { CurrentUserContext } from '../contexts/UserContext';
import LocationData from '../types/location';
import type ActivityData from '../types/activity';
import ActivityCard from '../components/ActivityCard';

import PageTemplate from './PageTemplate';

const Home: React.FC = () => {

    const { userData, setUserData } = useContext(CurrentUserContext);
    const [location, setLocation] = useState<LocationData | null>(null);

    const logout = () => {
        console.log("Logging out");
        setUserData(null);
        sessionStorage.removeItem("userData");
    }


    return (
        <>
            <PageTemplate>
                <div>
                    <button onClick={logout}>
                        Logout
                    </button>
                </div>
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
                </div>
                <div>
                    <h2>Activity</h2>
                    <div>
                        <ActivityCard activity={{
                            title: "Activity 1",
                            description: "This is the first activity",
                            date: "2021-09-01",
                            lot: 1,
                            log: 1
                        } as ActivityData} />
                    </div>
                </div>
            </PageTemplate>

        </>
    )
}

export default Home;
