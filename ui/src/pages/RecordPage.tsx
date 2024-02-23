import React, { useState, useContext } from 'react';
import { Button } from '@mui/material';

import getLocation from '../api/location';
import LocationData from '../types/location';
import { CurrentUserContext } from '../contexts/UserContext';

import LayoutTemplate from './LayoutTemplate';

const RecordPage: React.FC = () => {

    const { userData } = useContext(CurrentUserContext);
    const [location, setLocation] = useState<LocationData | null>(null);

    return (
        <LayoutTemplate>
            <div>
                <h1>Record Page</h1>
            </div>
            <div>
                <p>Welcome {userData?.username}</p>
                <p>Your role is {userData?.role}</p>
                <p>Your token is {userData?.token}</p>
                <p>Your location is {location?.lat || ""}, {location?.log || ""}</p>
                <div>                
                    <Button onClick={() => {
                            getLocation().then((res) => {
                                setLocation(res);
                            }).catch((error) => {
                                console.log(error);
                                setLocation({lat: -1, log: -1} as LocationData);
                            })
                        }}>
                        Get Location
                    </Button>
                </div>
            </div>

        </LayoutTemplate>

    )
};



export default RecordPage;